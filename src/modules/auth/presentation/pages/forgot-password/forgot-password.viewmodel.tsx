'use client'

import { useResetPasswordModel } from './forgot-password.model'
import { ResetPasswordView } from './forgot-password.view'

export const ResetPasswordViewModel = () => {
  const methods = useResetPasswordModel()
  return <ResetPasswordView {...methods} />
}
