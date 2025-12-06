import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-8 bg-background border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <Link href="/" className="font-serif text-4xl tracking-tight text-foreground inline-block mb-6">
              RRD<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Creating iconic landmarks that define skylines and communities. Award-winning mixed-use and commercial
              real estate development.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-6">Head Office</h4>
            <div className="space-y-2 text-foreground">
              <p>Tower One, Floor 42</p>
              <p>Financial District</p>
              <p>Mumbai, Maharashtra</p>
              <p className="pt-4">+91 22 6789 0123</p>
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

        {/* Large Logo Mark */}
        <div className="flex justify-center mb-16">
          <span className="font-serif text-[8rem] md:text-[12rem] lg:text-[16rem] text-border leading-none select-none">
            RRD
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">2024 All rights reserved.</p>
          <p className="text-sm text-muted-foreground">RRD Landmark LLP — Building Tomorrow's Landmarks Today</p>
        </div>
      </div>
    </footer>
  )
}
