'use client'

import { useCreateAccountStore } from '../../store'
import { AddressViewModel } from './address'
import { useCreateAccountModel } from './create-account.model'
import { CreateAccountView } from './create-account.view'

export const CreateAccountViewModel = () => {
  const { step } = useCreateAccountStore()
  const methods = useCreateAccountModel()
  return step === 1 ? <CreateAccountView {...methods} /> : <AddressViewModel />
}
