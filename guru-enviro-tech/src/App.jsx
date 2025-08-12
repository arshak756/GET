import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollTop from "./components/scroll/ScrollTop";
import './App.css';
import './styles/Navbar.css'; 
import './styles/Home.css';
import Home from './pages/Home';
import About from './pages/About';
import Featuredsolutions from './pages/Featuredsolutions';
import Research from './pages/Research';
import Testimonials from './pages/Testimonials';
import Contactus from './pages/Contactus';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <ScrollTop />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/featuredsolutions" element={<Featuredsolutions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
