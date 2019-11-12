import { Photon } from '@generated/photon'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { verify } from 'jsonwebtoken'
const photon = new Photon()

export interface Context {
  photon: Photon
  request: any
}

export function createContext(request: ContextParameters) {
  const authHeader = request.request.get('Authorization')
  let token = ''
  if (authHeader) token = authHeader.split(' ')[1]
  const jwtDatas =
    token && (verify(token, process.env.JWT_SECRET || '') as object)

  return {
    ...request,
    photon,
    ...(jwtDatas ? jwtDatas : {}),
  }
}
