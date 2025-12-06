const stats = [
  { value: "--", label: "Sq. Ft. Developed" },
  { value: "--", label: "Projects Completed" },
  { value: "--", label: "Portfolio Value" },
  { value: "--", label: "Years of Excellence" },
]

export function Stats() {
  return (
    <section className="py-24 md:py-32 px-6 lg:px-8 bg-primary">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-3">{stat.value}</p>
              <p className="text-sm tracking-widest uppercase text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
