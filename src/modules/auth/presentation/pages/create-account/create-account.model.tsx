'use client'

import { useForm } from 'react-hook-form'
import { CreateAccountSchema, createAccountValidation } from '../../validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useCreateAccountStore } from '../../store'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const useCreateAccountModel = () => {
  const { account, setStep, setAccount, reset } = useCreateAccountStore()
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { control, handleSubmit } = useForm<CreateAccountSchema>({
    defaultValues: initialValues,
    resolver: zodResolver(createAccountValidation)
  })

  function handleSubmitForm(data: CreateAccountSchema) {
    setAccount({ ...account, ...data })
    setStep()
  }

  useEffect(() => {
    setMounted(true)

    return () => reset()
  }, [reset])

  return {
    control,
    handleSubmit,
    isVisible,
    setIsVisible,
    mounted,
    handleSubmitForm
  }
}
