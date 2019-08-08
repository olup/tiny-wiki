import { rule, shield, allow } from "graphql-shield";
import photon from "../libs/photon";

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
  }
});
