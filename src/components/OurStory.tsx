import { useState } from 'react';

interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
  image: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2019",
    title: "Nuestro Primer Encuentro",
    description: "Nos conocimos en una cafetería del centro. Ella pidió un latte de vainilla, él un café negro. El resto es historia.",
    image: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/e97fd27500e14288a7e6d20f4e0f2b17.jpg"
  },
  {
    id: 2,
    year: "2020",
    title: "Primera Cita Oficial",
    description: "Después de meses de conversaciones, finalmente tuvimos nuestra primera cita. Fuimos a caminar por el parque y no dejamos de hablar en horas.",
    image: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/0b2ff401b59b4e1f9e3a1de305d9a588.jpg"
  },
  {
    id: 3,
    year: "2021",
    title: "Viaje a la Playa",
    description: "Nuestro primer viaje juntos. Tres días de sol, mar y arena. Fue ahí cuando supimos que esto era para siempre.",
    image: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/5bcbde09ac1b4822b3b1506c8a4cbb74.jpg"
  },
  {
    id: 4,
    year: "2023",
    title: "El Compromiso",
    description: "En un atardecer perfecto, él se arrodilló con un anillo que ella siempre había soñado. La respuesta fue sí, sin pensarlo.",
    image: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/1c86a5048029463e9aaddac3cdc44087.jpg"
  },
  {
    id: 5,
    year: "2026",
    title: "El Gran Día",
    description: "Finalmente, el día que hemos estado esperando. Nos casaremos rodeados de nuestros seres queridos.",
    image: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/1498e00f27eb46b0b85d3537b42df0d4.jpg"
  }
];

const OurStory = () => {
  const [activeEvent, setActiveEvent] = useState(1);

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Nuestra Historia
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Cada historia de amor es única. Esta es la nuestra, un camino lleno de momentos 
          especiales que nos han traído hasta aquí.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A96E] via-[#8B7355] to-[#C9A96E] transform -translate-x-1/2" />
        
        {/* Mobile timeline line */}
        <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#C9A96E] via-[#8B7355] to-[#C9A96E]" />

        <div className="space-y-12 md:space-y-0">
          {timelineEvents.map((event, index) => (
            <div 
              key={event.id}
              className={`relative md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Content Card */}
              <div className="md:w-5/12 mb-8 md:mb-0">
                <div 
                  className={`card-elegant p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                    activeEvent === event.id ? 'ring-2 ring-[#C9A96E]' : ''
                  }`}
                  onClick={() => setActiveEvent(event.id)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-serif text-3xl text-[#8B7355] font-semibold">
                      {event.year}
                    </span>
                    <div className="flex-1 h-px bg-[#C9A96E]/30" />
                  </div>
                  <h3 className="font-serif text-xl text-[#2C2C2C] mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <div className={`w-4 h-4 rounded-full border-2 border-[#8B7355] bg-white z-10 transition-all duration-300 ${
                  activeEvent === event.id ? 'scale-150 bg-[#C9A96E]' : ''
                }`} />
              </div>

              {/* Mobile Timeline Dot */}
              <div className="md:hidden absolute left-8 transform -translate-x-1/2">
                <div className={`w-4 h-4 rounded-full border-2 border-[#8B7355] bg-white z-10 transition-all duration-300 ${
                  activeEvent === event.id ? 'scale-150 bg-[#C9A96E]' : ''
                }`} />
              </div>

              {/* Image */}
              <div className="md:w-5/12 md:pl-8 md:pr-8">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="text-center mt-16">
        <blockquote className="font-serif text-2xl md:text-3xl text-[#8B7355] italic">
          "Te amé desde el primer momento y nunca dejé de hacerlo"
        </blockquote>
        <p className="mt-4 text-gray-500">— Carlos</p>
      </div>
    </div>
  );
};

export default OurStory;
