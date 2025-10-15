import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold">ABC 5 STAR</h3>
            <p className="text-sm text-background/80 leading-relaxed">
              Experience unparalleled luxury and sophistication at our world-class hotel.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#about" className="hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="hover:text-background transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-background transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-background transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Spa & Wellness
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Fitness Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Business Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Event Spaces
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>123 Luxury Boulevard</li>
              <li>Downtown District, City 10001</li>
              <li className="pt-2">
                <a href="tel:+15551234567" className="hover:text-background transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:reservations@abc5star.com" className="hover:text-background transition-colors">
                  reservations@abc5star.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
          <p>&copy; 2025 ABC 5 Star Hotel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-background transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
