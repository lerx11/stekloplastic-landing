const Gallery = () => {
  const works = [
    {
      before: 'broken%20fiberglass%20septic%20tank%20with%20large%20hole%20excavated%20from%20ground%20dirt%20industrial%20accident%20realistic%20photo',
      after: 'repaired%20green%20fiberglass%20septic%20tank%20smooth%20surface%20installed%20in%20ground%20industrial%20photography',
    },
    {
      before: 'damaged%20fiberglass%20pipe%20support%20bracket%20corroded%20metal%20industrial%20facility%20close%20up%20photo',
      after: 'restored%20fiberglass%20pipe%20support%20green%20epoxy%20coating%20reinforced%20industrial%20repair%20close%20up',
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <span className="text-accent font-bold text-sm tracking-widest uppercase">
            Наши работы
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 leading-tight">
            Реальные примеры восстановления
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {works.map((work, rowIndex) => (
            <>
              <div key={`${rowIndex}-before`} className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200">
                  <img
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${work.before}&image_size=square`}
                    alt="До"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-red-500/90 text-white font-bold px-4 py-1.5 rounded-lg shadow-lg">
                  До
                </div>
              </div>

              <div key={`${rowIndex}-after`} className="relative group">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-slate-200">
                  <img
                    src={`https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=${work.after}&image_size=square`}
                    alt="После"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500/90 text-white font-bold px-4 py-1.5 rounded-lg shadow-lg">
                  После
                </div>
              </div>
            </>
          ))}
        </div>

        <p className="text-center text-slate-dark/70 text-lg mt-10 max-w-2xl mx-auto leading-relaxed">
          Восстанавливаем даже самые сложные повреждения, возвращая емкости 100% герметичность.
        </p>
      </div>
    </section>
  )
}

export default Gallery
