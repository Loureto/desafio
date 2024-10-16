import { Metadata } from 'next'
import { importDynamicComponent } from '@/core'

export const metadata: Metadata = {
  title: 'Criar conta'
}

const CreateAccountPage = importDynamicComponent(
  import('@/modules/auth').then((page) => page.CreateAccountViewModel)
)

export default CreateAccountPage
