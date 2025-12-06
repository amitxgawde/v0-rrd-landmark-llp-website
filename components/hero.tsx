import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-primary flex flex-col pt-28">
      {/* Main Title */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 lg:px-8">
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] text-primary-foreground tracking-tight text-center leading-none">
          RRD LANDMARK
          <span className="text-primary-foreground/60 text-4xl sm:text-5xl md:text-6xl align-super ml-2">©</span>
        </h1>
      </div>

      {/* Featured Image */}
      <div className="px-6 lg:px-8 pb-12">
        <div className="mx-auto max-w-2xl">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="/modern-luxury-mixed-use-building-with-glass-facade.jpg"
              alt="Featured architectural project"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-primary-foreground/90 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            <span className="tracking-widest uppercase">OUR VISION</span> is to craft enduring residential and commercial
            destinations that balance design excellence, sustainability, and community. Every development we lead is an
            opportunity to blend purpose with beauty, creating spaces that invite light, foster connection, and stand the
            test of time.{" "}
            <Link
              href="#projects"
              className="underline underline-offset-4 hover:text-primary-foreground transition-colors"
            >
              (VIEW PROJECT)
            </Link>
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary-foreground/60" />
      </div>
    </section>
  )
}
