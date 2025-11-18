import { Box, Typography, Container, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function TeamSection() {
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
            gap: 4,
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "16px" },
              fontWeight: 400,
              color: "#ff214f",
              textAlign: "center",
              lineHeight: 1.2,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            B2B MARKETING AGENCY
          </Typography>

          {/* Subheading */}
          <Typography
            variant="h3"
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "38px", lg: "42px" },
              fontWeight: 700,
              color: "#1d1d1f",
              textAlign: "center",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            We have the capacity to handle large projects & the flexibility to provide personalized attention
          </Typography>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              color: "#212529",
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.8,
            }}
          >
            Whether you're a well-established corporation with comprehensive systems in place or a bootstrapped startup aiming to establish your unique position in the market, we're committed to helping you achieve your goals.
          </Typography>

          {/* CTA Button */}
          <Button
            component={RouterLink}
            to="/contact"
            variant="contained"
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              backgroundColor: "#1d1d1f",
              color: "#ffffff",
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 4, sm: 5 },
              py: { xs: 1.5, sm: 2 },
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              "&:hover": {
                backgroundColor: "#000000",
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Get in Touch
          </Button>

          {/* Team Image */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1200px",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
              mt: 2,
            }}
          >
            <Box
              component="img"
              src="/image/OurTeam.png"
              alt="Our Team"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).src = "/image/Marketing-Build.png";
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

