



import './App.css'
import Navbar from './comoponents/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Certifications from './pages/certifications';
import FadDetails from './pages/fad-details';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/experience/fad" element={<FadDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
