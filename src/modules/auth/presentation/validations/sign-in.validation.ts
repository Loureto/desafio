import { z } from 'zod'

export const signInValidation = z.object({
  email: z.string().min(1, 'Campo obrigatório.').email('E-mail invalido.'),
  password: z.string().min(1, 'Campo obrigatório.')
})

export type SignInSchema = z.infer<typeof signInValidation>
