import React, { useEffect, useState } from 'react';
import API from './api'; // Make sure api.js is in the same folder (src/)

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    API.get('/songs')
      .then(res => setSongs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">All Songs</h2>
      <ul className="space-y-2">
        {songs.map(song => (
          <li key={song._id} className="bg-gray-100 p-2 rounded shadow">
            🎵 {song.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SongList;
