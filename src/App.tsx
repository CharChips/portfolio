



import './App.css'
import Navbar from './comoponents/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Certifications from './pages/certifications';
import FadDetails from './pages/fad-details';
import IsaDetails from './pages/isa-details';
import BootcampDetails from './pages/bootcamp-details';
import InternshipDetails from './pages/internship-details';

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
        <Route path="/experience/isa" element={<IsaDetails />} />
        <Route path="/experience/bootcamp" element={<BootcampDetails />} />
        <Route path="/experience/internship" element={<InternshipDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
