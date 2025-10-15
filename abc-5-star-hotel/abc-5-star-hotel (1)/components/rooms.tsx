import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bed, Users, Maximize } from "lucide-react"

const rooms = [
  {
    name: "Deluxe Suite",
    description: "Elegant comfort with city views and premium amenities",
    image: "/luxury-hotel-deluxe-suite-bedroom-elegant.jpg",
    size: "45 m²",
    guests: "2 Guests",
    beds: "King Bed",
    price: "$450",
  },
  {
    name: "Executive Suite",
    description: "Spacious luxury with separate living area and workspace",
    image: "/luxury-hotel-executive-suite-living-room.jpg",
    size: "65 m²",
    guests: "2-3 Guests",
    beds: "King Bed",
    price: "$650",
  },
  {
    name: "Presidential Suite",
    description: "Ultimate luxury with panoramic views and private terrace",
    image: "/luxury-hotel-presidential-suite-panoramic-view.jpg",
    size: "120 m²",
    guests: "4 Guests",
    beds: "2 King Beds",
    price: "$1,200",
  },
]

export function Rooms() {
  return (
    <section id="rooms" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium tracking-wider text-accent uppercase mb-4">Rooms & Suites</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
            Your Sanctuary Awaits
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each suite is a masterpiece of design, offering the perfect blend of comfort, style, and modern luxury.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image || "/placeholder.svg"}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{room.name}</h3>
                  <p className="text-sm text-muted-foreground">{room.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{room.beds}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-muted-foreground">From</span>
                    <div className="font-serif text-2xl font-bold text-accent">{room.price}</div>
                    <span className="text-xs text-muted-foreground">per night</span>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
