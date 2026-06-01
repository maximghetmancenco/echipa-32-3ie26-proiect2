import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={darkMode ? "sticky top-0 bg-gray-900 text-white shadow-md z-50" : "sticky top-0 bg-white text-gray-900 shadow-md z-50"}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl tracking-wide">
          London Explorer
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <input type="text" placeholder="Search..." className="border rounded px-3 py-1 text-gray-900 bg-white" />

          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/attractions">Attractions</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>

          <button onClick={() => setDarkMode(!darkMode)} className="border px-3 py-2 rounded-lg">
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-50">
          <div className={darkMode ? "fixed right-0 top-0 h-full w-72 bg-gray-900 text-white p-6 shadow-lg" : "fixed right-0 top-0 h-full w-72 bg-white text-gray-900 p-6 shadow-lg"}>
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-bold text-xl">Menu</h2>
              <button onClick={() => setIsOpen(false)} className="text-2xl">×</button>
            </div>

            <div className="flex flex-col gap-5">
              <input type="text" placeholder="Search..." className="border rounded px-3 py-2 text-gray-900 bg-white" />

              <Link onClick={() => setIsOpen(false)} to="/">Home</Link>
              <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
              <Link onClick={() => setIsOpen(false)} to="/attractions">Attractions</Link>
              <Link onClick={() => setIsOpen(false)} to="/articles">Articles</Link>
              <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>

              <button onClick={() => setDarkMode(!darkMode)} className="border px-3 py-2 rounded-lg w-fit">
                {darkMode ? "Light mode" : "Dark mode"}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;