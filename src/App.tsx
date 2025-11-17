import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Component/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import OurTeam from './Pages/OurTeam';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import { Box } from '@mui/material';
import Footer from './Component/Footer';

function App() {
  const location = useLocation();

  // Smooth scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourteam" element={<OurTeam />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
