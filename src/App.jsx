import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="hero">
        <pre className="ascii-art">
{`███████╗ ██████╗ ███████╗███████╗     ██████╗██╗   ██╗███████╗ █████╗ ████████╗
██╔════╝██╔═══██╗██╔════╝██╔════╝    ██╔════╝██║   ██║██╔════╝██╔══██╗╚══██╔══╝
█████╗  ██║   ██║███████╗███████╗    ██║     ██║   ██║███████╗███████║   ██║   
██╔══╝  ██║   ██║╚════██║╚════██║    ██║     ██║   ██║╚════██║██╔══██║   ██║   
██║     ╚██████╔╝███████║███████║    ╚██████╗╚██████╔╝███████║██║  ██║   ██║   
╚═╝      ╚═════╝ ╚══════╝╚══════╝     ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═╝   `}
        </pre>
        <p>Empowering community driven development.</p>
        <a href="https://chat.whatsapp.com/JXOTeeEHLFYBrIc6hFwtC6">
        <button className="btn">
          Join Us
        </button>
        </a>
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
          <li>🎉 FOSS@CUSAT Inauguration<br />August 14, 2025 | Seminar Hall, NLB<br /><br />
              <small>
                Join us for the official launch of FOSS CUSAT! 
              </small>
          </li>
        </ul>
      </section>

      {/* Socials Section */}
      <section id="socials" className="section">
        <h3>STAY IN THE LOOP</h3>
        <ul className="social-links">
          <li>
            <a
              href="https://instagram.com/foss_cusat"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="icon" /> @foss_cusat
            </a>
          </li>
          <li>
            <a
              href="https://chat.whatsapp.com/your-group-invite"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="icon" /> whatsapp group
            </a>
          </li>
          <li>
            <a
              href="https://github.com/foss-cusat"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon" /> github/foss-cusat
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        Built with ❤️ by the FOSS@CUSAT community
        <br />
      </footer>
    </div>
  );
}

export default App;
