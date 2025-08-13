import React, { useState } from "react";
import "./Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mobile-header">
      <div className="mobile-header-content">
        <h1 className="mobile-logo">FOSS CUSAT</h1>
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>
      )}
    </header>
  );
};

export default Navigation;

