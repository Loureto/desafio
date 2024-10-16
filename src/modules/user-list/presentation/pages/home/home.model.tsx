'use client'

import { IGetUserUsecase } from '@/modules/user-list/domain'
import { useCallback, useState } from 'react'

export const useHomeModel = (execute: IGetUserUsecase) => {
  const [userData, setUserData] = useState<IGetUserUsecase.Result>()

  const getUsers = useCallback(
    async (params: IGetUserUsecase.Params) => {
      const response = await execute.getUsers(params)

      setUserData(response)
    },
    [execute]
  )

  return {
    userData,
    getUsers
  }
}
