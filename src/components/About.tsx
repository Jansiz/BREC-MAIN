export function About() {
  return (
    <section id="about" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">About Barrie Real Estate Collective</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Transforming the real estate landscape in Barrie through collaboration and excellence.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Vision Card */}
          <div className="flex flex-col rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Vision</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              To create a collaborative ecosystem where real estate professionals can thrive, innovate, and deliver exceptional value to our clients while elevating industry standards in the Barrie region.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex flex-col rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Mission</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              We unite experienced real estate professionals, fostering knowledge sharing and professional growth while providing unparalleled service to our clients through collective expertise and local market insights.
            </p>
          </div>

          {/* Values Card */}
          <div className="flex flex-col rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Values</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-muted-foreground">
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Collaboration & Community</span>
              </li>
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Professional Excellence</span>
              </li>
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Market Innovation</span>
              </li>
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Client-Centric Approach</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Why Choose Us</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                Our collective brings together the finest real estate professionals in Barrie, offering a unique blend of deep local market knowledge, innovative approaches to property transactions, and a commitment to excellence that sets us apart in the industry.
              </p>
            </div>
            <div className="rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Commitment</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We are dedicated to transforming the real estate experience in Barrie through collaborative expertise, continuous professional development, and an unwavering focus on delivering exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
