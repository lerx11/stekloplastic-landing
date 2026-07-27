const CaseStudy = () => {
  return (
    <section id="case" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Кейс из практики
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 leading-tight">
            История спасения резервуара
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 leading-tight">
              Как мы спасли пожарный резервуар от списания
            </h3>
            <div className="space-y-5 text-slate-dark/80 text-lg leading-relaxed">
              <p>
                Станция с резервуаром, допущенным ОТК к приемке на заводе-производителе,
                повлекла утечку воды из пожарной емкости. Руководитель принял решение о раскопке
                котлована и извлечении резервуара.
              </p>
              <p>
                В результате некомпетентной работы машиниста экскаватора произошли глубокие
                и серьезные разломы и разрывы по всему корпусу.
              </p>
              <div className="bg-accent/10 border-l-4 border-accent p-5 rounded-r-xl">
                <p className="font-semibold text-primary">
                  <span className="text-accent">Итог:</span> Наши специалисты провели диагностику,
                  усилили зоны повреждений и полностью восстановили герметичность. Резервуар введен
                  в эксплуатацию. Огромные временные и финансовые расходы предотвращены.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="absolute -top-3 -left-3 bg-red-500 text-white font-bold px-4 py-1.5 rounded-lg z-10 shadow-lg text-sm">
                ДО: Разломы по всему корпусу
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=severely%20damaged%20fiberglass%20water%20tank%20with%20multiple%20cracks%20and%20fractures%20excavated%20from%20ground%20industrial%20accident&image_size=landscape_16_9"
                  alt="Поврежденный резервуар"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-3 -left-3 bg-green-500 text-white font-bold px-4 py-1.5 rounded-lg z-10 shadow-lg text-sm">
                ПОСЛЕ: Полностью восстановлен
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=fully%20repaired%20fiberglass%20water%20tank%20installed%20and%20filled%20with%20water%20industrial%20reservoir%20restored%20operational&image_size=landscape_16_9"
                  alt="Восстановленный резервуар"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudy
