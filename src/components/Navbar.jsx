import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  function closeMenu() {
    setMenuOpen(false);
  }
  const windowWidth = window.innerWidth;
  return (
    <nav className="navbar">
      {windowWidth < 600 ? (
        <div> 
        <div className="navbar-title">Math But Annoying</div> 

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            
          </button>
        </div>
      ) : (
        <div className="navbar-title">Math But Annoying</div> 
      )}
      
      {windowWidth > 600 ? (
      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/games" onClick={closeMenu}>
          Selection
        </NavLink>
        <NavLink to="/games/normal" onClick={closeMenu}>
          Hard
        </NavLink>
        <NavLink to="/games/easy" onClick={closeMenu}>
          Easy
        </NavLink>
        <NavLink to="/rules" onClick={closeMenu}>
          Rules
        </NavLink>
        <NavLink to="/scores" onClick={closeMenu}>
          Scoreboard
        </NavLink>
        <NavLink to="/login" onClick={closeMenu}>
          Login
        </NavLink>
        <NavLink to="/register" onClick={closeMenu}>
          Register
        </NavLink>
      </div>
      ) : ( 
        <div></div>
      )}
    </nav>
  );
}