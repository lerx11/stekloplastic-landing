import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Интерактивная бочка: клик → трещина заполняется, ёмкость восстанавливается
 */
const InteractiveTank = () => {
  const [isRepaired, setIsRepaired] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  // Авто-сброс через 5 секунд после ремонта, чтобы пользователь мог попробовать снова
  useEffect(() => {
    if (isRepaired) {
      const timer = setTimeout(() => setIsRepaired(false), 6000)
      return () => clearTimeout(timer)
    }
  }, [isRepaired])

  return (
    <div
      ref={ref}
      className={`reveal-scale ${isVisible ? 'reveal-visible' : ''} flex flex-col items-center`}
    >
      <div
        onClick={() => setIsRepaired(true)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative cursor-pointer group select-none"
        role="button"
        aria-label={isRepaired ? 'Ёмкость восстановлена' : 'Нажмите, чтобы отремонтировать ёмкость'}
      >
        <svg
          width="260"
          height="280"
          viewBox="0 0 260 280"
          className={`transition-transform duration-500 ${isHovering && !isRepaired ? 'scale-105' : ''} drop-shadow-2xl`}
        >
          {/* Тень под бочкой */}
          <ellipse cx="130" cy="265" rx="90" ry="10" fill="rgba(0,0,0,0.2)" />

          {/* Корпус бочки — основная форма */}
          <defs>
            <linearGradient id="tankBody" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a4a7a" />
              <stop offset="30%" stopColor="#2a6aa8" />
              <stop offset="50%" stopColor="#3a8acc" />
              <stop offset="70%" stopColor="#2a6aa8" />
              <stop offset="100%" stopColor="#1a4a7a" />
            </linearGradient>
            <linearGradient id="tankBodyRepaired" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0a2540" />
              <stop offset="30%" stopColor="#1a4a7a" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="70%" stopColor="#1a4a7a" />
              <stop offset="100%" stopColor="#0a2540" />
            </linearGradient>
            <linearGradient id="topEllipse" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3a8acc" />
              <stop offset="100%" stopColor="#1a4a7a" />
            </linearGradient>
            <linearGradient id="repairPatch" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f5a623" />
              <stop offset="100%" stopColor="#e8971a" />
            </linearGradient>
          </defs>

          {/* Верхний овал (горловина) */}
          <ellipse
            cx="130"
            cy="40"
            rx="80"
            ry="18"
            fill="url(#topEllipse)"
            stroke="#061729"
            strokeWidth="2"
          />

          {/* Корпус */}
          <path
            d="M 50 40 
               Q 50 160 50 240 
               Q 130 268 210 240 
               Q 210 160 210 40 
               Z"
            fill={isRepaired ? 'url(#tankBodyRepaired)' : 'url(#tankBody)'}
            stroke="#061729"
            strokeWidth="2"
            className="transition-all duration-700"
          />

          {/* Горизонтальные рёбра жёсткости */}
          <ellipse cx="130" cy="90" rx="80" ry="8" fill="none" stroke="#061729" strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="130" cy="160" rx="80" ry="8" fill="none" stroke="#061729" strokeWidth="1.5" opacity="0.4" />
          <ellipse cx="130" cy="220" rx="78" ry="8" fill="none" stroke="#061729" strokeWidth="1.5" opacity="0.4" />

          {/* === ТРЕЩИНА (видна пока не отремонтировано) === */}
          {!isRepaired && (
            <g className="crack-pulse">
              {/* Главная трещина */}
              <path
                d="M 130 50 
                   L 125 80 
                   L 138 110 
                   L 120 145 
                   L 135 175 
                   L 122 210 
                   L 130 240"
                stroke="#dc2626"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Ответвления трещины */}
              <path
                d="M 138 110 L 155 120 M 120 145 L 100 155 M 135 175 L 150 185"
                stroke="#dc2626"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.8"
              />
              {/* Блик на трещине */}
              <path
                d="M 130 50 L 125 80 L 138 110 L 120 145 L 135 175 L 122 210 L 130 240"
                stroke="#fca5a5"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                opacity="0.6"
              />
            </g>
          )}

          {/* === ЗАПЛАТА (анимированно появляется при ремонте) === */}
          {isRepaired && (
            <>
              {/* Заплата из стеклоткани */}
              <path
                d="M 130 50 
                   L 125 80 
                   L 138 110 
                   L 120 145 
                   L 135 175 
                   L 122 210 
                   L 130 240"
                stroke="url(#repairPatch)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 400,
                  strokeDashoffset: 0,
                  animation: 'repairFill 1.2s ease-out forwards',
                }}
              />
              {/* Дополнительное усиление по бокам */}
              <path
                d="M 138 110 L 155 120 M 120 145 L 100 155 M 135 175 L 150 185"
                stroke="#f5a623"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                opacity="0"
                style={{ animation: 'repairFill 0.8s ease-out 0.6s forwards' }}
              />
              {/* Искры/частицы при ремонте */}
              <g opacity="0" style={{ animation: 'fadeIn 0.4s ease-out 0.8s forwards' }}>
                <circle cx="120" cy="100" r="2" fill="#fbbf24" />
                <circle cx="150" cy="130" r="2" fill="#fbbf24" />
                <circle cx="110" cy="170" r="2" fill="#fbbf24" />
                <circle cx="145" cy="200" r="2" fill="#fbbf24" />
              </g>
            </>
          )}

          {/* === КАПЛИ ВОДЫ (пока не отремонтировано) === */}
          {!isRepaired && (
            <g>
              <circle cx="130" cy="250" r="3" fill="#3b82f6" className="animate-drip" style={{ animationDelay: '0s' }} />
              <circle cx="125" cy="250" r="2" fill="#3b82f6" className="animate-drip" style={{ animationDelay: '0.7s' }} />
              <circle cx="135" cy="250" r="2.5" fill="#3b82f6" className="animate-drip" style={{ animationDelay: '1.3s' }} />
            </g>
          )}

          {/* Знак готовности после ремонта */}
          {isRepaired && (
            <g style={{ animation: 'fadeIn 0.5s ease-out 1.3s forwards' }} opacity="0">
              <circle
                cx="130"
                cy="135"
                r="26"
                fill="#10b981"
                stroke="#ffffff"
                strokeWidth="3"
              />
              <path
                d="M 118 135 L 127 144 L 143 126"
                stroke="#ffffff"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          )}
        </svg>

        {/* Подсказка */}
        <div
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-semibold px-4 py-2 rounded-full transition-all duration-500 ${
            isRepaired
              ? 'bg-green-500 text-white opacity-100'
              : 'bg-accent text-primary opacity-0 group-hover:opacity-100'
          }`}
        >
          {isRepaired ? '✓ Герметичность восстановлена' : '👆 Нажмите, чтобы отремонтировать'}
        </div>
      </div>

      <p className="text-center text-slate-dark/70 text-sm mt-8 max-w-xs">
        {isRepaired
          ? 'Полное восстановление конструкции с усилением проблемных зон'
          : 'Трещина корпуса приводит к утечке. Мы возвращаем ёмности герметичность.'}
      </p>
    </div>
  )
}

export default InteractiveTank
