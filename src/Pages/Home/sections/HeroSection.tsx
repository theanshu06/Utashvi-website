import { useState } from "react";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Easy to modify: Add or change slides here (matching Kestone Global style)
const slides = [
  {
    smallHeading: "This Is What We Stand For",
    mainHeading: "Transforming B2B Potential Into Real Growth",
    buttonText: "View Our Portfolio",
    buttonLink: "/",
    backgroundImage: "/image/Marketing-Build.png",
  },
  {
    smallHeading: "Ideas That Connect. Moments That Matter.",
    mainHeading: "Event Experiences That Inspire",
    buttonText: "See Our Work",
    buttonLink: "/",
    backgroundImage: "/image/Experimential-Marketing.png",
  },
  {
    smallHeading: "Engage Better. Convert Faster.",
    mainHeading: "Performance-Driven Lead Acquisition",
    buttonText: "Discover More",
    buttonLink: "/",
    backgroundImage: "/image/Lead-Genration.png",
  },
  {
    smallHeading: "Create Stories. Build Influence.",
    mainHeading: "Strategic Content That Drives Visibility",
    buttonText: "Explore Projects",
    buttonLink: "/",
    backgroundImage: "/image/Colorful.png",
  },
];


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        zIndex: 1,
        backgroundColor: "#000000", // Prevent white flash
      }}
    >
      {/* Slides Container */}
      {slides.map((slide, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url('${slide.backgroundImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#000000", // Fallback background
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: index === currentSlide ? 1 : 0,
            visibility: index === currentSlide ? "visible" : "hidden",
            transform: "translateX(0)",
            transition: "opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.6s",
            zIndex: index === currentSlide ? 2 : 1,
            pointerEvents: index === currentSlide ? "auto" : "none",
            // Add overlay for better text readability
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1,
            },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              px: 4,
            }}
          >
            {/* Small Heading - matching Kestone style */}
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.9)",
                mb: { xs: 1, sm: 1.5 },
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontStyle: "italic",
              }}
            >
              {slide.smallHeading}
            </Typography>

            {/* Main Heading - large and bold */}
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "42px", sm: "60px", md: "78px", lg: "96px" },
                fontWeight: 700,
                color: "#ffffff",
                mb: { xs: 3, sm: 4, md: 5 },
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              {slide.mainHeading}
            </Typography>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center", alignItems: "center" }}>
              <Button
                component={RouterLink}
                to={slide.buttonLink}
                
                variant="outlined"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  fontSize: { xs: "10px", sm: "12px", md: "12px" },
                  fontWeight: 600,
                  textTransform: "none",
                  px: { xs: 2.5, sm: 3 },
                  py: { xs: 0.75, sm: 0.9 },
                  borderRadius: "4px",
                  minWidth: "auto",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "2px solid #ffffff",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Explore
              </Button>
              <Button
                component={RouterLink}
                to={slide.buttonLink}
                variant="outlined"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "2px solid #ffffff",
                  fontSize: { xs: "10px", sm: "12px", md: "12px" },
                  fontWeight: 600,
                  textTransform: "none",
                  px: { xs: 2.5, sm: 3 },
                  py: { xs: 0.75, sm: 0.9 },
                  borderRadius: "4px",
                  minWidth: "auto",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    border: "2px solid #ffffff",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Our Work
              </Button>
            </Box>
          </Container>
        </Box>
      ))}

      {/* Navigation Arrows - matching Kestone style */}
      <IconButton
        onClick={handlePrevious}
        sx={{
          position: "absolute",
          left: { xs: 3, sm: 4, md: 6, lg: 8 },
          top: "50%",
          transform: "translateY(-50%)",
          // backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "#ffffff",
          zIndex: 10,
          width: { xs: 50, sm: 60, md: 70 },
          height: { xs: 50, sm: 60, md: 70 },
          "&:hover": {
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          transition: "all 0.3s ease",
        }}
        aria-label="Previous slide"
      >
        <ArrowBackIosIcon sx={{ fontSize: { xs: 28, sm: 32, md: 40 } }} />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: { xs: 3, sm: 4, md: 6, lg: 8 },
          top: "50%",
          transform: "translateY(-50%)",
          // backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "#ffffff",
          zIndex: 10,
          width: { xs: 50, sm: 60, md: 70 },
          height: { xs: 50, sm: 60, md: 70 },
          "&:hover": {
            // backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          transition: "all 0.3s ease",
        }}
        aria-label="Next slide"
      >
        <ArrowForwardIosIcon sx={{ fontSize: { xs: 28, sm: 32, md: 40 } ,fontWeight: 400 }} />
      </IconButton>

      {/* Slide Indicators - matching Kestone style */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 30, sm: 40, md: 50 },
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1.5,
          zIndex: 10,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentSlide(index)}
            sx={{
              width: { xs: 10, sm: 12 },
              height: { xs: 10, sm: 12 },
              borderRadius: "50%",
              backgroundColor: index === currentSlide ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              border: index === currentSlide ? "2px solid #ffffff" : "2px solid transparent",
              "&:hover": {
                backgroundColor: "#ffffff",
                transform: "scale(1.2)",
              },
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </Box>
    </Box>
  );
}
