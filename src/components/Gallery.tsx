
export const Gallery = () => {
  return (
    <section id="galeria" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#c49a6c]">
          Galeria
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['galeria1.jpg', 'galeria2.jpg', 'galeria3.jpg', 'galeria4.jpg', 'galeria5.jpg', 'galeria6.jpg'].map((img, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={`/image/${img}`}
                alt={`Delícias da Lu - Imagem ${i + 1}`}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

