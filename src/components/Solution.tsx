import { useScrollReveal } from '../hooks/useScrollReveal'
import InteractiveTank from './InteractiveTank'

const Solution = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: boxRef, isVisible: boxVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="solution" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={textRef} className={`order-2 lg:order-1 reveal-left ${textVisible ? 'reveal-visible' : ''}`}>
            <span className="text-accent font-bold text-sm tracking-widest uppercase">
              Наше решение
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-8 leading-tight">
              Мы не затыкаем дыры.
              <span className="block text-accent">Мы возвращаем конструкцию к жизни.</span>
            </h2>
            <p className="text-slate-dark/80 text-lg mb-8 leading-relaxed">
              В отличие от универсальных строительных организаций, компания «STEKLOPLASTIC»
              специализируется исключительно на композитных материалах. Это обеспечивает глубину
              экспертизы, недостижимую при размытой специализации.
            </p>

            <div
              ref={boxRef}
              className={`bg-gradient-to-r from-primary to-primary-light text-white p-6 md:p-8 rounded-2xl shadow-xl reveal ${boxVisible ? 'reveal-visible' : ''}`}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl animate-float">🔬</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Более 17 лет специализации на композитах
                  </h3>
                  <p className="text-white/85 leading-relaxed">
                    Научно-производственное предприятие. Внедряем передовые разработки
                    композитной отрасли.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center">
            <InteractiveTank />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
