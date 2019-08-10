import { objectType } from "@prisma/nexus";

export const Role = objectType({
  name: "Role",
  definition(t) {
    t.model.slug();
    t.model.locked();
  }
});
