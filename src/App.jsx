import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import du Router et Routes
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education'; // Import de la page Education
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <Router> {}
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
};

export default App;
