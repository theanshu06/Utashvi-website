// Main Home Page - Import and connect all sections here
import { Box } from '@mui/material';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ImageCarousel from './sections/ImageCarousel';
import TestimonialSection from './sections/TestimonialSection';
import TeamSection from './sections/TeamSection';
import StoreComingSoonSection from './sections/StoreComingSoonSection';


function Home() {
  return (
    <Box sx={{ 
      position: "relative", 
      width: "100%", 
      minHeight: "100vh",
      backgroundColor: '#000000',
      marginBottom: 0,
      paddingBottom: 0,
    }}>
      <HeroSection />
      <Box sx={{ position: "relative", width: "100%", minHeight: "100vh", zIndex: 0 }}>
        {/* Spacer to push content below hero */}
      </Box>
      <AboutSection />
      <ImageCarousel />
      <TestimonialSection />
      <TeamSection />
      <StoreComingSoonSection />
      {/* Import and add more sections here */}
      {/* Example: <FeaturesSection /> */}
    </Box>
  );
}

export default Home;

