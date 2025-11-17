import { Box } from "@mui/material";
import HeroSection from "./HeroSection.tsx";
import TeamSection from "./TeamSection.tsx";
// import ContactSidebar from "../../components/ContactSidebar.tsx";

export default function OurTeam() {
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        
        <Box sx={{ paddingTop: { xs: "65px", sm: "70px" } }}>
          <HeroSection />
          <TeamSection />
        </Box>
       
      </Box>
    </>
  );
}

