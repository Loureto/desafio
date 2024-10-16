/* eslint-disable @next/next/no-img-element */
'use client'

import { Button, Input, InputGroup, Label } from '@/core'
import Link from 'next/link'
import { Controller } from 'react-hook-form'
import { useAddressModel } from './address.model'

type CreateAccountViewProps = ReturnType<typeof useAddressModel>

export const AddressView = (props: CreateAccountViewProps) => {
  const {
    control,
    mounted,
    loading,
    handleSubmit,
    handleSubmitForm,
    getZipCode
  } = props

  return (
    <div className="relative flex h-full w-full flex-col px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Criar conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
          <Controller
            name="zipCode"
            control={control}
            render={({ field: { onBlur, ...rest }, formState: { errors } }) => (
              <InputGroup>
                <Label htmlFor="zipCode" text="CEP" />
                <Input
                  id="zipCode"
                  placeholder="Digite o seu CEP"
                  errorMessage={errors.zipCode?.message}
                  onBlur={() => {
                    getZipCode(rest.value)
                    onBlur()
                  }}
                  {...rest}
                />
              </InputGroup>
            )}
          />

          <div className="flex flex-col gap-4 sm:flex-row">
            <Controller
              name="city"
              control={control}
              render={({
                field: { value = '', ...rest },
                formState: { errors }
              }) => (
                <InputGroup>
                  <Label htmlFor="city" text="cidade" />
                  <Input
                    id="city"
                    disabled={loading}
                    value={value}
                    placeholder="Informe a sua cidade"
                    errorMessage={errors.city?.message}
                    {...rest}
                  />
                </InputGroup>
              )}
            />

            <Controller
              name="state"
              control={control}
              render={({
                field: { value, ...rest },
                formState: { errors }
              }) => (
                <InputGroup>
                  <Label htmlFor="state" text="Estado" />
                  <Input
                    id="state"
                    value={value}
                    placeholder="Informe o seu estado"
                    errorMessage={errors.state?.message}
                    {...rest}
                  />
                </InputGroup>
              )}
            />
          </div>
          <Controller
            name="street"
            control={control}
            render={({
              field: { value = '', ...rest },
              formState: { errors }
            }) => (
              <InputGroup>
                <Label htmlFor="street" text="Rua" />
                <Input
                  id="street"
                  disabled={loading}
                  value={value}
                  placeholder="Informe o nome da rua"
                  errorMessage={errors.street?.message}
                  {...rest}
                />
              </InputGroup>
            )}
          />

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Controller
              name="neighborhood"
              control={control}
              render={({
                field: { value = '', ...rest },
                formState: { errors }
              }) => (
                <InputGroup>
                  <Label htmlFor="neighborhood" text="Bairro" />
                  <Input
                    id="neighborhood"
                    disabled={loading}
                    value={value}
                    placeholder="Informe o bairro"
                    errorMessage={errors.neighborhood?.message}
                    {...rest}
                  />
                </InputGroup>
              )}
            />
            <Controller
              name="number"
              control={control}
              render={({ field: { ...rest }, formState: { errors } }) => (
                <InputGroup>
                  <Label htmlFor="number" text="Número" />
                  <Input
                    id="number"
                    placeholder="Informe o número da casa"
                    errorMessage={errors.number?.message}
                    {...rest}
                  />
                </InputGroup>
              )}
            />
          </div>

          <Button disabled={!mounted} type="submit">
            Enviar
          </Button>
        </form>
      </div>
      <Link
        href="/sign-in"
        className="mx-auto mb-10 mt-6 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
      >
        Retornar para login
      </Link>
    </div>
  )
}
