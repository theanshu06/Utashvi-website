// Main Office Supply Page - Import and connect all sections here
import { Box } from '@mui/material';
import OfficeSupplyHeroSection from './sections/OfficeSupplyHeroSection';
import OfficeSupplySection from './sections/OfficeSupplySection';

function OfficeSupply() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: '#ffffff',
      }}
    >
      <OfficeSupplyHeroSection />
      <OfficeSupplySection />
    </Box>
  );
}

export default OfficeSupply;

