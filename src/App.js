import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about/me" element={<AboutMe />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
  );
}

export default App;
