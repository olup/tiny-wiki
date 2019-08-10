import photon from "../libs/photon";
import Photon, { Role, RoleClient } from "@generated/photon";

export const roleInRoles = (role: string, roles: string[]) => {
  return roles.includes(role);
};

export const haveMatchingRole = (rolesA: string[], rolesB: string[]) => {
  return !!rolesA.find(role => rolesB.includes(role));
};
