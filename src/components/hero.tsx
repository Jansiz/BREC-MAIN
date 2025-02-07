'use client'

import { Header } from './Header'

export function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-background">
      <Header />
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 lg:w-full lg:max-w-2xl">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-background lg:block"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-16 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm/6 text-muted-foreground ring-1 ring-primary/10 hover:ring-primary/20">
                    Elevating Real Estate in Barrie{' '}
                    <a 
                      href="#team" 
                      onClick={(e) => handleScroll(e, '#team')}
                      className="whitespace-nowrap font-semibold text-primary"
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      Join our collective <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
                <h1 className="text-pretty text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
                  Barrie Real Estate Collective
                </h1>
                <p className="mt-8 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
                  A distinguished collective of real estate professionals dedicated to elevating industry standards and delivering exceptional value to the Barrie community. Together, we're redefining the real estate experience.
                </p>
                <blockquote className="mt-8 border-l-2 border-primary/30 pl-6">
                  <p className="text-pretty text-base italic text-muted-foreground sm:text-lg/8">
                    "The more hands you shake, the more money you'll make. If you're not talking to strangers, you'll never learn anything new."
                  </p>
                  <footer className="mt-2 text-sm font-medium text-primary">
                    — Dan Martell
                  </footer>
                </blockquote>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#about"
                    onClick={(e) => handleScroll(e, '#about')}
                    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-95"
                  >
                    <span className="relative z-10">About Us</span>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                  </a>
                  <a 
                    href="#team" 
                    onClick={(e) => handleScroll(e, '#team')}
                    className="text-sm/6 font-semibold text-foreground group"
                  >
                    Meet Our Team{' '}
                    <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-secondary/5 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            alt="Barrie Real Estate Collective Team"
            src="/together.jpg"
            className="aspect-[3/2] object-cover object-center lg:aspect-auto lg:size-full"
          />
        </div>
      </div>
    </div>
  )
}
