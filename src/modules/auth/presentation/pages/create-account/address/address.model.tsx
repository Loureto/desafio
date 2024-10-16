'use client'

import { IGetZipCode } from '@/modules/auth/domain'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useCreateAccountStore } from '../../../store'
import { AddressSchema, addressValidation } from '../../../validations'

const initialValues = {
  street: '',
  neighborhood: '',
  number: '',
  city: '',
  state: '',
  zipCode: ''
}

export const useAddressModel = (execute: IGetZipCode) => {
  const { account } = useCreateAccountStore()
  const { control, handleSubmit, setValue } = useForm<AddressSchema>({
    defaultValues: initialValues,
    resolver: zodResolver(addressValidation)
  })

  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function getZipCode(zipCode: string) {
    setLoading(true)
    try {
      const response = await execute.get(zipCode.replace(/\D/g, ''))
      setValue('state', response.uf)
      setValue('city', response.localidade)
      setValue('neighborhood', response.bairro)
      setValue('street', response.logradouro)
    } catch (error) {
      console.log(error)
      alert('Ocorreu um erro ao buscar o endereço')
    }
    setLoading(false)
  }

  function handleSubmitForm(data: AddressSchema) {
    alert(`
      Nome: ${account.name}
      Email: ${account.email}
      Senha: ${account.password}
      CEP: ${data.zipCode}
      Endereço: ${data.street}
      Bairro: ${data.neighborhood}
      Cidade: ${data.city}
      UF: ${data.state}
    `)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return {
    account,
    control,
    handleSubmit,
    mounted,
    handleSubmitForm,
    getZipCode,
    loading
  }
}
