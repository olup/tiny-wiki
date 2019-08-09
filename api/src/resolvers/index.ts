import { Mutation } from "./Mutation";
import { Query } from "./Query";
import { User } from "./User";
import { Page } from "./Page";
import { Role } from "./Role";
import { nexusPrismaPlugin } from "@generated/nexus-prisma";
import photon from "../libs/photon";

const nexusPrisma = nexusPrismaPlugin({
  photon: ctx => photon
});

export const resolvers = [Query, Mutation, User, Page, Role, nexusPrisma];
