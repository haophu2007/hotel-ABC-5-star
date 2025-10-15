import { Dumbbell, Waves, Utensils, Wifi, Car, Sparkles } from "lucide-react"

const amenities = [
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Rooftop pool with panoramic city views",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "24/7 state-of-the-art gym facilities",
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description: "Full-service spa and wellness center",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Michelin-starred restaurant on-site",
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary throughout the hotel",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Secure parking with valet service",
  },
]

export function Amenities() {
  return (
    <section id="amenities" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-wider text-accent uppercase mb-4">World-Class Amenities</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            Everything You Desire
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Indulge in our comprehensive range of premium facilities designed for your ultimate comfort and enjoyment.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-sm hover:bg-secondary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
