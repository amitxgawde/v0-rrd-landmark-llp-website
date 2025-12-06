"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Project Title",
    category: "Category",
    location: "Location",
    year: "--",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Project Title",
    category: "Category",
    location: "Location",
    year: "--",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Project Title",
    category: "Category",
    location: "Location",
    year: "--",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    title: "Project Title",
    category: "Category",
    location: "Location",
    year: "--",
    image: "/placeholder.svg",
  },
]

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-24 md:py-32 px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-4">Featured Work</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">Defining Landmarks</h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
            Each project represents our commitment to architectural excellence, sustainable design, and creating spaces
            that inspire.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      hoveredId === project.id ? "scale-105" : "scale-100"
                    }`}
                  />
                </div>
                <div
                  className={`absolute inset-0 bg-foreground/10 transition-opacity duration-300 ${
                    hoveredId === project.id ? "opacity-0" : "opacity-100"
                  }`}
                />
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground tracking-wide">{project.category}</p>
                  <p className="text-xs text-muted-foreground/70 tracking-wide mt-1">{project.location}</p>
                  <p className="text-xs text-muted-foreground/70 tracking-wide">{project.year}</p>
                </div>
                <div
                  className={`p-3 border border-border rounded-full transition-all duration-300 ${
                    hoveredId === project.id ? "bg-primary border-primary" : ""
                  }`}
                >
                  <ArrowUpRight
                    className={`h-4 w-4 transition-colors ${
                      hoveredId === project.id ? "text-primary-foreground" : "text-foreground"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
