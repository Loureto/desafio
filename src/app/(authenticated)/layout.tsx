import { Header } from '@/core'

export default function AuthenticatedLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex h-screen w-full flex-col gap-6 bg-black">
      <Header />
      {children}
    </main>
  )
}
