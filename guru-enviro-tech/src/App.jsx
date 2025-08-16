import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollTop from "./components/scroll/ScrollTop";
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Featuredsolutions from './pages/Featuredsolutions';
import Research from './pages/Research';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <ScrollTop />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/featuredsolutions" element={<Featuredsolutions />} />
          <Route path="/research" element={<Research />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;