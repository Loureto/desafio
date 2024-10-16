import { Container } from 'inversify'
import 'reflect-metadata'
import { HttpClient } from './data'
import { AxiosHttpClient, CookieStorageAdapter } from './infra'

export const CORETYPES = {
  CepBaseUrl: Symbol.for('BaseUrl'),
  UserBaseUrl: Symbol.for('UserBaseUrl'),
  AxiosHttpClient: Symbol.for('AxiosHttpClient'),
  Cache: Symbol.for('Cache')
}

export const container = new Container()

/// BASE URL
container
  .bind<string | undefined>(CORETYPES.CepBaseUrl)
  .toConstantValue(process.env.NEXT_PUBLIC_CEP_BASE_URL)

container
  .bind<string | undefined>(CORETYPES.UserBaseUrl)
  .toConstantValue(process.env.NEXT_PUBLIC_USER_BASE_URL)

/// FACTORY CACHE
container
  .bind<CookieStorageAdapter>(CORETYPES.Cache)
  .toConstantValue(new CookieStorageAdapter())

container
  .bind<(isCep?: boolean) => HttpClient>(CORETYPES.AxiosHttpClient)
  .toDynamicValue((context) => (isCep?: boolean) => {
    if (isCep) {
      return new AxiosHttpClient(context.container.get(CORETYPES.CepBaseUrl))
    }
    return new AxiosHttpClient(context.container.get(CORETYPES.UserBaseUrl))
  })
