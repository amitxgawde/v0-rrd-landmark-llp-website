"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const services = [
  {
    id: 1,
    title: "Residential & Commercial Development",
    description:
      "Designing and delivering high-quality residential and commercial spaces that balance livability, performance, and enduring value.",
  },
  {
    id: 2,
    title: "Commercial Real Estate",
    description:
      "Premium office buildings and business parks designed with modern amenities, sustainable features, and optimal functionality for today's enterprises.",
  },
  {
    id: 3,
    title: "Retail Destinations",
    description:
      "Thoughtfully designed retail spaces that create memorable experiences, drive foot traffic, and maximize tenant success.",
  },
  {
    id: 4,
    title: "Investment Partnerships",
    description:
      "Strategic partnerships with institutional investors, family offices, and high-net-worth individuals seeking premium real estate opportunities.",
  },
  {
    id: 5,
    title: "Property Management",
    description:
      "Comprehensive management services ensuring optimal performance, tenant satisfaction, and long-term asset value preservation.",
  },
]

export function Services() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section id="services" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-6">Our Services</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
            Comprehensive Real Estate Excellence
          </h2>
        </div>

        {/* Services Accordion */}
        <div className="border-t border-border">
          {services.map((service) => (
            <div key={service.id} className="border-b border-border">
              <button
                onClick={() => setOpenId(openId === service.id ? null : service.id)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <h3 className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="p-2 border border-border rounded-full group-hover:border-primary group-hover:bg-primary transition-all">
                  {openId === service.id ? (
                    <Minus className="h-4 w-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                  ) : (
                    <Plus className="h-4 w-4 text-foreground group-hover:text-primary-foreground transition-colors" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === service.id ? "max-h-40 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground max-w-2xl leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
