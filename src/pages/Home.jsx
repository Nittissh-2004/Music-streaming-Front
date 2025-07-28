import SongCard from "../components/SongCard";

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
];

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">🎵 Recommended Songs</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dummySongs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

export default Home;
