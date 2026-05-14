import { useState } from 'react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  year: string;
  caption: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/e97fd27500e14288a7e6d20f4e0f2b17.jpg",
    alt: "Nuestra primera cita",
    year: "2019",
    caption: "Nuestra primera cita"
  },
  {
    id: 2,
    src: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/0b2ff401b59b4e1f9e3a1de305d9a588.jpg",
    alt: "Paseo en el parque",
    year: "2020",
    caption: "Días juntos"
  },
  {
    id: 3,
    src: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/5bcbde09ac1b4822b3b1506c8a4cbb74.jpg",
    alt: "Vacaciones en la playa",
    year: "2021",
    caption: "Vacaciones juntos"
  },
  {
    id: 4,
    src: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/1498e00f27eb46b0b85d3537b42df0d4.jpg",
    alt: "Atardecer romántico",
    year: "2022",
    caption: "Atardeceres juntos"
  },
  {
    id: 5,
    src: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/1c86a5048029463e9aaddac3cdc44087.jpg",
    alt: "El compromiso",
    year: "2023",
    caption: "El día del 'Sí acepto'"
  },
  {
    id: 6,
    src: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/1a2439f431744a8ab97688ee3235ab01.jpg",
    alt: "Celebración",
    year: "2024",
    caption: "Celebrando nuestro amor"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Nuestra Galería
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Algunos de los momentos más hermosos que hemos compartido juntos. 
          Cada foto cuenta una historia de amor.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className="break-inside-avoid"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div 
              className="gallery-item relative overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt}
                className="w-full object-cover"
                style={{ 
                  aspectRatio: index % 3 === 0 ? '3/4' : index % 3 === 1 ? '4/3' : '1/1'
                }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-white/70 bg-white/20 px-2 py-1 rounded-full">
                    {photo.year}
                  </span>
                  <p className="text-white font-medium mt-2">{photo.caption}</p>
                </div>
              </div>
              {/* Year badge */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-[#8B7355]">{photo.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#C9A96E] transition-colors"
            >
              ×
            </button>
            <img 
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <span className="text-[#C9A96E] text-sm">{selectedPhoto.year}</span>
              <h3 className="text-white text-xl font-serif mt-1">{selectedPhoto.caption}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Photo Counter */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          {photos.length} momentos capturados • Y esto solo es el comienzo
        </p>
      </div>
    </div>
  );
};

export default PhotoGallery;
