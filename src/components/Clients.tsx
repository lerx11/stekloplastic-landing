const Clients = () => {
  const clients = [
    { name: 'НефтеГазСтрой', industry: 'Нефтегазовая отрасль' },
    { name: 'Водоканал-Сервис', industry: 'ЖКХ и водоснабжение' },
    { name: 'ПожарТехКомплект', industry: 'Пожарная безопасность' },
    { name: 'ЭкоСептик', industry: 'Очистные сооружения' },
    { name: 'ПромСтройИнвест', industry: 'Промышленное строительство' },
    { name: 'РегионЭнерго', industry: 'Энергетика' },
  ]

  return (
    <section id="clients" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <p className="text-center text-slate-dark/60 text-sm font-medium tracking-widest uppercase mb-10">
          Нам доверяют
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg mb-3">
                {client.name.charAt(0)}
              </div>
              <span className="text-primary font-bold text-sm text-center">{client.name}</span>
              <span className="text-slate-dark/50 text-xs mt-1 text-center">{client.industry}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
