/* eslint-disable @next/next/no-img-element */
'use client'

import { Button, ButtonViewPassword, Input, InputGroup, Label } from '@/core'
import Link from 'next/link'
import { Controller } from 'react-hook-form'
import { useSignInModel } from './sign-in.model'

type SignInViewProps = ReturnType<typeof useSignInModel>

export const SingInView = (props: SignInViewProps) => {
  const {
    control,
    handleSubmit,
    isVisible,
    setIsVisible,
    mounted,
    handleSubmitForm
  } = props

  return (
    <div className="flex h-screen w-full flex-col overflow-auto px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Entre com sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
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

          <Controller
            name="password"
            control={control}
            render={({ field, formState: { errors } }) => (
              <InputGroup>
                <Label htmlFor="password" text="Senha" />
                <Link
                  href="/forgot-password"
                  className="absolute right-0 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Esqueceu sua senha?
                </Link>

                <Input
                  id="password"
                  type={isVisible ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                  errorMessage={errors.password?.message}
                  endContent={
                    <ButtonViewPassword
                      isVisible={isVisible}
                      onClick={() => setIsVisible(!isVisible)}
                    />
                  }
                  {...field}
                />
              </InputGroup>
            )}
          />

          <Button disabled={!mounted} type="submit">
            Entrar
          </Button>
        </form>
      </div>
      <Link
        href="/create-account"
        className="mx-auto mt-6 text-sm font-semibold text-indigo-400 hover:text-indigo-300"
      >
        Criar conta
      </Link>
    </div>
  )
}
