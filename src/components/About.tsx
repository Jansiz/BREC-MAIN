export function About() {
  return (
    <section id="about" className="bg-background py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">About Barrie Real Estate Collective</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A dynamic network of real estate professionals united to elevate industry standards in the Barrie region.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Vision Card */}
          <div className="flex flex-col rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Vision</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              To foster a thriving ecosystem where collaboration drives innovation and success in Barrie's real estate market, setting new benchmarks for professional excellence.
            </p>
          </div>

          {/* Mission Card */}
          <div className="flex flex-col rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Mission</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Uniting distinguished professionals across real estate and related industries to create exceptional value through shared expertise and collective strength.
            </p>
          </div>

          {/* Values Card */}
          <div className="flex flex-col rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
            <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Values</h3>
            <ul className="mt-4 space-y-3 text-base leading-7 text-muted-foreground">
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Community & Collaboration</span>
              </li>
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Service Excellence</span>
              </li>
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Innovation & Growth</span>
              </li>
              <li className="flex items-center gap-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span>Local Market Leadership</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Content */}
        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Network</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                BREC unites an elite group of professionals including realtors, mortgage brokers, builders, engineers, content creators, and home service experts. This comprehensive network leverages collective expertise to deliver exceptional value to the Barrie real estate community.
              </p>
            </div>
            <div className="rounded-2xl bg-background border border-primary/10 p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-foreground">Our Impact</h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                By sharing insights and fostering meaningful connections, we're transforming how real estate professionals work together in Barrie. Our collective approach creates better outcomes for both our members and their clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
