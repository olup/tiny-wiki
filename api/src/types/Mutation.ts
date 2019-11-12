import { sign } from 'jsonwebtoken'
import { objectType, stringArg } from 'nexus'
import { verifyGoogleLogin } from '../libs/google'
export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.crud.createOneUser()
    t.crud.updateOneUser()
    t.crud.upsertOnePage()
    t.crud.deleteOnePage()
    t.crud.deleteOneUser()
    t.crud.createOneRole()
    t.crud.deleteOneRole()

    t.string('loginWithGoogleToken', {
      args: { token: stringArg({ nullable: false }) },
      resolve: async (_, { token }, ctx) => {
        const email = await verifyGoogleLogin(token)
        console.log(process.env.JWT_SECRET)
        const user = await ctx.photon.users.findOne({ where: { email } })
        const roles = await ctx.photon.users
          .findOne({ where: { email } })
          .roles()
        if (!user) throw new Error()
        if (user)
          return sign(
            { user, roles: roles.map(r => r.slug) },
            process.env.JWT_SECRET || '',
          )
      },
    })
  },
})
