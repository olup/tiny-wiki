import { rule, shield, allow, and, or } from "graphql-shield";
import photon from "../libs/photon";
import { roleInRoles, haveMatchingRole } from "../tools";

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    return !!context.user;
  }),
  canViewPage: rule()(async (parent, args, ctx, info) => {
    const { id } = parent;
    const canView = await photon.pages.findOne({ where: { id: id } }).canView();
    if (roleInRoles("admin", canView.map(r => r.slug))) return true;

    const userRoles = ctx.roles;
    return haveMatchingRole(userRoles, canView.map(r => r.slug));
  }),
  canEditPage: rule()(async (parent, args, ctx, info) => {
    // console.log(args);
    const slug = args.where.slug;
    const id = args.where.id;
    const page = await photon.pages
      .findOne({
        where: { slug, id },
        include: { canEdit: true }
      })
      .catch(e => console.log(e));
    console.log(page);
    //** Creation */
    if (!page) return true;

    if (roleInRoles("public", page.canEdit.map(r => r.slug))) return true;

    const userRoles = ctx.roles;
    return haveMatchingRole(userRoles, page.canEdit.map(r => r.slug));
  }),
  isAdmin: rule()(async (parent, args, ctx, info) => {
    const userRoles = ctx.roles;
    if (roleInRoles("admin", userRoles)) return true;
    return false;
  }),
  roleIsEditable: rule()(async (parent, args, ctx, info) => {
    const slug = args.where.slug;
    const role = await photon.roles.findOne({ where: { slug } });
    return !role.locked;
  }),
  isPageOwner: rule()(async (parent, args, ctx, info) => {
    const id = args.where.id;
    const slug = args.where.slug;

    const page = await photon.pages.findOne({
      where: { id, slug },
      include: { draftOwner: true }
    });
    if (!page) return true;
    if (page.draftOwner && page.draftOwner.id == ctx.user.id) return true;
    return false;
  })
};

export default shield({
  Query: {
    "*": rules.isAuthenticatedUser
  },
  Mutation: {
    loginWithGoogleToken: allow,

    createOneRole: and(rules.isAuthenticatedUser, rules.isAdmin),
    deleteOneRole: and(
      rules.isAuthenticatedUser,
      rules.isAdmin,
      rules.roleIsEditable
    ),

    upsertOnePage: and(
      rules.isAuthenticatedUser,
      or(rules.isAdmin, rules.canEditPage, rules.isPageOwner)
    ),
    deleteOnePage: and(
      rules.isAuthenticatedUser,
      or(rules.isAdmin, rules.canEditPage, rules.isPageOwner)
    )
  }

  // Page: and(rules.isAuthenticatedUser, or(rules.isAdmin, rules.canViewPage))
});
