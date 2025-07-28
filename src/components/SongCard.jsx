import { useState } from "react";

function SongCard({ song }) {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [downloading, setDownloading] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const response = await fetch(song.audio);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `${song.title}.mp3`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert("Error downloading the song.");
      console.error(error);
    } finally {
      setDownloading(false);
    }
  };

  const shareUrl = encodeURIComponent(window.location.href);
  const songTitle = encodeURIComponent(song.title);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={song.cover}
        alt={song.title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{song.title}</h3>
      <p className="text-sm text-gray-600">{song.artist}</p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`mt-2 text-sm px-3 py-1 rounded ${
          liked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        {liked ? "❤️ Liked" : "🤍 Like"}
      </button>

      {/* Comment Box */}
      <div className="mt-3">
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="💬 Add a comment..."
          className="w-full p-2 text-sm border border-gray-300 rounded"
        />
      </div>

      {/* Download Button */}
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="mt-3 w-full bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600"
      >
        {downloading ? "Downloading..." : "⬇️ Download"}
      </button>

      {/* Share Buttons */}
      <div className="flex space-x-3 mt-4 text-sm">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=Listening to ${songTitle}&url=${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-500 hover:underline"
        >
          Twitter
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=🎵 Check this out: ${songTitle} - ${shareUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:underline"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export default SongCard;
