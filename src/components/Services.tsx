const Services = () => {
  const services = [
    {
      icon: '🧊',
      title: 'Восстановление герметичности',
      desc: 'Устранение трещин, свищей, разгерметизации корпуса. Полное восстановление целостности.',
    },
    {
      icon: '🔧',
      title: 'Перевязка труб и патрубков',
      desc: 'Ремонт и замена вводов, патрубков, фланцевых соединений. Восстановление герметичности узлов.',
    },
    {
      icon: '🏭',
      title: 'Ремонт ЛОС и КНС',
      desc: 'Локальные очистные сооружения, канализационные насосные станции. Полное восстановление работоспособности.',
    },
    {
      icon: '🔥',
      title: 'Ремонт пожарных резервуаров',
      desc: 'Восстановление емкостей любого объема, включая > 5000 м³. Возвращение проектных характеристик.',
    },
  ]

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Что мы восстанавливаем
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 leading-tight">
            Типы работ
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-slate-100 group cursor-default"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-4xl group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-dark/70 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
