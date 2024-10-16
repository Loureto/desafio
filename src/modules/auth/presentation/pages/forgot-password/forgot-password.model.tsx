'use client'

import { useForm } from 'react-hook-form'
import { ResetPasswordSchema, resetPasswordValidation } from '../../validations'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'

const initialValues = {
  email: ''
}

export const useResetPasswordModel = () => {
  const [mounted, setMounted] = useState(false)
  const { control, handleSubmit } = useForm<ResetPasswordSchema>({
    defaultValues: initialValues,
    resolver: zodResolver(resetPasswordValidation)
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    control,
    handleSubmit,
    mounted
  }
}
