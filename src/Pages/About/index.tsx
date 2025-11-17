// Main About Page - Import and connect all sections here
import { Box } from '@mui/material';
import AboutHeroSection from './sections/AboutHeroSection';
import AboutContentSection from './sections/AboutContentSection';
import AboutGridSection from './sections/AboutGridSection';
import AboutTwoGridSection from './sections/AboutTwoGridSection';

function About() {
  return (
    <Box sx={{ 
      position: "relative",
      width: "100%",
      backgroundColor: '#ffffff',
    }}>
      <AboutHeroSection />
      <AboutContentSection />
      <AboutGridSection />
      <AboutTwoGridSection />
      {/* Import and add more sections here */}
    </Box>
  );
}

export default About;

