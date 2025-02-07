'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Team', href: '#team' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-md"></div>
      <div className="border-b border-primary/10">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center justify-between px-4 py-2">
            <a href="#" onClick={(e) => handleScroll(e, '#')} className="group flex items-center gap-4">
              <div className="relative h-28 w-28 sm:h-24 sm:w-24 overflow-hidden transition duration-300 ease-out group-hover:scale-105">
                <Image
                  src="/logo-header.png"
                  alt="BREC"
                  width={100}
                  height={100}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <span className="text-sm sm:text-lg font-medium tracking-tight text-foreground">
                Barrie Real Estate Collective
              </span>
            </a>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground lg:hidden"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>

            <div className="hidden lg:flex lg:items-center lg:gap-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
              </a>
            </div>
          </nav>
        </div>
      </div>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-primary/10">
          <div className="flex items-center justify-between">
            <a href="#" onClick={(e) => handleScroll(e, '#')} className="group flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden transition duration-300 ease-out group-hover:scale-105">
                <Image
                  src="/logo-header.png"
                  alt="BREC"
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <span className="text-lg font-medium tracking-tight text-foreground">
                BREC
              </span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className="block rounded-lg px-4 py-2.5 text-base font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="group relative block overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-3 text-center text-base font-medium text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-95"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
} 