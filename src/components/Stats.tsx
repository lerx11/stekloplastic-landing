const Stats = () => {
  const stats = [
    {
      number: '> 17',
      label: 'лет специализации на композитных материалах',
    },
    {
      number: '> 5000',
      unit: 'м³',
      label: 'максимальный объем восстановленных резервуаров',
    },
    {
      number: '100%',
      label: 'гарантия восстановления проектных характеристик',
    },
  ]

  return (
    <section id="stats" className="py-20 md:py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent">
                  {stat.number}
                </span>
                {stat.unit && (
                  <span className="text-2xl md:text-3xl font-bold text-white/70">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xs mx-auto">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
