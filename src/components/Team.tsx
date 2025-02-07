"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const people = [
    {
      name: 'Ben Oakes',
      role: 'Investor Focused Mortgage Broker',
      imageUrl: '/ben.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Craig',
      role: 'Residential Mortgage Broker',
      imageUrl: '/craig.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Ali',
      role: 'AI & Automation Solutions Engineer',
      imageUrl: '/Ali.png',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Trevor',
      role: 'Web Designer',
      imageUrl: '/Trevor.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      name: 'Cameron',
      role: 'Personal Branding Specialist',
      imageUrl: '/Cameron.jpeg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'residential-realtor',
      name: 'Coming Soon',
      role: 'Residential Realtor',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'commercial-realtor',
      name: 'Coming Soon',
      role: 'Commercial Realtor',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'roofer',
      name: 'Coming Soon',
      role: 'Roofer',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'cpa',
      name: 'Coming Soon',
      role: 'CPA',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'lawyer',
      name: 'Coming Soon',
      role: 'Lawyer',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'residential-builder',
      name: 'Coming Soon',
      role: 'Residential Builder',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'commercial-builder',
      name: 'Coming Soon',
      role: 'Commercial Builder',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'stone-mason',
      name: 'Coming Soon',
      role: 'Stone Mason',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'kitchen-specialist',
      name: 'Coming Soon',
      role: 'Kitchen Cabinet Specialist',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'plumber',
      name: 'Coming Soon',
      role: 'Plumber',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'electrician',
      name: 'Coming Soon',
      role: 'Electrician',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
    {
      id: 'landscaper',
      name: 'Coming Soon',
      role: 'Landscaper',
      imageUrl: '/person-image-holder.jpg',
      xUrl: '#',
      linkedinUrl: '#',
    },
  ]
  
  export function Team() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
      <section id="team" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Meet Our Real Estate Professionals</h2>
            <p className="mt-6 text-lg/8 text-muted-foreground">
              A collective of distinguished real estate professionals bringing together decades of experience and local expertise in the Barrie real estate market.
            </p>
            <div className="mt-10">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
              >
                <span className="relative z-10">Join Our Team</span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
              </button>
            </div>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.id || person.name} className="rounded-2xl bg-background border border-primary/10 px-8 py-10 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex justify-center items-center h-56 w-56 mx-auto overflow-hidden rounded-xl">
                  <img 
                    alt={person.name} 
                    src={person.imageUrl} 
                    className="w-full h-full object-cover object-[80%_center]"
                  />
                </div>
                <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-foreground">{person.name}</h3>
                <p className="text-sm/6 text-muted-foreground">{person.role}</p>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <li>
                    <a 
                      href={person.xUrl} 
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="sr-only">X</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a 
                      href={person.linkedinUrl} 
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" className="size-5">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Join Team Modal */}
        <Dialog as="div" className="relative z-50" open={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />
          
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Dialog.Panel className="relative w-full max-w-2xl rounded-2xl bg-background p-6 shadow-xl sm:p-8">
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <div className="mt-4">
                  <Dialog.Title as="h3" className="text-2xl font-semibold leading-7 text-foreground">
                    Join the Barrie Real Estate Collective
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 text-base text-muted-foreground">
                    We're looking for passionate real estate professionals who share our vision of collaboration and community building.
                  </Dialog.Description>

                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-foreground">Team Member Requirements</h4>
                    <ul className="mt-4 space-y-4">
                      <li className="flex gap-x-4">
                        <div className="flex-none">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">Collaborative Mentality</p>
                          <p className="mt-1 text-sm text-muted-foreground">Dedicated to adding value to the Barrie community as a real estate professional.</p>
                        </div>
                      </li>
                      <li className="flex gap-x-4">
                        <div className="flex-none">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">Knowledge Sharing</p>
                          <p className="mt-1 text-sm text-muted-foreground">Willing to share expertise at BREC events with investors and professionals.</p>
                        </div>
                      </li>
                      <li className="flex gap-x-4">
                        <div className="flex-none">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">Social Media Presence</p>
                          <p className="mt-1 text-sm text-muted-foreground">Create and share content for BREC events on social media platforms.</p>
                        </div>
                      </li>
                      <li className="flex gap-x-4">
                        <div className="flex-none">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-medium text-foreground">Event Promotion</p>
                          <p className="mt-1 text-sm text-muted-foreground">Actively share and promote BREC events within your professional network.</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => window.location.href = '#contact'}
                      className="group relative flex-1 overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
                    >
                      <span className="relative z-10">Apply Now</span>
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 rounded-lg border border-primary/10 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </section>
    )
  }
  