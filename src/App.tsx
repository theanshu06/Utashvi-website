import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Component/Header';
import StoreLaunchBanner from './Component/StoreLaunchBanner';
import Home from './Pages/Home';
import About from './Pages/About';
import OurTeam from './Pages/OurTeam';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import OfficeSupply from './Pages/OfficeSupply';
import Contact from './Pages/Contact';
import { Box } from '@mui/material';
import Footer from './Component/Footer';

function App() {
  const location = useLocation();

  // Scroll to top on route change, or to hash section if present
  useEffect(() => {
    // Check if there's a hash in the URL
    const hash = window.location.hash;
    if (hash) {
      // Wait for page to load, then scroll to section
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      // No hash, scroll to top
      const timer = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // Fallback for browsers that don't support smooth scroll
        if (window.scrollY > 0) {
          window.scrollTo(0, 0);
        }
        // Ensure document elements are also scrolled
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000000',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <Header />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: 'calc(100vh - 72px)',
          // pb: { xs: 10, sm:2 }, // Add padding bottom to prevent content from being hidden behind banner
          backgroundColor: 'transparent',
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/office-supply" element={<OfficeSupply />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
      <StoreLaunchBanner />
    </Box>
  );
}

export default App;
