import { Link } from "react-router-dom";
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src='/images/LOGO.png' alt="Kasa Logo" />
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Accueil</Link>
        <Link to="/about" className="nav-link">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
