import { rule, shield, allow, and, or } from "graphql-shield";
import photon from "../libs/photon";
import {
  getAdminRole,
  roleInRoles,
  getPublicRole,
  haveMatchingRole
} from "../tools";

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    return !!context.user;
  }),
  canViewPage: rule()(async (parent, args, ctx, info) => {
    const { id } = parent;
    const canView = await photon.pages.findOne({ where: { id: id } }).canView();
    const publicRole = await getPublicRole();
    if (roleInRoles(publicRole, canView)) return true;

    const userRoles = ctx.roles;
    return haveMatchingRole(userRoles, canView);
  }),
  canEditPage: rule()(async (parent, args, ctx, info) => {
    const { id } = parent;
    const canEdit = await photon.pages.findOne({ where: { id: id } }).canEdit();
    const publicRole = await getPublicRole();
    if (roleInRoles(publicRole, canEdit)) return true;

    const userRoles = ctx.roles;
    return haveMatchingRole(userRoles, canEdit);
  }),
  isAdmin: rule()(async (parent, args, ctx, info) => {
    const userRoles = ctx.roles;
    const adminRole = await getAdminRole();
    if (roleInRoles(adminRole, userRoles)) return true;
    return false;
  }),
  roleIsEditable: rule()(async (parent, args, ctx, info) => {
    const id = args.where.id;
    const role = await photon.roles.findOne({ where: { id } });
    return !role.locked;
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
      or(rules.isAdmin, rules.canEditPage)
    ),
    deleteOnePage: and(
      rules.isAuthenticatedUser,
      or(rules.isAdmin, rules.canEditPage)
    )
  },

  Page: and(rules.isAuthenticatedUser, or(rules.isAdmin, rules.canViewPage))
});
