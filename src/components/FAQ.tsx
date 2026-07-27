import { useState } from 'react'

const FAQ = () => {
  const faqs = [
    {
      q: 'Сколько времени резервуар может простоять с трещиной?',
      a: 'Эксплуатация с повреждением ведет к быстрому разрушению структуры материала. Мы работаем в сжатые сроки, чтобы минимизировать простой вашего производства. Свяжитесь с нами для срочной диагностики.',
    },
    {
      q: 'Вы даете гарантию на ремонт?',
      a: 'Да. Мы восстанавливаем проектные характеристики, поэтому гарантия подтверждена технической документацией и итоговыми контрольными испытаниями.',
    },
    {
      q: 'Как проводится диагностика?',
      a: 'Инженер выезжает на объект для осмотра. Возможна предварительная оценка по фото и видео, которые вы пришлете нам в WhatsApp или Telegram.',
    },
    {
      q: 'Что вы восстанавливаете?',
      a: 'Все типы стеклопластиковых емкостей: септики, КНС, ЛОС, пожарные и промышленные резервуары любого объема.',
    },
    {
      q: 'Почему выбирают STEKLOPLASTIC?',
      a: 'Мы не универсальная стройфирма. Наша специализация — композиты. Это обеспечивает глубину экспертизы, недостижимую при размытой специализации. Более 17 лет на рынке.',
    },
    {
      q: 'Как рассчитать стоимость ремонта?',
      a: 'Стоимость рассчитывается индивидуально после диагностики. Оставьте заявку через WhatsApp или Telegram — наши инженеры свяжутся с вами для консультации.',
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 leading-tight">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 md:p-7 text-left"
              >
                <span className="font-bold text-primary text-lg md:text-xl pr-4">
                  {faq.q}
                </span>
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center text-2xl font-bold transition-transform ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 md:px-7 pb-6 md:pb-7 text-slate-dark/80 leading-relaxed text-lg">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
