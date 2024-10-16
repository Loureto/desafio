import { create } from 'zustand'

type Account = {
  name: string
  email: string
  password: string
}

type CreateAccountStore = {
  account: Account
  step: number
  setAccount: (account: Account) => void
  setStep: () => void
  reset: () => void
}

const initialState = {
  account: {
    name: '',
    email: '',
    password: ''
  },
  step: 1
}

export const useCreateAccountStore = create<CreateAccountStore>((set) => ({
  ...initialState,
  setAccount: (account: Account) => set({ account }),
  setStep: () => set((state) => ({ step: state.step + 1 })),
  reset: () => set(initialState)
}))
