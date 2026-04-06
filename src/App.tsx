import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@/src/components/Navbar';
import Footer from '@/src/components/Footer';
import Home from '@/src/pages/Home';
import About from '@/src/pages/About';
import ServicesPage from '@/src/pages/Services';
import BranchLocator from '@/src/pages/BranchLocator';
import Contact from '@/src/pages/Contact';
import { AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/branches" element={<BranchLocator />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
