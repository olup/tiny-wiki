require("dotenv").config();

import { getUserFromJwt } from "./utils";
import permissions from "./permissions";
import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import photon from "./libs/photon";
import { makeSchema } from "@prisma/nexus";
import { GraphQLServer } from "graphql-yoga";
import { join } from "path";
import { resolvers } from "./resolvers";

async function main() {
  const schema = makeSchema({
    types: resolvers,
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
      let datas = null;
      try {
        const authHeader = request.get("Authorization");
        let token = "";
        if (authHeader) token = authHeader.split(" ")[1];
        datas = getUserFromJwt(token);
      } catch (e) {}
      return {
        ...(datas && datas instanceof Object && { ...datas }),
        photon
      };
    }
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
