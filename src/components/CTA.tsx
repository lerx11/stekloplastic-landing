import { CONTACTS } from '../constants'
import { MdWhatsapp } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'

const CTA = () => {
  return (
    <section id="cta" className="relative py-24 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=large%20industrial%20fiberglass%20water%20tank%20reservoir%20exterior%20bright%20daylight%20professional%20industrial%20photography&image_size=landscape_16_9')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/90 to-primary-light/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
          Остались вопросы или нужен срочный ремонт?
        </h2>
        <p className="text-white/85 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Свяжитесь с нами любым удобным способом. Мы ответим на все вопросы и приступим
          к восстановлению вашей емкости в кратчайшие сроки.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={CONTACTS.whatsappShort}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-hover text-primary font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg shadow-accent/30 flex items-center justify-center gap-2"
          >
            <MdWhatsapp size={28} />
            НАПИСАТЬ В WHATSAPP
          </a>
          <a
            href={CONTACTS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaTelegram size={28} />
            НАПИСАТЬ В TELEGRAM
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80">
          <a href={`tel:${CONTACTS.phoneRaw}`} className="flex items-center justify-center gap-2 hover:text-accent transition-colors text-lg">
            <span className="text-accent">📞</span>
            {CONTACTS.phone}
          </a>
          <a href={`mailto:${CONTACTS.email}`} className="flex items-center justify-center gap-2 hover:text-accent transition-colors text-lg">
            <span className="text-accent">✉️</span>
            {CONTACTS.email}
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
