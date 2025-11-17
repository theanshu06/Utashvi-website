import { Box, Container } from "@mui/material";

const carouselImages = [
  "/image/Marketing-Build.png",
  "/image/Experimential-Marketing.png",
  "/image/Lead-Genration.png",
  "/image/Colorful.png",
];

// Duplicate images for seamless loop
const duplicatedImages = [...carouselImages, ...carouselImages];

export default function ImageCarousel() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 1, sm: 2, md:2 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
          }}
        >
          {/* Running Ribbon Container */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "max-content",
              animation: "scroll 20s linear infinite",
              "@keyframes scroll": {
                "0%": {
                  transform: "translateX(0)",
                },
                "100%": {
                  transform: "translateX(-50%)",
                },
              },
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {/* First set of images */}
            {duplicatedImages.map((image, index) => (
              <Box
                key={`first-${index}`}
                component="img"
                src={image}
                alt={`Carousel image ${(index % carouselImages.length) + 1}`}
                sx={{
                  width: { xs: "200px", sm: "250px", md: "300px" },
                  height: { xs: "150px", sm: "180px", md: "220px" },
                  objectFit: "cover",
                  borderRadius: 2,
                  flexShrink: 0,
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

