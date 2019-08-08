require("dotenv").config();

import { getUserFromJwt } from "./utils";
import permissions from "./permissions";
import { sign } from "jsonwebtoken";
import { verifyGoogleLogin } from "./libs/google";
import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import photon from "./libs/photon";
import { objectType, makeSchema, stringArg } from "@prisma/nexus";
import { GraphQLServer } from "graphql-yoga";
import { join } from "path";
import { resolve } from "path";
import express from "express";

const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.roles();
  }
});

const Role = objectType({
  name: "Role",
  definition(t) {
    t.model.id();
    t.model.slug();
    t.model.locked();
  }
});

const Page = objectType({
  name: "Page",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.content();
    t.model.slug();
    t.model.canEdit();
    t.model.canView();
  }
});

const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.findManyPage();
    t.crud.findOnePage();
    t.crud.findManyUser();
    t.crud.findManyRole();
  }
});

const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.upsertOnePage();
    t.crud.deleteOnePage();
    t.crud.deleteOneUser();
    t.crud.createOneRole();
    t.crud.deleteOneRole();

    t.string("loginWithGoogleToken", {
      args: { token: stringArg({ nullable: false }) },
      resolve: async (_, { token }) => {
        const email = await verifyGoogleLogin(token);
        const user = await photon.users.findOne({ where: { email } });
        if (!user) throw new Error();
        if (user) return sign({ user }, process.env.JWT_SECRET);
      }
    });
  }
});

async function main() {
  const nexusPrisma = nexusPrismaPlugin({
    photon: ctx => photon
  });

  const schema = makeSchema({
    types: [Query, Mutation, Page, User, Role, nexusPrisma],
    outputs: {
      schema: join(__dirname, "generated/schema.graphql"),
      typegen: join(__dirname, "generated/nexus.ts")
    }
  });

  const server = new GraphQLServer({
    // @ts-ignore
    schema,
    middlewares: [permissions],
    context: ({ request }) => {
      let user = null;
      try {
        const authHeader = request.get("Authorization");
        let token = "";
        if (authHeader) token = authHeader.split(" ")[1];
        user = getUserFromJwt(token);
      } catch (e) {}
      return {
        ...(user && { user }),
        photon
      };
    }
  });

  // init
  const adminRole = await photon.roles.upsert({
    where: { slug: "admin" },
    create: { slug: "admin", locked: true },
    update: {}
  });

  await photon.roles.upsert({
    where: { slug: "public" },
    create: { slug: "public", locked: true },
    update: {}
  });

  await photon.users.upsert({
    where: { email: process.env.ADMIN_EMAIL },
    create: {
      email: process.env.ADMIN_EMAIL,
      roles: { connect: [{ id: adminRole.id }] }
    },
    update: {}
  });

  // launch server
  server
    .start({
      debug: true,
      port: 4040
    })
    .then(() => console.log("Server is running on http://localhost:4040"));
}

main().catch(console.error);
