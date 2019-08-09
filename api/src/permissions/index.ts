import { rule, shield, allow } from "graphql-shield";
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
  })
};

export default shield({
  Query: {
    "*": rules.isAuthenticatedUser
  },
  Mutation: {
    loginWithGoogleToken: allow,
    deleteOneRole: rule()(async (parent, args, ctx, info) => {
      const id = args.where.id;
      const role = await photon.roles.findOne({ where: { id } });
      return !role.locked;
    }),
    "*": rules.isAuthenticatedUser
  },
  Page: rule()(async (parent, args, ctx, info) => {
    const userRoles = ctx.roles;
    const adminRole = await getAdminRole();
    if (roleInRoles(adminRole, userRoles)) return true;

    const { id } = parent;
    const canView = await photon.pages.findOne({ where: { id: id } }).canView();
    const publicRole = await getPublicRole();
    if (roleInRoles(publicRole, canView)) return true;

    return haveMatchingRole(userRoles, canView);
  })
});
