'use client'

import { container } from '@/core'
import { useAddressModel } from './address.model'
import { AddressView } from './address.view'
import { IGetZipCode } from '@/modules/auth/domain'
import { AUTHTYPES } from '@/modules/auth/auth-module'

export const AddressViewModel = () => {
  const execute = container.get<IGetZipCode>(AUTHTYPES.ZipCodeUsecase)
  const methods = useAddressModel(execute)
  return <AddressView {...methods} />
}
