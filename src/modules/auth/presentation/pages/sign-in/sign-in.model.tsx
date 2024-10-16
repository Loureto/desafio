'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SignInSchema, signInValidation } from '../../validations'
import { CookieStorageAdapter } from '@/core'
import { useRouter } from 'next/navigation'

type SignInModelProps = {
  storage: CookieStorageAdapter
}

const initialValues = {
  email: '',
  password: ''
}

export const useSignInModel = ({ storage }: SignInModelProps) => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { control, handleSubmit } = useForm<SignInSchema>({
    defaultValues: initialValues,
    resolver: zodResolver(signInValidation)
  })

  function handleSubmitForm(data: SignInSchema) {
    const account = {
      ...data,
      accessToken: 'true'
    }
    storage.set('account', account)
    router.replace('/user-list')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    control,
    handleSubmit,
    isVisible,
    setIsVisible,
    mounted,
    handleSubmitForm
  }
}
