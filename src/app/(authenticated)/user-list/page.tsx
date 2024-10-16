import { Metadata } from 'next'
import { importDynamicComponent } from '@/core'

export const metadata: Metadata = {
  title: 'User List'
}

const UserListPage = importDynamicComponent(
  import('@/modules/user-list').then((page) => page.HomeViewModel)
)

export default UserListPage
