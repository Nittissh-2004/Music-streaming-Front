import { useState } from "react";

const dummySongs = [
  {
    id: 1,
    title: "Shape of You",
    artist: "Ed Sheeran",
    genre: "Pop",
    cover: "https://i.scdn.co/image/ab67616d0000b273b4f7c7ad6751e6f2792aa3df",
  },
  {
    id: 2,
    title: "Rockstar",
    artist: "Post Malone",
    genre: "Hip-Hop",
    cover: "https://i.scdn.co/image/ab67616d0000b27306e81f4e7c3cf35501430f13",
  },
  {
    id: 3,
    title: "Night Changes",
    artist: "One Direction",
    genre: "Pop",
    cover: "https://i.scdn.co/image/ab67616d0000b2730c89161f776b7b2f47c6d9a2",
  },
  {
    id: 4,
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    genre: "Acoustic",
    cover: "https://i.scdn.co/image/ab67616d0000b273fef0f471c605281a746edc10",
  },
];
function Search() {
  const [query, setQuery] = useState("");

  const filteredSongs = dummySongs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase()) ||
      song.genre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">🔍 Search Songs</h2>

      <input
        type="text"
        placeholder="Search by title, artist, or genre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-md mb-6"
      />

      {filteredSongs.length === 0 ? (
        <p className="text-gray-500">No songs found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredSongs.map((song) => (
            <div key={song.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={song.cover} alt={song.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{song.title}</h3>
                <p className="text-gray-600">{song.artist}</p>
                <span className="inline-block mt-2 text-sm text-white bg-green-500 px-2 py-1 rounded-full">
                  {song.genre}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
