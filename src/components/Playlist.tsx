import { useState } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  suggestedBy: string;
  votes: number;
}

const initialSongs: Song[] = [
  { id: 1, title: "Perfect", artist: "Ed Sheeran", suggestedBy: "María G.", votes: 12 },
  { id: 2, title: "Thinking Out Loud", artist: "Ed Sheeran", suggestedBy: "Juan P.", votes: 8 },
  { id: 3, title: "A Thousand Years", artist: "Christina Perri", suggestedBy: "Sofia H.", votes: 15 },
  { id: 4, title: "Marry Me", artist: "Train", suggestedBy: "Carlos R.", votes: 10 },
  { id: 5, title: "L.O.V.E", artist: "Nat King Cole", suggestedBy: "Ana L.", votes: 6 }
];

const Playlist = () => {
  const [songs, setSongs] = useState<Song[]>(initialSongs);
  const [showForm, setShowForm] = useState(false);
  const [newSong, setNewSong] = useState({ title: '', artist: '', suggestedBy: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newSong.title.trim() && newSong.artist.trim() && newSong.suggestedBy.trim()) {
      const song: Song = {
        id: songs.length + 1,
        title: newSong.title,
        artist: newSong.artist,
        suggestedBy: newSong.suggestedBy,
        votes: 0
      };
      setSongs([...songs, song]);
      setNewSong({ title: '', artist: '', suggestedBy: '' });
      setShowForm(false);
    }
  };

  const handleVote = (songId: number) => {
    setSongs(songs.map(song => 
      song.id === songId ? { ...song, votes: song.votes + 1 } : song
    ).sort((a, b) => b.votes - a.votes));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl md:text-5xl text-[#2C2C2C] mb-4">
          Lista de Reproducción
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Ayúdanos a crear la banda sonora de nuestra boda. 
          Sugiere tus canciones favoritas y vota por las que más te gusten.
        </p>
      </div>

      {/* Top Songs */}
      <div className="mb-8">
        <h3 className="font-serif text-xl text-[#2C2C2C] mb-4 flex items-center gap-2">
          <span>🏆</span> Canciones más votadas
        </h3>
        <div className="space-y-3">
          {songs.slice(0, 3).map((song, index) => (
            <div 
              key={song.id} 
              className="card-elegant p-4 flex items-center gap-4"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                index === 0 ? 'bg-[#D4AF37] text-white' : 
                index === 1 ? 'bg-[#C0C0C0] text-white' : 
                'bg-[#CD7F32] text-white'
              }`}>
                <span className="font-bold">{index + 1}</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-[#2C2C2C]">{song.title}</p>
                <p className="text-sm text-gray-500">{song.artist}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#C9A96E] font-medium">{song.votes}</span>
                <button
                  onClick={() => handleVote(song.id)}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#C9A96E]/20 flex items-center justify-center transition-colors"
                >
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Songs */}
      <div className="mb-8">
        <h3 className="font-serif text-xl text-[#2C2C2C] mb-4 flex items-center gap-2">
          <span>🎵</span> Todas las canciones
        </h3>
        <div className="space-y-2">
          {songs.map((song) => (
            <div 
              key={song.id} 
              className="bg-white/50 rounded-xl p-4 flex items-center gap-4"
            >
              <div className="flex-1">
                <p className="font-medium text-[#2C2C2C]">{song.title}</p>
                <p className="text-sm text-gray-500">{song.artist}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Sugerido por</p>
                <p className="text-sm text-gray-600">{song.suggestedBy}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#C9A96E] font-medium">{song.votes}</span>
                <button
                  onClick={() => handleVote(song.id)}
                  className="w-8 h-8 rounded-full hover:bg-[#C9A96E]/20 flex items-center justify-center transition-colors"
                >
                  👍
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Song Button / Form */}
      {!showForm ? (
        <div className="text-center">
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary px-8 py-3 rounded-full font-medium"
          >
            🎶 Sugiere una canción
          </button>
        </div>
      ) : (
        <div className="card-elegant p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título de la canción
                </label>
                <input
                  type="text"
                  value={newSong.title}
                  onChange={(e) => setNewSong(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
                  placeholder="Nombre de la canción"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Artista
                </label>
                <input
                  type="text"
                  value={newSong.artist}
                  onChange={(e) => setNewSong(prev => ({ ...prev, artist: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
                  placeholder="Nombre del artista"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tu nombre
              </label>
              <input
                type="text"
                value={newSong.suggestedBy}
                onChange={(e) => setNewSong(prev => ({ ...prev, suggestedBy: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C9A96E] transition-colors"
                placeholder="Tu nombre"
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
                Agregar canción
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Info */}
      <div className="mt-8 text-center">
        <p className="text-xs text-gray-500">
          💡 Las canciones más votadas serán reproducidas durante la fiesta
        </p>
      </div>
    </div>
  );
};

export default Playlist;
