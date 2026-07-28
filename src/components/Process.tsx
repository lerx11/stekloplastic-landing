import { useScrollReveal } from '../hooks/useScrollReveal'

const Process = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const steps = [
    {
      num: 1,
      title: 'Диагностика',
      desc: 'Выезд инженера на объект. Расчет НДС (напряженно-деформированного состояния) зоны повреждения.',
      img: 'engineer%20with%20thickness%20gauge%20measuring%20fiberglass%20tank%20wall%20industrial%20inspection%20professional',
    },
    {
      num: 2,
      title: 'Проект ремонта',
      desc: 'Разработка индивидуальной технологии устранения повреждений под вашу емкость.',
      img: 'engineering%20blueprint%20cad%20design%20of%20industrial%20tank%20repair%20on%20computer%20monitor%20technical%20drawing',
    },
    {
      num: 3,
      title: 'Подготовка',
      desc: 'Очистка и подготовка поверхности, подбор материалов.',
      img: 'worker%20grinding%20fiberglass%20surface%20with%20angle%20grinder%20preparing%20for%20repair%20industrial%20workshop',
    },
    {
      num: 4,
      title: 'Восстановление',
      desc: 'Полноценное восстановление конструкции с усилением проблемных зон.',
      img: 'worker%20applying%20fiberglass%20cloth%20with%20epoxy%20resin%20composite%20repair%20process%20close%20up%20hands%20in%20gloves',
    },
    {
      num: 5,
      title: 'Сервис',
      desc: 'Контрольные испытания, оформление паспорта. Гарантийное обслуживание.',
      img: 'finished%20repaired%20fiberglass%20industrial%20tank%20ready%20for%20operation%20quality%20control%20inspection',
    },
  ]

  return (
    <section id="process" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className={`text-center mb-16 reveal ${isVisible ? 'reveal-visible' : ''}`} ref={ref}>
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Как мы работаем
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 leading-tight">
            Этапы работ
          </h2>
        </div>

        <div className="relative">
          {/* Линия таймлайна */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent -translate-y-1/2 rounded-full origin-left scale-x-0" style={{ transform: isVisible ? 'translateY(-50%) scaleX(1)' : 'translateY(-50%) scaleX(0)', transition: 'transform 1.2s ease-out 0.3s' }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 border-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 group reveal ${isVisible ? 'reveal-visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${step.img}&image_size=landscape_16_9`}
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-accent text-primary font-extrabold text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-slate-dark/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Process
