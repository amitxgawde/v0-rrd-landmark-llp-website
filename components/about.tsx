export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-8 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img src="/architectural-team-meeting-modern-office-professio.jpg" alt="RRD Landmark team" className="w-full h-full object-cover" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6">About Us</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-8 leading-tight">
              Building Tomorrow's Landmarks Today
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                RRD Landmark LLP is a premier real estate development firm specializing in residential and commercial
                properties. Founded on the principles of architectural excellence, sustainable innovation, and
                community-centric design, we create spaces that transcend ordinary construction.
              </p>
              <p>
                Our portfolio spans landmark developments that have redefined urban landscapes, from towering commercial
                complexes to thoughtfully integrated residential communities. Each project reflects our
                unwavering commitment to quality, innovation, and creating lasting value for investors and communities
                alike.
              </p>
              <p>
                With decades of combined experience and partnerships with world-renowned architects, we approach every
                development as an opportunity to craft something extraordinary—landmarks that will stand as testaments
                to exceptional design for generations.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="font-serif text-xl text-foreground">[Name Placeholder]</p>
              <p className="text-sm text-muted-foreground mt-1">[Title Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
