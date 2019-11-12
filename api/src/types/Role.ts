import { objectType } from "nexus";

export const Role = objectType({
  name: "Role",
  definition(t) {
    t.model.slug();
    t.model.locked();
  }
});
