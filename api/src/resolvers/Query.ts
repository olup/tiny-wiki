import photon from "../libs/photon";
import { objectType } from "@prisma/nexus";

export const Query = objectType({
  name: "Query",
  definition(t) {
    t.crud.findOnePage();
    t.crud.findManyUser();
    t.crud.findManyRole();

    t.list.field("listPages", {
      type: "Page",
      resolve: async (a, b, ctx) => {
        const roles = ctx.roles;
        const user = ctx.user;

        const pages = await photon.pages.findMany({
          include: { canView: true, draftOwner: true }
        });

        return pages.filter(p => {
          if (roles.includes("admin")) return true;

          if (p.draftOwner && p.draftOwner.id === user.id) return true;

          return !!p.canView.find(r => {
            if (r.slug === "public") return true;
            return roles.includes(r.slug);
          });
        });
      }
    });
  }
});
