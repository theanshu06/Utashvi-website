// Main Contact Page - Import and connect all sections here
import { Box } from '@mui/material';
import ContactHeroSection from './sections/ContactHeroSection';
import ContactSection from './sections/ContactForm';

function Contact() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: '#ffffff',
      }}
    >
      <ContactHeroSection />
      <ContactSection />
    </Box>
  );
}

export default Contact;

