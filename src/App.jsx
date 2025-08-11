import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <Navigation />

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
        Built with ❤️ by the FOSS@CUSAT community
        <br />
        <br />
        Follow us on{" "}
        <a href="https://github.com/foss-cusat" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </footer>
    </div>
  );
}

export default App;

