import { Metadata } from 'next'
import { importDynamicComponent } from '@/core'

export const metadata: Metadata = {
  title: 'Login'
}

const SignInPage = importDynamicComponent(
  import('@/modules/auth').then((page) => page.SignInViewModel)
)

export default SignInPage
