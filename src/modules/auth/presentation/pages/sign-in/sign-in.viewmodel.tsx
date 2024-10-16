'use client'

import { container, CookieStorageAdapter, CORETYPES } from '@/core'
import { useSignInModel } from './sign-in.model'
import { SingInView } from './sign-in.view'

export const SignInViewModel = () => {
  const storage = container.get<CookieStorageAdapter>(CORETYPES.Cache)
  const methods = useSignInModel({ storage })
  return <SingInView {...methods} />
}
