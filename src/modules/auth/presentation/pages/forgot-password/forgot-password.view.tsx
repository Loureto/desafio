/* eslint-disable @next/next/no-img-element */
'use client'

import { Button, Input, InputGroup, Label } from '@/core'
import { Controller } from 'react-hook-form'
import { useResetPasswordModel } from './forgot-password.model'
import Link from 'next/link'

type ResetPasswordViewProps = ReturnType<typeof useResetPasswordModel>

export const ResetPasswordView = (props: ResetPasswordViewProps) => {
  const { control, mounted, handleSubmit } = props

  return (
    <div className="flex h-screen w-full flex-col overflow-auto px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Recuperar senha
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className="space-y-6"
        >
          <Controller
            name="email"
            control={control}
            render={({ field, formState: { errors } }) => (
              <InputGroup>
                <Label htmlFor="email" text="E-mail" />
                <Input
                  id="email"
                  placeholder="Digite seu e-mail"
                  errorMessage={errors.email?.message}
                  {...field}
                />
              </InputGroup>
            )}
          />

          <Button disabled={!mounted} type="submit">
            Enviar
          </Button>
        </form>
      </div>

      <Link
        href="/sign-in"
        className="mx-auto mt-6 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
      >
        Voltar para login
      </Link>
    </div>
  )
}
