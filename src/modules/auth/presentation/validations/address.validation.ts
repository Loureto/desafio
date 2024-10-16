import { z } from 'zod'

export const addressValidation = z.object({
  street: z.string().min(1, 'Campo obrigatório.'),
  neighborhood: z.string().min(1, 'Campo obrigatório.'),
  number: z.string().min(1, 'Campo obrigatório.'),
  city: z.string().min(1, 'Campo obrigatório.'),
  state: z.string().min(1, 'Campo obrigatório.'),
  zipCode: z.string().min(1, 'Campo obrigatório.')
})

export type AddressSchema = z.infer<typeof addressValidation>
