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
export const roleInRoles = (role: InputRole, roles: InputRole[]) => {
  return roles.map(r => r.id).includes(role.id);
};

export const haveMatchingRole = (rolesA: InputRole[], rolesB: InputRole[]) => {
  const roleBIds = rolesB.map(r => r.id);
  return !!rolesA.find(role => roleBIds.includes(role.id));
};
