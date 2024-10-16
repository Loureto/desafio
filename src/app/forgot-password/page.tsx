import { Metadata } from 'next'
import { importDynamicComponent } from '@/core'

export const metadata: Metadata = {
  title: 'Resetar senha'
}

const ResetPasswordPage = importDynamicComponent(
  import('@/modules/auth').then((page) => page.ResetPasswordViewModel)
)

export default ResetPasswordPage
