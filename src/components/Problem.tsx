const Problem = () => {
  const damages = [
    'Разрывы и пробоины корпуса',
    'Трещины по всей поверхности',
    'Выдавливание боковых крышек',
    'Деформации от наезда техники',
    'Ошибки монтажа и геологические факторы',
  ]

  const causes = [
    {
      icon: '🏭',
      title: 'Производственный брак',
      text: 'Тонкие стенки, некачественное сырье, нарушение технологии литья',
    },
    {
      icon: '⚠️',
      title: 'Халатность персонала',
      text: 'Наезд техники, повреждения при монтаже и эксплуатации',
    },
    {
      icon: '⛏️',
      title: 'Ошибки при раскопке',
      text: 'Глубокие разломы и разрывы корпуса из-за некомпетентной работы экскаваторщика',
    },
  ]

  return (
    <section id="problem" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-accent font-bold text-sm tracking-widest uppercase">
              Проблема
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-6 leading-tight">
              С какими повреждениями сталкиваются владельцы?
            </h2>
            <p className="text-slate-dark/80 text-lg mb-8 leading-relaxed">
              В результате эксплуатации любого технологического оборудования могут возникнуть
              различного характера повреждения и деформации. Емкости и резервуары из стеклопластика –
              не исключение.
            </p>

            <ul className="space-y-4">
              {damages.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-slate-dark text-lg font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {causes.map((cause, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="text-4xl mb-4">{cause.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{cause.title}</h3>
                <p className="text-slate-dark/70 leading-relaxed">{cause.text}</p>
              </div>
            ))}

            <div className="bg-primary text-white p-6 md:p-8 rounded-2xl">
              <p className="text-lg font-semibold leading-relaxed">
                <span className="text-accent">Последствия —</span> огромные временные и финансовые
                потери. Остановка производства недопустима.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Problem
