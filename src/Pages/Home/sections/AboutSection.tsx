import { Box, Typography, Container } from "@mui/material";

export default function AboutSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#f5f5f5",
        py: { xs: 6, sm: 8, md: 10 },
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 3,
            backgroundColor: "#f5f5f5",
            borderRadius: 2,
          }}
        >
          {/* Left Box - Full Image */}
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              height: "100%",
              minHeight: { xs: 300, sm: 400, md: 500 },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/image/Girl-Painting4.png"
              alt="About Us"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Right Box - Contains content and 2x2 grid with images */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Top Content Box */}
            <Box
              sx={{
                borderRadius: 2,
                backgroundColor: "#f5f5f5",
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                  fontWeight: 400,
                  color: "#ff214f",
                }}
              >
                From: Business Requirements. To: Memorable Connections
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                  fontWeight: 700,
                  color: "#1d1d1f",
                }}
              >
                We Excel in Marketing & Specialize in Holistic Marketing Solutions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  color: "#666",
                  lineHeight: 1.6,
                }}
              >
                Founded in 2021, we've been serving as a B2B marketing agency for over 4 years. Our team consists of narrative creators, tech innovators, and endlessly inquisitive professionals. We are visual artists, digital marketing specialists, and performance experts who are dedicated to crafting meaningful interactions and achieving measurable outcomes in B2B marketing.
              </Typography>
            </Box>

            {/* Bottom 2x2 Grid */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 4,
              }}
            >

            {/* Box 3 - Bottom Left */}
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                minHeight: 150,
              }}
            >
              <Box
               component="img"
               src="/image/Strength.png" // Replace with your image path
               alt="Content 4"
               sx={{
                 width: "30%",            // 30% of its parent container
                 height: "100%",          // maintain aspect ratio
                 objectFit: "cover",      // keeps image nicely cropped
                 borderRadius: 2,         // optional: gives smooth rounded corners
                 display: "block",
                 ml: 5,
                 mt:2                   // left-aligned (no margin)
               }}
              />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 600, color: "#1d1d1f" }}>Our Strength</Typography>
                <Typography variant="body2" sx={{ fontSize: "12px", color: "#666" }}>
                We provide comprehensive marketing strategies that enable our clients to increase sales and expand their market presence.
                </Typography>
              </Box>
            </Box>

            {/* Box 4 - Bottom Right */}
            <Box
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                backgroundColor: "#f5f5f5",
                display: "flex",
                flexDirection: "column",
                minHeight: 150,
              }}
            >
              <Box
  component="img"
  src="/image/Purpose.png" // Replace with your image path
  alt="Content 4"
  sx={{
    width: "30%",            // 30% of its parent container
    height: "100%",          // maintain aspect ratio
    objectFit: "cover",      // keeps image nicely cropped
    borderRadius: 2,         // optional: gives smooth rounded corners
    display: "block",
    ml: 5,
    mt:2                   // left-aligned (no margin)
  }}
/>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: 600, color: "#1d1d1f" }}>Our Purpose</Typography>
                <Typography variant="body2" sx={{ fontSize: "12px", color: "#666" }}>
                Our enthusiasm for creative design matches our dedication to technical excellence and innovation.
                </Typography>
              </Box>
            </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
