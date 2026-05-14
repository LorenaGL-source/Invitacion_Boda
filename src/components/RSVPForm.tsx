import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  attendance: 'yes' | 'no' | 'maybe';
  guests: number;
  dietaryRestrictions: string[];
  message: string;
}

const dietaryOptions = [
  "Vegetariano",
  "Vegano",
  "Sin gluten",
  "Sin lactosa",
  "Alérgico a frutos secos",
  "Otro"
];

const RSVPForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    attendance: 'yes',
    guests: 1,
    dietaryRestrictions: [],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Por favor ingresa tu nombre';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Por favor ingresa un correo válido';
    }

    if (formData.attendance === 'yes' && formData.guests < 1) {
      newErrors.guests = 'Debes incluir al menos 1 invitado (tú)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleDietaryChange = (option: string) => {
    setFormData(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(option)
        ? prev.dietaryRestrictions.filter(d => d !== option)
        : [...prev.dietaryRestrictions, option]
    }));
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4">
        <div className="card-elegant p-12 text-center">
          <div className="text-6xl mb-6">💌</div>
          <h2 className="font-serif text-3xl text-[#2C2C2C] mb-4">
            ¡Gracias por confirmar!
          </h2>
          <p className="text-gray-600 mb-6">
            Tu respuesta ha sido registrada. Nos encantaría que nos acompañaras 
            en este día tan especial.
          </p>
          <div className="bg-[#FDF8F3] rounded-xl p-6 text-left">
            <h3 className="font-medium text-[#2C2C2C] mb-3">Resumen de tu confirmación:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Nombre: {formData.name}</li>
              <li>• Asistiré: {formData.attendance === 'yes' ? 'Sí' : formData.attendance === 'no' ? 'No' : 'Tal vez'}</li>
              {formData.attendance === 'yes' && (
                <li>• Número de invitados: {formData.guests}</li>
              )}
              {formData.dietaryRestrictions.length > 0 && (
                <li>• Restricciones: {formData.dietaryRestrictions.join(', ')}</li>
              )}
            </ul>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                attendance: 'yes',
                guests: 1,
                dietaryRestrictions: [],
                message: ''
              });
            }}
            className="mt-6 text-[#8B7355] hover:text-[#6B5345] font-medium"
          >
            Modificar mi respuesta
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Confirmar Asistencia
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Por favor, ayúdanos a planificar este día especial confirmando tu asistencia 
          antes del 15 de julio de 2026.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="card-elegant p-8">
        {/* Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
            placeholder="Ana García"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email & Phone */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
              placeholder="ana@email.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
              placeholder="(55) 1234-5678"
            />
          </div>
        </div>

        {/* Attendance */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            ¿Asistirás a nuestra boda? *
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'yes', label: '¡Con gusto!' },
              { value: 'no', label: 'No podré asistir' },
              { value: 'maybe', label: 'Tal vez' }
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, attendance: option.value as FormData['attendance'] }))}
                className={`py-3 px-4 rounded-xl border-2 transition-all ${
                  formData.attendance === option.value
                    ? 'border-[#C9A96E] bg-[#C9A96E]/10 text-[#8B7355]'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Guests (only if attending) */}
        {formData.attendance === 'yes' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Número de invitados (incluyéndote)
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData(prev => ({ ...prev, guests: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
            >
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
              ))}
            </select>
            {errors.guests && <p className="text-red-500 text-sm mt-1">{errors.guests}</p>}
          </div>
        )}

        {/* Dietary Restrictions */}
        {formData.attendance === 'yes' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Restricciones alimentarias (opcional)
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {dietaryOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleDietaryChange(option)}
                  className={`py-2 px-3 rounded-lg text-sm border transition-all ${
                    formData.dietaryRestrictions.includes(option)
                      ? 'border-[#C9A96E] bg-[#C9A96E]/10 text-[#8B7355]'
                      : 'border-gray-200 text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Message */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mensaje para los novios (opcional)
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors resize-none"
            rows={4}
            placeholder="¡Felicidades! Estamos muy emocionados de acompañarlos..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full btn-primary py-4 rounded-xl font-medium text-lg"
        >
          Confirmar Asistencia
        </button>

        <p className="text-xs text-gray-500 text-center mt-4">
          * Por favor confirma antes del 15 de julio de 2026
        </p>
      </form>
    </div>
  );
};

export default RSVPForm;
