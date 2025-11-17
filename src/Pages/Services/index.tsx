// Main Services Page - Import and connect all sections here
import { Box } from '@mui/material';
import ServicesHeroSection from './sections/ServicesHeroSection';
import ServicesSection from './sections/ServicesSection';

function Services() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: '#ffffff',
      }}
    >
      <ServicesHeroSection />
      <ServicesSection />
    </Box>
  );
}

export default Services;

