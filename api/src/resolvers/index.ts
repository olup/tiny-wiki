import { Mutation } from "./Mutation";
import { Query } from "./Query";
import { User } from "./User";
import { Page } from "./Page";
import { Role } from "./Role";

export const resolvers = [Query, Mutation, User, Page, Role];
