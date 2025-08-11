import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1 className="logo">FOSS CUSAT</h1>
        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="mobile-menu">
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#events" onClick={toggleMenu}>Events</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#join" onClick={toggleMenu}>Join Us</a>
        </nav>
      )}

      {/* Hero Section */}
      <section className="hero">
        <h2>FOSS CUSAT</h2>
        <p>Empowering community driven development.</p>
        <button className="btn" onClick={() => alert("Join form coming soon!")}>
          Join Us
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h3>About Us</h3>
        <p>
          We are a community at School of Engineering, CUSAT promoting Free & Open Source Software
          through workshops, hackathons, and collaborative projects.
        </p>
      </section>

      {/* Events Section */}
      <section id="events" className="section">
        <h3>Upcoming Events</h3>
        <ul>
          <li>🛠 Hackathon – March 10</li>
          <li>💻 Git Workshop – March 20</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h3>Our Projects</h3>
        <ul>
          <li>🌱 Sustainable Tech Tracker</li>
          <li>📚 Open Learning Platform</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        Built with ❤️ by the FOSS@CUSAT community <br></br><br></br> Follow us on{" "}
        <a href="https://github.com/foss-cusat" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

