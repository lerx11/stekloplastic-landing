import { CONTACTS } from '../constants'
import { MdWhatsapp, MdPhone } from 'react-icons/md'
import { FaTelegram } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Левая секция */}
          <div>
            <h4 className="font-bold text-xl mb-2 text-white">Разработчик сайта</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              Создание сайтов, приложений, фото, видео
            </p>
          </div>

          {/* Центральная секция */}
          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <span>📧</span> {CONTACTS.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACTS.phoneRaw}`}
                  className="text-white/80 hover:text-accent transition-colors flex items-center gap-2"
                >
                  <MdPhone size={18} /> {CONTACTS.phone}
                </a>
              </li>
              <li className="text-white/80 flex items-center gap-2">
                <span>💬</span> MAX: {CONTACTS.phone}
              </li>
            </ul>
          </div>

          {/* Правая секция */}
          <div className="flex md:justify-end items-start">
            <div className="flex gap-3">
              <a
                href="https://wa.me/79150135722"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                title="WhatsApp"
              >
                <MdWhatsapp size={24} />
              </a>
              <a
                href={CONTACTS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-all hover:scale-110 shadow-lg"
                title="Telegram"
              >
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © Разработчик, 2026. Проект для STEKLOPLASTIC.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
