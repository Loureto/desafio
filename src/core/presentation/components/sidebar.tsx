/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from './button'

const routes = [
  {
    href: '/dashboard',
    name: 'Dashboard'
  },
  {
    href: '/user-list',
    name: 'Users'
  },
  {
    href: '/tickets',
    name: 'Tickets'
  }
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-zinc-800 px-5 py-4 lg:px-8">
      <nav className="mx-auto flex max-w-7xl justify-between">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
          className="h-10 w-auto"
        />

        <div className="hidden sm:flex">
          {routes.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm font-medium text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Button className="hidden w-fit sm:block" variant="ghost">
          Sair
        </Button>
      </nav>
    </header>
  )
}
