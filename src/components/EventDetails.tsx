const EventDetails = () => {
  const events = [
    {
      id: 1,
      type: "ceremony",
      title: "Ceremonia Religiosa",
      time: "17:00 horas",
      location: "Capilla de la Hacienda",
      description: "La ceremonia será officiada por el padre Miguel Ángel. Les pedimos llegar 30 minutos antes.",
      icon: "✝"
    },
    {
      id: 2,
      type: "reception",
      title: "Recepción",
      time: "18:30 horas",
      location: "Jardín Principal",
      description: "Cóctel de bienvenida seguido de una cena romántica bajo las estrellas.",
      icon: "🥂"
    },
    {
      id: 3,
      type: "party",
      title: "Fiesta",
      time: "21:00 horas",
      location: "Salón de Eventos",
      description: "¡Baile, música y diversión! No olviden sus zapatos cómodos.",
      icon: "💃"
    }
  ];

  const dressCode = [
    { label: "Código de Vestimenta", value: "Formal Elegante" },
    { label: "Color de la boda", value: "Pasteles y Neutros" },
    { label: "Niños", value: "Bienvenidos" },
    { label: "Regalo", value: "Sobre en efectivo" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Los Detalles del Día
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hemos planeado cada momento para que sea especial. Aquí encontrarán 
          toda la información que necesitan.
        </p>
      </div>

      {/* Event Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {events.map((event, index) => (
          <div 
            key={event.id}
            className="card-elegant p-8 text-center"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-4xl mb-4">{event.icon}</div>
            <h3 className="font-serif text-2xl text-[#2C2C2C] mb-2">
              {event.title}
            </h3>
            <p className="text-[#C9A96E] font-medium mb-2">{event.time}</p>
            <p className="text-gray-600 text-sm mb-4">{event.location}</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              {event.description}
            </p>
          </div>
        ))}
      </div>

      {/* Venue Info */}
      <div className="card-elegant p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-serif text-3xl text-[#2C2C2C] mb-4">
              Hacienda El Oasis
            </h3>
            <p className="text-gray-600 mb-4">
              Un lugar mágico rodeado de la naturaleza y el sol radiante de 
              Cieneguilla. Con sus amplios jardines y aire puro, es el 
              escenario perfecto para celebrar nuestro amor.
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-600">
                <span className="text-[#C9A96E]">📍</span>
                Av. Nueva Toledo km 23.5, Cieneguilla, Lima, Perú
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="text-[#C9A96E]">🚗</span>
                Estacionamiento gratuito disponible
              </p>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="text-[#C9A96E]">🌿</span>
                Espacio al aire libre con jardín
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <img 
              src="https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/1a2439f431744a8ab97688ee3235ab01.jpg"
              alt="Hacienda San Miguel"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>
      </div>

      {/* Quick Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {dressCode.map((item, index) => (
          <div 
            key={index}
            className="bg-white/50 rounded-xl p-4 text-center"
          >
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
              {item.label}
            </p>
            <p className="font-medium text-[#2C2C2C]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDetails;
