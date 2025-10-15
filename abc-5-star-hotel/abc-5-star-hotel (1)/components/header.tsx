"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-foreground">ABC 5 STAR</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">
              About
            </a>
            <a href="#rooms" className="text-sm font-medium hover:text-accent transition-colors">
              Rooms & Suites
            </a>
            <a href="#amenities" className="text-sm font-medium hover:text-accent transition-colors">
              Amenities
            </a>
            <a href="#dining" className="text-sm font-medium hover:text-accent transition-colors">
              Dining
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+1 (555) 123-4567</span>
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Book Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#about"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#rooms"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms & Suites
              </a>
              <a
                href="#amenities"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a
                href="#dining"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Dining
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="gap-2 justify-center bg-transparent">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Book Now</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
