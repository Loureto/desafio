'use client'

import { container } from '@/core'
import { useHomeModel } from './home.model'
import { IGetUserUsecase } from '@/modules/user-list/domain'
import { USERTYPES } from '@/modules/user-list/user-list-module'
import { HomeView } from './home.view'

export const HomeViewModel = () => {
  const execute = container.get<IGetUserUsecase>(USERTYPES.GetUserUsecase)
  const methods = useHomeModel(execute)
  return <HomeView {...methods} />
}
