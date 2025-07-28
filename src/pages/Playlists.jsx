import { useState, useEffect } from "react";
import axios from "../api/axiosInstance";

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchPlaylists();
    fetchSongs();
  }, []);

  const fetchPlaylists = async () => {
    try {
      const res = await axios.get("/playlists");
      setPlaylists(res.data);
    } catch (err) {
      console.error("Error fetching playlists:", err);
    }
  };

  const fetchSongs = async () => {
    try {
      const res = await axios.get("/songs");
      setSongs(res.data);
    } catch (err) {
      console.error("Error fetching songs:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/playlists", { name, description, songs: selectedSongs });
      setName("");
      setDescription("");
      setSelectedSongs([]);
      fetchPlaylists(); // refresh list
    } catch (err) {
      console.error("Error creating playlist:", err);
    }
  };

  const toggleSong = (songId) => {
    if (selectedSongs.includes(songId)) {
      setSelectedSongs(selectedSongs.filter(id => id !== songId));
    } else {
      setSelectedSongs([...selectedSongs, songId]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">🎼 Create a Playlist</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Playlist Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border w-full rounded"
          required
        />
        <textarea
          placeholder="Playlist Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border w-full rounded"
        />
        <div>
          <h3 className="font-semibold mb-1">Select Songs:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-52 overflow-y-scroll">
            {songs.map((song) => (
              <label key={song._id} className="flex items-center space-x-2 bg-gray-100 p-2 rounded">
                <input
                  type="checkbox"
                  checked={selectedSongs.includes(song._id)}
                  onChange={() => toggleSong(song._id)}
                />
                <span>{song.title}</span>
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          ➕ Create Playlist
        </button>
      </form>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-4 text-green-600">📂 Your Playlists</h2>
      {playlists.length === 0 ? (
        <p>No playlists found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {playlists.map((pl) => (
            <div key={pl._id} className="p-4 bg-white rounded shadow">
              <h3 className="text-lg font-bold">{pl.name}</h3>
              <p className="text-sm text-gray-600">{pl.description}</p>
              <p className="text-xs mt-2 text-blue-700">🎵 {pl.songs.length} songs</p>
              <ul className="text-sm mt-2 list-disc list-inside">
                {pl.songs.slice(0, 3).map((s) => (
                  <li key={s._id}>{s.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Playlists;
