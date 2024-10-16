import { container, CORETYPES } from '@/core'
import 'reflect-metadata'
import { IGetZipCode } from './domain'
import { GetZipCodeRemoteDataSource } from './data'

export const AUTHTYPES = {
  ZipCodeUsecase: Symbol.for('ZipCodeUsecase')
}

/// REMOTE
container
  .bind<IGetZipCode>(AUTHTYPES.ZipCodeUsecase)
  .toDynamicValue(
    (context) =>
      new GetZipCodeRemoteDataSource(
        context.container.get(CORETYPES.AxiosHttpClient)
      )
  )
