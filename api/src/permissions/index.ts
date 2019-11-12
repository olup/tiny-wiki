import { rule, shield, allow } from 'graphql-shield'

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    return Boolean(context.user && context.user.id)
  }),
}

export const permissions = shield({
  Query: {
    '*': rules.isAuthenticatedUser,
  },
  Mutation: {
    loginWithGoogleToken: allow,
    '*': rules.isAuthenticatedUser,
  },
})
