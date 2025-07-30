

import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="app-bar">
    <div className="app-bar-left" style={{ fontSize: '1.5rem', fontWeight: 600, letterSpacing: 0, color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>
        Hello!<br />I am Charchit
      </Link>
    </div>
    <div className="app-bar-right">
      <Link to="/">Home</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/certifications">Certifications</Link>
    </div>
  </nav>
);

export default Navbar;
