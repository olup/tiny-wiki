import { objectType } from "nexus";

export const Page = objectType({
  name: "Page",
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.content();
    t.model.slug();
    t.model.canEdit();
    t.model.canView();
    t.model.draftOwner();
    t.model.updatedAt();
    t.model.createdAt();
  }
});
