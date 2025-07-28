import { useState } from "react";

const playlist = [
  {
    id: 1,
    title: "Shape of You",
    artist: "Ed Sheeran",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273b4f7c7ad6751e6f2792aa3df",
  },
  {
    id: 2,
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://i.scdn.co/image/ab67616d0000b273fef0f471c605281a746edc10",
  },
];

function MusicPlayer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = playlist[currentIndex];

  const audio = new Audio(currentSong.audio);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    audio.pause();
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(false);
  };

  const handlePrev = () => {
    audio.pause();
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex items-center justify-between z-50">
      <div className="flex items-center gap-4">
        <img src={currentSong.cover} alt={currentSong.title} className="h-12 w-12 rounded" />
        <div>
          <h4 className="text-sm font-semibold">{currentSong.title}</h4>
          <p className="text-xs text-gray-300">{currentSong.artist}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button onClick={handlePrev} className="hover:text-blue-400">⏮</button>
        <button onClick={handlePlayPause} className="text-2xl hover:text-blue-400">
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={handleNext} className="hover:text-blue-400">⏭</button>
      </div>
    </div>
  );
}

export default MusicPlayer;
