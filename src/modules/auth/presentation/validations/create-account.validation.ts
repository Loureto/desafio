import { z } from 'zod'

export const createAccountValidation = z
  .object({
    name: z.string().min(1, 'Campo obrigatório.'),
    email: z.string().min(1, 'Campo obrigatório.').email('E-mail inválido.'),
    password: z.string().min(1, 'Campo obrigatório.'),
    confirmPassword: z.string().min(1, 'Campo obrigatório.')
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'As senhas precisam ser iguais.'
      })
    }
  })

export type CreateAccountSchema = z.infer<typeof createAccountValidation>
