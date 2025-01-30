const events = [
  {
    title: 'Monthly Networking Mixer',
    description: 'Join fellow real estate professionals for an evening of networking, knowledge sharing, and relationship building.',
    timing: 'Last Thursday of every month',
    type: 'Networking',
    imageUrl: '/event_1.jpg', // First image showing people at round tables
  },
  {
    title: 'Market Insight Sessions',
    description: "Expert-led discussions on Barrie's real estate market trends, opportunities, and future outlook.",
    timing: 'Quarterly',
    type: 'Educational',
    imageUrl: '/event_2.jpg', // Second image showing presentation setup
  },
  {
    title: 'Community Impact Initiative',
    description: 'Collaborative events where BREC members give back to the Barrie community through various outreach programs.',
    timing: 'Bi-monthly',
    type: 'Community',
    imageUrl: '/event_3.jpg', // Third image showing large group event
  },
]

export function Events() {
  return (
    <section id="events" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">BREC Events & Networking</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            At Barrie Real Estate Collective, we believe in the power of community and collaboration. Our events bring together industry professionals, creating opportunities for growth, learning, and meaningful connections.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.title}
              className="flex flex-col rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-xl mb-6">
                <img 
                  src={event.imageUrl} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-x-4 text-xs">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  {event.type}
                </span>
                <span className="text-muted-foreground">{event.timing}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold leading-8 tracking-tight text-foreground">
                {event.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground flex-grow">
                {event.description}
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-primary hover:text-primary/80 transition-colors"
                >
                  View Event Details <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center rounded-2xl bg-background border border-primary/10 p-8 shadow-lg">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">
              Join Our Next Event
            </h3>
            <p className="mt-2 text-base leading-7 text-muted-foreground max-w-2xl">
              Experience the power of collective growth. Our events are designed to foster meaningful connections and provide valuable insights for real estate professionals.
            </p>
            <a
              href="/events"
              className="mt-6 group relative overflow-hidden rounded-lg bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 active:scale-95"
            >
              <span className="relative z-10">View Upcoming Events</span>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent to-primary opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
