const Benefits = () => {
  const benefits = [
    {
      icon: '🔧',
      title: 'Глубина экспертизы',
      text: 'Более 17 лет специализации исключительно на композитных материалах',
    },
    {
      icon: '🧪',
      title: 'Научный подход',
      text: 'Мы — научно-производственное предприятие. Внедряем передовые технологии ремонта',
    },
    {
      icon: '🏗️',
      title: 'Любая сложность',
      text: 'Восстанавливаем резервуары любых объемов и типов повреждений',
    },
    {
      icon: '📋',
      title: 'Гарантия',
      text: 'Подтверждаем качество технической документацией и контрольными испытаниями',
    },
  ]

  return (
    <section id="benefits" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Преимущества
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 leading-tight">
            Почему выбирают STEKLOPLASTIC
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
              <p className="text-slate-dark/70 leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
