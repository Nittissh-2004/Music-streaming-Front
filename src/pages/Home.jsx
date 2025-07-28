import { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import SongCard from "../components/SongCard";

function Home() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const res = await axios.get("/songs");
        setSongs(res.data);
      } catch (err) {
        console.error("Failed to fetch songs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">🎵 Recommended Songs</h2>

      {loading ? (
        <p>Loading songs...</p>
      ) : songs.length === 0 ? (
        <p>No songs found. Please add some from the backend.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {songs.map((song) => (
            <SongCard key={song._id} song={song} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
