import { useState } from "react";

const allSongs = [
  {
    id: 1,
    title: "Shape of You",
    artist: "Ed Sheeran",
    cover: "https://i.scdn.co/image/ab67616d0000b273b4f7c7ad6751e6f2792aa3df",
  },
  {
    id: 2,
    title: "Rockstar",
    artist: "Post Malone",
    cover: "https://i.scdn.co/image/ab67616d0000b27306e81f4e7c3cf35501430f13",
  },
  {
    id: 3,
    title: "Night Changes",
    artist: "One Direction",
    cover: "https://i.scdn.co/image/ab67616d0000b2730c89161f776b7b2f47c6d9a2",
  },
  {
    id: 4,
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    cover: "https://i.scdn.co/image/ab67616d0000b273fef0f471c605281a746edc10",
  },
];

function Playlists() {
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = (song) => {
    if (!playlist.find((item) => item.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((song) => song.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">🎧 My Playlist</h2>

      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-2">➕ Add Songs</h3>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {allSongs.map((song) => (
            <div key={song.id} className="bg-white p-4 rounded-lg shadow">
              <img src={song.cover} alt={song.title} className="h-32 w-full object-cover rounded" />
              <h4 className="mt-2 font-medium">{song.title}</h4>
              <p className="text-sm text-gray-600">{song.artist}</p>
              <button
                onClick={() => addToPlaylist(song)}
                className="mt-2 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
              >
                Add to Playlist
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-2">📁 Your Playlist</h3>
        {playlist.length === 0 ? (
          <p className="text-gray-500">No songs in your playlist.</p>
        ) : (
          <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            {playlist.map((song) => (
              <div key={song.id} className="bg-white p-4 rounded-lg shadow">
                <img src={song.cover} alt={song.title} className="h-32 w-full object-cover rounded" />
                <h4 className="mt-2 font-medium">{song.title}</h4>
                <p className="text-sm text-gray-600">{song.artist}</p>
                <button
                  onClick={() => removeFromPlaylist(song.id)}
                  className="mt-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Playlists;
