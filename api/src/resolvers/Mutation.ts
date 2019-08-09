import { sign } from "jsonwebtoken";
import { stringArg } from "@prisma/nexus";
import { objectType } from "@prisma/nexus";
import { verifyGoogleLogin } from "../libs/google";
import photon from "../libs/photon";

export const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.crud.createOneUser();
    t.crud.updateOneUser();
    t.crud.upsertOnePage();
    t.crud.deleteOnePage();
    t.crud.deleteOneUser();
    t.crud.createOneRole();
    t.crud.deleteOneRole();

    t.string("loginWithGoogleToken", {
      args: { token: stringArg({ nullable: false }) },
      resolve: async (_, { token }) => {
        const email = await verifyGoogleLogin(token);
        const user = await photon.users.findOne({ where: { email } });
        const roles = await photon.users.findOne({ where: { email } }).roles();
        if (!user) throw new Error();
        if (user)
          return sign(
            { user, roles: roles.map(r => r.id) },
            process.env.JWT_SECRET
          );
      }
    });
  }
});
