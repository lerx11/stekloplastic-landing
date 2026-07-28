import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCountUp } from '../hooks/useCountUp'

const StatItem = ({
  value,
  prefix = '',
  suffix = '',
  unit,
  label,
}: {
  value: number
  prefix?: string
  suffix?: string
  unit?: string
  label: string
}) => {
  const { ref, count } = useCountUp(value)

  return (
    <div ref={ref} className="text-center opacity-0" style={{ opacity: count > 0 ? 1 : 0, transition: 'opacity 0.5s' }}>
      <div className="flex items-baseline justify-center gap-1 mb-4">
        <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent">
          {prefix}{count.toLocaleString('ru-RU')}{suffix}
        </span>
        {unit && (
          <span className="text-2xl md:text-3xl font-bold text-white/70">{unit}</span>
        )}
      </div>
      <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xs mx-auto">
        {label}
      </p>
    </div>
  )
}

const Stats = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const stats = [
    { value: 17, prefix: '> ', label: 'лет специализации на композитных материалах' },
    { value: 5000, prefix: '> ', unit: 'м³', label: 'максимальный объем восстановленных резервуаров' },
    { value: 100, suffix: '%', label: 'гарантия восстановления проектных характеристик' },
  ]

  return (
    <section id="stats" className="py-20 md:py-24 bg-primary relative overflow-hidden">
      {/* Анимированные фоновые блобы */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
