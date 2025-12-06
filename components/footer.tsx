import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image src="/logo.png" alt="RRD Landmark" width={48} height={48} className="h-12 w-12 object-contain" />
              <span className="font-serif text-3xl tracking-tight text-foreground leading-none">RRD LANDMARK</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Creating iconic landmarks that define skylines and communities. Residential and commercial real estate
              development.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Head Office</h4>
            <div className="space-y-1 text-foreground leading-snug">
              <p>3406, Epsilon Tower</p>
              <p>Sarova, SD Corp, Phase 1</p>
              <p>Samata Nagar, Singh Agri Estate, Kandivali East</p>
              <p>Mumbai, Maharashtra 400101</p>
              <p className="pt-3">+91 90822 69845</p>
              <p>info@rrdlandmark.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Connect</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-foreground hover:text-primary transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="block text-foreground hover:text-primary transition-colors">
                Instagram
              </Link>
              <Link href="#" className="block text-foreground hover:text-primary transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">2025 All rights reserved.</p>
          <p className="text-sm text-muted-foreground">RRD Landmark LLP — Building Tomorrow's Landmarks Today</p>
        </div>
      </div>
    </footer>
  )
}
