export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-sm">
            <img src="/luxury-hotel-lobby-elegant-interior-chandelier.jpg" alt="Luxury Hotel Lobby" className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">Welcome to ABC 5 Star</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                A Legacy of Excellence
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over three decades, ABC 5 Star has been the epitome of luxury hospitality, offering discerning
                travelers an unmatched experience of elegance and refinement.
              </p>
              <p>
                Our commitment to excellence is reflected in every detail—from our meticulously designed suites to our
                world-class amenities and personalized service that anticipates your every need.
              </p>
              <p>
                Nestled in the heart of the city, our hotel combines timeless sophistication with modern luxury,
                creating an oasis where memories are made and expectations are exceeded.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent">150+</div>
                <div className="text-sm text-muted-foreground mt-1">Luxury Suites</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent">5</div>
                <div className="text-sm text-muted-foreground mt-1">Star Rating</div>
              </div>
              <div>
                <div className="font-serif text-3xl md:text-4xl font-bold text-accent">30+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
