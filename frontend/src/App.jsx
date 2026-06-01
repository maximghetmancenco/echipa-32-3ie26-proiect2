import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Attractions from "./pages/Attractions";
import Articles from "./pages/Articles";
import Contact from "./pages/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <div
        className={
          darkMode
            ? "min-h-screen flex flex-col bg-gray-950 text-white"
            : "min-h-screen flex flex-col bg-white text-gray-900"
        }
      >
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;