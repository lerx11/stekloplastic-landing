import { useState, useRef } from 'react'
import { CONTACTS } from '../constants'
import { MdWhatsapp } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import authorPhoto from '../assets/photos/author.jpg'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Author = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const photoRef = useRef<HTMLDivElement>(null)

  // 3D-наклон фото за курсором
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!photoRef.current) return
    const rect = photoRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateY = ((e.clientX - centerX) / rect.width) * 18
    const rotateX = -((e.clientY - centerY) / rect.height) * 18
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  const serviceColumns = [
    {
      title: 'Сайты и приложения',
      icon: '🌐',
      items: [
        'Сайты под ключ (лендинги, корпоративные, интернет-магазины)',
        'Мобильные приложения (iOS, Android)',
        'Сайты с личным кабинетом и CRM',
      ],
    },
    {
      title: 'Продвижение и контент',
      icon: '📈',
      items: [
        'SEO-продвижение в Яндексе и Google',
        'Продвижение в Яндекс Картах',
        'Упаковка и продвижение VK',
        'Монтаж Reels, Shorts, рекламных роликов',
      ],
    },
    {
      title: 'Автоматизация и софт',
      icon: '⚙️',
      items: [
        'SaaS-платформы для бизнеса',
        'Telegram-боты для заявок и клиентов',
        'Автоматизация процессов (учёт, склад, заявки)',
      ],
    },
  ]

  return (
    <section id="author" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Декоративный 3D-фон */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-50 animate-float" />
      </div>

      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 md:px-12 lg:px-20 relative z-10 reveal-scale ${isVisible ? 'reveal-visible' : ''}`}
      >
        {/* Заголовок */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-primary mb-12 leading-tight">
          Я делаю цифровые продукты,
          <br />
          <span className="shimmer-text">которые приносят клиентов</span>
        </h2>

        {/* Круглое фото с 3D-эффектом */}
        <div
          className="flex justify-center mb-8"
          style={{ perspective: '1000px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={photoRef}
            className="relative w-36 h-36 md:w-40 md:h-40 cursor-pointer transition-transform duration-300 ease-out"
            style={{
              transformStyle: 'preserve-3d',
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            {/* Свечение позади фото */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-blue-400 to-accent blur-xl opacity-30 scale-110 animate-pulse" />
            {/* Кольцо */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-primary p-1.5 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={authorPhoto}
                  alt="Ленар — разработчик"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Бейдж */}
            <div
              className="absolute -bottom-2 -right-2 bg-accent text-primary font-bold text-xs px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap"
              style={{ transform: 'translateZ(50px)' }}
            >
              DEV
            </div>
          </div>
        </div>

        {/* Подпись */}
        <p className="text-center text-slate-dark/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Меня зовут Ленар. Я разрабатываю сайты, приложения и помогаю бизнесу
          расти в интернете.
        </p>

        {/* Подзаголовок */}
        <h3 className="text-center text-xl md:text-2xl font-bold text-primary mb-10">
          Что я могу сделать для вас:
        </h3>

        {/* Три колонки услуг */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {serviceColumns.map((col, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="text-4xl mb-4">{col.icon}</div>
              <h4 className="font-bold text-primary text-lg mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-dark/70 text-sm leading-relaxed">
                    <span className="text-accent flex-shrink-0 mt-0.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Дополнительная выделенная строка */}
        <div className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-5 md:p-6 mb-10 text-center shadow-lg">
          <p className="text-lg md:text-xl font-semibold flex items-center justify-center gap-3 flex-wrap">
            <span className="text-2xl">🏭</span>
            Поставка оборудования из Китая
            <span className="text-white/70 text-sm font-normal">
              (смолы, стеклоткань, насосы, инструмент, комплектующие)
            </span>
          </p>
        </div>

        {/* Призыв к действию */}
        <p className="text-center text-slate-dark/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Хотите, чтобы ваш бизнес выглядел солидно и приносил больше заявок?
          Напишите мне — обсудим, что можно сделать для вас.
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://wa.me/79150135722?text=Здравствуйте!%20Хочу%20обсудить%20развитие%20бизнеса"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 text-center shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
          >
            <MdWhatsapp size={28} />
            НАПИСАТЬ В WHATSAPP
          </a>
          <a
            href="https://t.me/Lex_88"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 text-center shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
          >
            <FaTelegram size={28} />
            НАПИСАТЬ В TELEGRAM
          </a>
        </div>

        {/* Контакты */}
        <div className="text-center space-y-1">
          <a
            href={`tel:${CONTACTS.phoneRaw}`}
            className="text-lg font-bold text-primary hover:text-accent transition-colors"
          >
            {CONTACTS.phone}
          </a>
          <p className="text-slate-dark/50 text-sm">{CONTACTS.email}</p>
        </div>
      </div>
    </section>
  )
}

export default Author
