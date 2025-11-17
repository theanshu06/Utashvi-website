import { Box, Typography, Container } from "@mui/material";

export default function AboutContentSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#ffffff",
        py: { xs: 6, sm: 8, md: 10 },
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              fontSize: { xs: "14px", sm: "18px", md: "18px", lg: "20px" },
              fontWeight: 400,
              color: "#ff214f",
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Integrated Sales and Marketing Agency
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              fontSize: { xs: "20px", sm: "24px", md: "28px" },
              fontWeight: 700,
              color: "#1d1d1f",
              lineHeight: 1.3,
              mb: 4,
            }}
          >
            We are Good at Marketing and Better at Integrated Marketing
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              color: "#666",
              lineHeight: 1.8,
              maxWidth: "800px",
            }}
          >
            We are a bunch of storytellers, technologists, and relentlessly curious minds. We are creative designers, techno-marketers and almost religious about inbound marketing and inside sales programs.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

