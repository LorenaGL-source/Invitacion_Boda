import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const weddingDate = new Date('2026-08-15T17:00:00');
  
  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Días' },
    { value: timeLeft.hours, label: 'Horas' },
    { value: timeLeft.minutes, label: 'Minutos' },
    { value: timeLeft.seconds, label: 'Segundos' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          La Cuenta Regresiva
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Cada momento nos acerca más al día más especial de nuestras vidas.
          Estamos emocionados de compartirlo contigo.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {timeUnits.map((unit, index) => (
          <div 
            key={unit.label}
            className="card-elegant p-6 md:p-8 text-center"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#8B7355] font-semibold mb-2">
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm uppercase tracking-wider text-gray-500">
              {unit.label}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="font-serif text-2xl text-[#8B7355] italic">
          "El amor no tiene fecha de vencimiento, pero nuestra boda sí"
        </p>
      </div>
    </div>
  );
};

export default Countdown;
