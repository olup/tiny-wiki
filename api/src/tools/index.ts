import photon from "../libs/photon";
import Photon, { Role, RoleClient } from "@generated/photon";
import { string } from "yup";

let adminRole: Role;
let publicRole: Role;
export const getAdminRole = async () => {
  if (adminRole) return adminRole;
  else {
    adminRole = await photon.roles.findOne({ where: { slug: "admin" } });
    return adminRole;
  }
};

export const getPublicRole = async () => {
  if (publicRole) return publicRole;
  else {
    publicRole = await photon.roles.findOne({ where: { slug: "public" } });
    return publicRole;
  }
};

type InputRole = Partial<Role> & {
  id: Role["id"];
};
export const roleInRoles = (role: string, roles: string[]) => {
  return roles.includes(role);
};

export const haveMatchingRole = (rolesA: string[], rolesB: string[]) => {
  return !!rolesA.find(role => rolesB.includes(role));
};
