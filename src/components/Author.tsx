import { CONTACTS } from '../constants'
import { MdWhatsapp } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'
import authorPhoto from '../assets/photos/author.jpg'

const Author = () => {
  const services = [
    { icon: '🌐', title: 'Создание сайтов и лендингов' },
    { icon: '💻', title: 'Веб-приложения и интеграции' },
    { icon: '📸', title: 'Фотосъёмка для бизнеса' },
    { icon: '🎬', title: 'Видеосъёмка и монтаж' },
  ]

  return (
    <section id="author" className="py-20 md:py-28 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая колонка — фото */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-primary-light">
                <img
                  src={authorPhoto}
                  alt="Разработчик сайта"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-primary font-bold px-5 py-2.5 rounded-xl shadow-lg">
                💻 + 📸
              </div>
            </div>
            <p className="text-slate-dark/60 text-sm mt-6 font-medium">
              Разработчик этого проекта
            </p>
          </div>

          {/* Правая колонка — текст */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 leading-tight">
              Сделаю сайт для вашего бизнеса
            </h2>
            <p className="text-slate-dark/80 text-lg mb-8 leading-relaxed">
              Я разрабатываю продающие лендинги, веб-приложения и занимаюсь профессиональной
              фото- и видеосъёмкой. Если вы занимаетесь ремонтом стеклопластиковых ёмкостей
              (или любым другим бизнесом) и хотите получать заявки с сайта — напишите мне.
              Обсудим задачу, сроки и стоимость.
            </p>

            {/* Сетка иконок 2×2 */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
                >
                  <span className="text-3xl">{service.icon}</span>
                  <span className="font-semibold text-primary text-sm md:text-base">
                    {service.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://wa.me/79150135722?text=Здравствуйте!%20Понравился%20сайт%20для%20STEKLOPLASTIC"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl text-lg transition-all hover:scale-105 text-center shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"
              >
                <MdWhatsapp size={28} />
                WhatsApp
              </a>
              <a
                href={CONTACTS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl text-lg transition-all hover:scale-105 text-center shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                <FaTelegram size={28} />
                Telegram
              </a>
            </div>

            {/* Контактные данные */}
            <div className="space-y-2">
              <p className="text-slate-dark/70 text-sm">
                💬 MAX: +7 (915) 013-57-22 (найдите меня по номеру телефона)
              </p>
              <a
                href={`tel:${CONTACTS.phoneRaw}`}
                className="text-lg font-bold text-primary hover:text-accent transition-colors flex items-center gap-2"
              >
                📞 {CONTACTS.phone}
              </a>
              <p className="text-slate-dark/60 text-sm">
                Звоните или пишите в любой мессенджер — обсудим проект.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Author
