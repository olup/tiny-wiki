import photon from "./libs/photon";

export default async () => {
  await photon.roles.upsert({
    where: { slug: "admin" },
    create: { slug: "admin", locked: true },
    update: {}
  });

  await photon.roles.upsert({
    where: { slug: "public" },
    create: { slug: "public", locked: true },
    update: {}
  });

  await photon.users.upsert({
    where: { email: process.env.ADMIN_EMAIL },
    create: {
      email: process.env.ADMIN_EMAIL,
      roles: { connect: [{ slug: "admin" }] }
    },
    update: {}
  });
};
