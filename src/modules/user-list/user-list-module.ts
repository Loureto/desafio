import { container, CORETYPES, HttpClient } from '@/core'
import 'reflect-metadata'
import { GetUserRemoteDatasource } from './data'
import { IGetUserUsecase } from './domain'

export const USERTYPES = {
  GetUserUsecase: Symbol.for('GetUserUsecase')
}

container.bind<IGetUserUsecase>(USERTYPES.GetUserUsecase).toDynamicValue(() => {
  const axiosHttpClient = container.get<(isCep?: boolean) => HttpClient>(
    CORETYPES.AxiosHttpClient
  )
  return new GetUserRemoteDatasource(axiosHttpClient(false))
})
