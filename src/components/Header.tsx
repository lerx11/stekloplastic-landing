import { useState, useEffect } from 'react'
import { CONTACTS } from '../constants'
import { MdWhatsapp } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'

const Header = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=industrial%20fiberglass%20tank%20repair%20worker%20with%20protective%20gloves%20applying%20epoxy%20resin%20composite%20material%20close%20up%20professional%20industrial%20photography&image_size=landscape_16_9')`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary-dark/90" />

      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-12 lg:px-20">
        <div className="flex flex-col">
          <span className="text-white text-2xl md:text-3xl font-bold tracking-wider">
            STEKLOPLASTIC
          </span>
          <span className="text-accent text-xs md:text-sm font-medium tracking-wide">
            Инженерный ремонт композитных емкостей
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${CONTACTS.phoneRaw}`}
            className="text-white font-medium hover:text-accent transition-colors"
          >
            {CONTACTS.phone}
          </a>
          <a
            href={CONTACTS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-primary font-bold px-5 py-2.5 rounded-lg transition-all hover:scale-105 flex items-center gap-2"
          >
            <MdWhatsapp size={20} />
            WhatsApp
          </a>
        </div>
      </nav>

      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20 pb-20">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 uppercase">
            Ремонт емкостей из стеклопластика
            <span className="block shimmer-text text-2xl md:text-3xl lg:text-4xl font-bold mt-4 normal-case">
              Восстановление герметичности, прочности и ресурса оборудования
            </span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            От бытовых септиков до промышленных резервуаров &gt; 5000 м³.
            Работаем по всей России.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href={CONTACTS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 text-center shadow-lg shadow-accent/30 flex items-center justify-center gap-2 animate-pulse-glow"
            >
              <MdWhatsapp size={28} />
              НАПИСАТЬ В WHATSAPP
            </a>
            <a
              href={CONTACTS.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 text-center flex items-center justify-center gap-2"
            >
              <FaTelegram size={28} />
              НАПИСАТЬ В TELEGRAM
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 text-white/80">
            <a href={`tel:${CONTACTS.phoneRaw}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="text-accent">📞</span>
              {CONTACTS.phone}
            </a>
            <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
              <span className="text-accent">✉️</span>
              {CONTACTS.email}
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8 animate-bounce">
        <a href="#problem" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export default Header
