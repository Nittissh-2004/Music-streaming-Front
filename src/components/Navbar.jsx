import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">🎵 MusicApp</h1>
      <ul className="flex space-x-6 font-medium">
        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
        <li><Link to="/search" className="hover:text-blue-500">Search</Link></li>
        <li><Link to="/playlists" className="hover:text-blue-500">Playlists</Link></li>
        <li><Link to="/profile" className="hover:text-blue-500">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
