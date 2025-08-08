import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axiosInstance.get("/songs")
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching songs:", err);
      });
  }, []);

  return (
    <div>
      {songs.length === 0 ? (
        <p>No songs found. Please add some from the backend.</p>
      ) : (
        <ul>
          {songs.map((song) => (
            <li key={song._id}>
              {song.title} — {song.artist}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SongList;
