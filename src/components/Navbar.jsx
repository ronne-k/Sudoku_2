import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">Math But Annoying</div>

      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/games">Selection</NavLink>
        <NavLink to="/games/normal">Hard</NavLink>
        <NavLink to="/games/easy">Easy</NavLink>
        <NavLink to="/rules">Rules</NavLink>
        <NavLink to="/scores">Scoreboard</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
}