import { useState } from 'react';

const InteractiveMap = () => {
  const [activeRoute, setActiveRoute] = useState<'car' | 'uber' | 'parking'>('car');

  const routes = {
    car: {
      title: "En Coche",
      description: "Desde Lima, toma la Av. Javier Prado hacia La Molina y continúa por la Av. La Molina hacia Cieneguilla. Cruza el puente y sigue por la Av. Nueva Toledo.",
      tips: [
        "Vía principal asfaltada",
        "Tráfico moderado los fines de semana",
        "Aproximadamente 45-60 min desde Lima"
      ]
    },
    uber: {
      title: "En Uber o Taxi",
      description: "Puedes solicitar un Uber o taxi por aplicativo desde cualquier punto de Lima. El destino es conocido por los conductores.",
      tips: [
        "Costo estimado: S/ 60-90",
        "Disponible 24/7",
        "Se recomienda programar el viaje"
      ]
    },
    parking: {
      title: "Estacionamiento",
      description: "Contamos con estacionamiento gratuito para todos los invitados. Hay espacio para más de 100 vehículos.",
      tips: [
        "Entrada por portón principal",
        "Vigilancia 24 horas",
        "Acceso directo al jardín"
      ]
    }
  };

  const handleOpenMaps = () => {
    const address = encodeURIComponent("Hacienda El Oasis, Cieneguilla, Lima, Perú");
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Cómo Llegar
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hemos preparado varias opciones para que encuentren el camino a nuestra boda 
          sin complicaciones.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden h-96 md:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6!2d-100.1!3d19.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiAxMDDCsDA2JzAwLjAiVw!5e0!3m2!1ses!2smx!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la boda"
            className="absolute inset-0"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>

        {/* Route Options */}
        <div className="space-y-6">
          <div className="flex gap-2">
            {Object.keys(routes).map((route) => (
              <button
                key={route}
                onClick={() => setActiveRoute(route as keyof typeof routes)}
                className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                  activeRoute === route
                    ? 'bg-[#8B7355] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {routes[route as keyof typeof routes].title}
              </button>
            ))}
          </div>

          <div className="card-elegant p-6">
            <h3 className="font-serif text-2xl text-[#2C2C2C] mb-3">
              {routes[activeRoute].title}
            </h3>
            <p className="text-gray-600 mb-4">
              {routes[activeRoute].description}
            </p>
            <ul className="space-y-2">
              {routes[activeRoute].tips.map((tip, index) => (
                <li key={index} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 bg-[#C9A96E] rounded-full" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleOpenMaps}
            className="w-full btn-primary py-4 rounded-xl font-medium flex items-center justify-center gap-2"
          >
            <span>📍</span>
            Abrir en Google Maps
          </button>

          <p className="text-xs text-gray-500 text-center">
            * Les recomendamos llegar con tiempo. La ceremonia comienza a las 17:00 horas.
          </p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="mt-8 bg-[#8B7355]/10 rounded-2xl p-6 text-center">
        <p className="font-medium text-[#2C2C2C] mb-2">¿Necesitas ayuda?</p>
        <p className="text-sm text-gray-600 mb-4">
          Si tienes problemas para llegar, no dudes en llamarnos
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="tel:+51987654321" 
            className="flex items-center gap-2 text-[#8B7355] hover:text-[#6B5345] font-medium"
          >
            <span>📱</span> 987 654 321 - Ana
          </a>
          <a 
            href="tel:+51912345678" 
            className="flex items-center gap-2 text-[#8B7355] hover:text-[#6B5345] font-medium"
          >
            <span>📱</span> 912 345 678 - Carlos
          </a>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;
