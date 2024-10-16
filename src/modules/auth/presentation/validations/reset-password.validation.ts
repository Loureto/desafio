import { z } from 'zod'

export const resetPasswordValidation = z.object({
  email: z.string().min(1, 'Campo obrigatório.').email('E-mail inválido.')
})

export type ResetPasswordSchema = z.infer<typeof resetPasswordValidation>
