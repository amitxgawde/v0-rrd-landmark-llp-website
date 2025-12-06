export const dynamic = "force-dynamic"
export const revalidate = 0

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Stats } from "@/components/stats"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProjects />
      <About />
      <Services />
      <Stats />
      <Contact />
      <Footer />
    </main>
  )
}
