

import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => (
  <nav className="app-bar">
    <div className="app-bar-left"><Link to="/">Name</Link></div>
    <div className="app-bar-right">
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/certifications">Certifications</Link>
    </div>
  </nav>
);

export default Navbar;
