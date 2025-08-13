import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>

        {/* Menu główne */}
        <nav className="navbar-menu">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/" className="navbar-link">About</Link>
          <Link to="/" className="navbar-link">Services</Link>
          <Link to="/" className="navbar-link">Contact</Link>
        </nav>

        {/* Ikony / Akcje */}
        <div className="navbar-icons">
          <Link to="/" className="navbar-link">XXXX</Link>
          <Link to="/" className="navbar-link">XXXX</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
