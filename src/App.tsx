import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import OurStory from './components/OurStory';
import EventDetails from './components/EventDetails';
import InteractiveMap from './components/InteractiveMap';
import RSVPForm from './components/RSVPForm';
import PhotoGallery from './components/PhotoGallery';
import DressCode from './components/DressCode';
import AddToCalendar from './components/AddToCalendar';
import GuestMessages from './components/GuestMessages';
import Playlist from './components/Playlist';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'countdown', 'story', 'details', 'map', 'rsvp', 'gallery', 'dresscode', 'messages', 'playlist'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="font-serif text-xl text-[#8B7355] font-semibold">
              Ana &amp; Carlos
            </span>
            <div className="hidden md:flex items-center gap-6">
              {[
                { id: 'countdown', label: 'Fecha' },
                { id: 'story', label: 'Historia' },
                { id: 'details', label: 'Evento' },
                { id: 'rsvp', label: 'Confirmar' },
                { id: 'gallery', label: 'Fotos' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm transition-colors ${
                    activeSection === item.id
                      ? 'text-[#8B7355] font-medium'
                      : 'text-gray-600 hover:text-[#8B7355]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('rsvp')}
              className="btn-primary px-5 py-2 rounded-full text-sm font-medium"
            >
              Confirmar Asistencia
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Countdown Section */}
      <section id="countdown" className="py-20 bg-pattern">
        <Countdown />
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-white">
        <OurStory />
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20 bg-[#FDF8F3]">
        <EventDetails />
      </section>

      {/* Interactive Map Section */}
      <section id="map" className="py-20 bg-white">
        <InteractiveMap />
      </section>

      {/* RSVP Form Section */}
      <section id="rsvp" className="py-20 bg-pattern">
        <RSVPForm />
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <PhotoGallery />
      </section>

      {/* Dress Code Section */}
      <section id="dresscode" className="py-20 bg-[#FDF8F3]">
        <DressCode />
      </section>

      {/* Add to Calendar */}
      <section className="py-10 bg-white">
        <AddToCalendar />
      </section>

      {/* Guest Messages Section */}
      <section id="messages" className="py-20 bg-pattern">
        <GuestMessages />
      </section>

      {/* Playlist Section */}
      <section id="playlist" className="py-20 bg-white">
        <Playlist />
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#2C2C2C] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="font-serif text-2xl mb-2">Ana &amp; Carlos</p>
          <p className="text-sm text-gray-400">15 de Agosto, 2026</p>
          <p className="text-xs text-gray-500 mt-4">
            Con amor y gratitud por compartir este día especial con nosotros
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
