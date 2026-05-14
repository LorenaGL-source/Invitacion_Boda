const DressCode = () => {
  const suggestions = [
    {
      id: 1,
      title: "Ella",
      description: "Para las damas, vestidos elegantes en tonos pastel o neutros. Evitar blanco o tonos muy oscuros.",
      image: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/37a2f5903b6647fd867874a5e80fc0c3.jpg",
      tips: [
        "Vestidos largos o midi",
        "Tonos: rosa empolvado, nude, azul cielo, verde menta",
        "Zapatos elegantes",
        "Accesorios sutiles"
      ]
    },
    {
      id: 2,
      title: "Él",
      description: "Para los caballeros, traje formal con corbata. Pueden optar por tonos claros para la ceremonia.",
      image: "https://public.youware.com/users-website-assets/prod/f3505630-a5a7-4259-8fe9-7553457122a4/1c86a5048029463e9aaddac3cdc44087.jpg",
      tips: [
        "Traje oscuro o gris",
        "Camisa blanca o azul clara",
        "Zapatos de vestir",
        "Corbata o moño"
      ]
    }
  ];

  const colors = [
    { name: "Rosa Empolvado", hex: "#F4C2C2" },
    { name: "Nude", hex: "#E3BC9A" },
    { name: "Azul Cielo", hex: "#87CEEB" },
    { name: "Verde Menta", hex: "#98FF98" },
    { name: "Lavanda", hex: "#E6E6FA" },
    { name: "Durazno", hex: "#FFDAB9" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Código de Vestimenta
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nos encantaría que lucieran elegantes en nuestro gran día. 
          Aquí les dejamos algunas sugerencias para que se vean espectaculares.
        </p>
      </div>

      {/* Suggestions */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="card-elegant overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={suggestion.image}
                alt={suggestion.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-2xl text-[#2C2C2C] mb-2">
                {suggestion.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {suggestion.description}
              </p>
              <ul className="space-y-2">
                {suggestion.tips.map((tip, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-[#C9A96E] rounded-full" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Color Palette */}
      <div className="card-elegant p-8">
        <h3 className="font-serif text-2xl text-[#2C2C2C] mb-6 text-center">
          Paleta de Colores Sugerida
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {colors.map((color) => (
            <div 
              key={color.name}
              className="flex flex-col items-center gap-2"
            >
              <div 
                className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs text-gray-500">{color.name}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-500">
          * Por favor evitar el color blanco para respetar a la novia
        </p>
      </div>

      {/* Additional Tips */}
      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <span className="text-2xl">☀️</span>
          <p className="text-sm text-gray-600 mt-2">
            El evento será al aire libre, consideren protector solar
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <span className="text-2xl">👠</span>
          <p className="text-sm text-gray-600 mt-2">
            Zapatos cómodos para la pista de baile
          </p>
        </div>
        <div className="bg-white/50 rounded-xl p-4 text-center">
          <span className="text-2xl">📸</span>
          <p className="text-sm text-gray-600 mt-2">
            ¡No olviden cargar sus cámaras!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DressCode;
