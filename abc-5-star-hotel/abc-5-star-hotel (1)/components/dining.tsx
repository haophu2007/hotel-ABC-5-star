export function Dining() {
  return (
    <section id="dining" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wider text-accent uppercase">Culinary Excellence</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                A Gastronomic Journey
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Experience culinary artistry at our award-winning restaurant, where our Michelin-starred chef creates
                innovative dishes that celebrate both local and international flavors.
              </p>
              <p>
                From intimate dinners to lavish celebrations, our dining venues offer the perfect setting for every
                occasion. Enjoy breakfast with sunrise views, afternoon tea in our elegant lounge, or cocktails at our
                rooftop bar.
              </p>
            </div>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm">Michelin-Starred Fine Dining</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm">Rooftop Bar & Lounge</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm">24-Hour Room Service</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm">Private Dining Experiences</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm order-1 lg:order-2">
            <img src="/luxury-hotel-fine-dining-restaurant-elegant-interi.jpg" alt="Fine Dining Restaurant" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
