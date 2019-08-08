import { verify } from "jsonwebtoken";
export const getUserFromJwt = (jwt: string) => {
  return verify(jwt, process.env.JWT_SECRET);
};
