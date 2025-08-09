import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import './styles/Navbar.css'; 
import './styles/Home.css';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Testimonials from './pages/Testimonials';
import Contactus from './pages/Contactus';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
