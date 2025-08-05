import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Playlists from "./pages/Playlists";
import Profile from "./pages/Profile";
import MusicPlayer from "./components/MusicPlayer";
import SongList from './SongList';


function App() {
  return (
    <Router>
      <div className="min-h-screen pb-24 bg-gray-100">
        {/* Navbar */}
        <Navbar />

        {/* Main Routes */}
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>

        {/* Music Player (fixed at bottom) */}
        <MusicPlayer />
      </div>
    </Router>
    
  );
}

export default App;
