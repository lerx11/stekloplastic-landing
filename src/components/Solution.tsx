const Solution = () => {
  return (
    <section id="solution" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
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

            <div className="bg-gradient-to-r from-primary to-primary-light text-white p-6 md:p-8 rounded-2xl shadow-xl">
              <div className="flex items-start gap-4">
                <span className="text-4xl">🔬</span>
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

          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20industrial%20workshop%20for%20fiberglass%20composite%20repair%20with%20professional%20equipment%20and%20engineer%20working%20on%20large%20tank%20industrial%20photography&image_size=landscape_4_3"
                alt="Процесс ремонта стеклопластиковой емкости"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-primary font-bold px-6 py-4 rounded-xl shadow-lg hidden md:block">
              <span className="text-3xl font-extrabold">17+</span>
              <span className="block text-sm font-medium">лет опыта</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
