"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const smoothScrollTo = useCallback((targetY: number, duration = 800) => {
    const startY = window.scrollY || window.pageYOffset
    const distance = targetY - startY
    const startTime = performance.now()

    const easeOutQuad = (t: number) => t * (2 - t)

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = easeOutQuad(progress)
      window.scrollTo(0, startY + distance * eased)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [])

  const scrollToSection = useCallback(
    (e: React.MouseEvent, targetId: string) => {
      const target = document.getElementById(targetId)
      if (!target) return
      e.preventDefault()
      const rect = target.getBoundingClientRect()
      const targetY = rect.top + (window.scrollY || window.pageYOffset)
      smoothScrollTo(targetY)
      setIsOpen(false)
    },
    [smoothScrollTo]
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="RRD Landmark home">
            <Image
              src="/logo.png"
              alt="RRD Landmark"
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
              priority
            />
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight text-black leading-none uppercase">
              RRD LANDMARK
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#services"
              onClick={(e) => scrollToSection(e, "services")}
              className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-black" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-8 border-t border-border">
            <div className="flex flex-col gap-6">
              <Link
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects")}
                className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#about"
                onClick={(e) => scrollToSection(e, "about")}
                className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#services"
                onClick={(e) => scrollToSection(e, "services")}
                className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="font-serif text-base md:text-lg font-semibold tracking-tight uppercase text-black hover:text-black/80 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
