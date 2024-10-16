import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: {
    template: 'Desafio Genezys | %s',
    default: 'Desafio Genezys'
  },
  viewport: 'width=device-width, initial-scale=1',
  authors: [{ name: 'João Vitor dos Santos Oliveira' }],
  description:
    'Tarefa para Processo Seletivo de Frontend (React, Next.js, Tailwind CSS)'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header className="h-16 bg-indigo-500" /> */}
        {children}
      </body>
    </html>
  )
}
