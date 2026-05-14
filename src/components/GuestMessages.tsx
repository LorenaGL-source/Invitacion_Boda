import { useState } from 'react';

interface Message {
  id: number;
  name: string;
  message: string;
  date: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    name: "María García",
    message: "¡Felicidades! Los deseo toda la felicidad del mundo. Será una boda hermosa. 💕",
    date: "15/05/2026"
  },
  {
    id: 2,
    name: "Juan Pérez",
    message: "Han sido los mejores amigos desde la universidad. Les deseo todo el amor y éxito en esta nueva etapa.",
    date: "14/05/2026"
  },
  {
    id: 3,
    name: "Sofia Hernández",
    message: "¡Qué pareja tan adorable! No puedo esperar para verlos decir 'sí acepto'. Los mejores deseos para ustedes.",
    date: "13/05/2026"
  }
];

const GuestMessages = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newMessage.name.trim() && newMessage.message.trim()) {
      const message: Message = {
        id: messages.length + 1,
        name: newMessage.name,
        message: newMessage.message,
        date: new Date().toLocaleDateString('es-ES')
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Deseos y Felicitaciones
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Nos encantaría leer tus mensajes y deseos para nosotros. 
          Tu amor y apoyo significan todo.
        </p>
      </div>

      {/* Messages List */}
      <div className="space-y-4 mb-8">
        {messages.map((msg) => (
          <div key={msg.id} className="card-elegant p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#C9A96E]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#8B7355] font-medium">
                  {msg.name.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-[#2C2C2C]">{msg.name}</span>
                  <span className="text-xs text-gray-400">{msg.date}</span>
                </div>
                <p className="text-gray-600">{msg.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Message Button / Form */}
      {!showForm ? (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary px-8 py-3 rounded-full font-medium"
          >
            ✍️ Deja tu mensaje
          </button>
        </div>
      ) : (
        <div className="card-elegant p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tu nombre
              </label>
              <input
                type="text"
                value={newMessage.name}
                onChange={(e) => setNewMessage(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tu mensaje
              </label>
              <textarea
                value={newMessage.message}
                onChange={(e) => setNewMessage(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors resize-none"
                rows={4}
                placeholder="Escribe tus mejores deseos..."
                required
              />
            </div>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 py-3 px-6 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-gray-300 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="flex-1 btn-primary py-3 px-6 rounded-xl font-medium"
              >
                Publicar mensaje
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Messages Counter */}
      <div className="text-center mt-8">
        <p className="text-gray-500 text-sm">
          {messages.length} mensajes de amor y apoyo 💕
        </p>
      </div>
    </div>
  );
};

export default GuestMessages;
