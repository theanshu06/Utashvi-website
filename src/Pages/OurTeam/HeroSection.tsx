import { Box, Container, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function OurTeamHeroSection() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      // Hide arrow when user scrolls down more than 100px
      setShowArrow(scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #F5F5F7 0%, #ffffff 50%, #F5F5F7 100%)',
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: { xs: "22vh", sm: "30vh", md: "35vh" },
      paddingTop: { xs: 1, sm: 2, md: 4 },
      py: { xs: 0, sm: 2, md: 4 },
    }}>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Typography
              sx={{
                fontSize: { xs: "18px", sm: "16px" },
                color: "#1d1d1f",
                fontWeight: { xs: 800, sm: 600 },
                mb: { xs: 2, sm: 1.5 },
                textTransform: "uppercase",
                letterSpacing: { xs: "2px", sm: "1px" },
                position: "relative",
                display: "inline-block",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: { xs: -8, sm: -6 },
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: { xs: "60px", sm: "40px" },
                  height: { xs: "3px", sm: "2px" },
                  background: "linear-gradient(90deg, #1d1d1f, #4a4a4a)",
                  borderRadius: "2px",
                  display: { xs: "block", sm: "none" }
                }
              }}
            >
              Our Team
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "32px", sm: "42px", md: "56px", lg: "64px" },
                fontWeight: 900,
                background: "linear-gradient(135deg, #1d1d1f 0%, #4a4a4a 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                lineHeight: 1.2,
                mb: 2,
                letterSpacing: "-1px",
                display: { xs: "none", sm: "block" }
              }}
            >
              Founders who fuel our future
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <Typography sx={{ 
              fontSize: { xs: "14px", sm: "16px" }, 
              color: "#6b6b6b", 
              maxWidth: 700, 
              mx: "auto", 
              mb: { xs:0, sm: 4 },
              lineHeight: 1.6
            }}>
Meet the leaders behind Utashvi, dedicated to transforming businesses through cutting-edge digital strategies and technology solutions.
            </Typography>
          </motion.div>

          {/* Blinking Down Arrow - Below Text */}
          {showArrow && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: { xs: 2, sm: 2, md: 2 },
                animation: "blink 2s infinite",
                "@keyframes blink": {
                  "0%, 100%": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                  "50%": {
                    opacity: 0.3,
                    transform: "translateY(10px)",
                  },
                },
              }}
            >
              <IconButton
                sx={{
                  color: "#1d1d1f",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                  },
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
                onClick={() => {
                  window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
                }}
              >
                <KeyboardArrowDownIcon sx={{ fontSize: { xs: 32, sm: 40, md: 48 } }} />
              </IconButton>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

