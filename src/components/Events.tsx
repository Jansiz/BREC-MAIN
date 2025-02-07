const events = [
  {
    title: 'Artificial Intelligence Summit 2025',
    description: 'Join us for an immersive afternoon where artificial intelligence meets real estate innovation. Learn how AI is revolutionizing every stage of the transaction process, from property scouting and market analysis to contract management and client relationships.',
    timing: 'March 2nd, 2025 • 1:00 PM - 5:00 PM',
    type: 'Summit',
    location: 'Liars • Barrie, Ontario',
    imageUrl: '/event_1.jpg',
    link: 'https://ai-summit-by-brec.vercel.app/',
  },
]

export function Events() {
  return (
    <section id="events" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Upcoming Events</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Join us for exclusive events that bring together real estate professionals and industry innovators, creating opportunities for learning, growth, and meaningful connections.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col lg:flex-row rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="lg:w-1/3 aspect-[16/9] lg:aspect-auto overflow-hidden rounded-xl mb-6 lg:mb-0 lg:mr-8">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {event.type}
                  </span>
                  <span className="text-muted-foreground">{event.timing}</span>
                  <span className="text-muted-foreground">{event.location}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold leading-8 tracking-tight text-foreground">
                  {event.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">
                  {event.description}
                </p>
                <div className="mt-6">
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95 inline-flex items-center"
                  >
                    <span className="relative z-10">Register Now</span>
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
