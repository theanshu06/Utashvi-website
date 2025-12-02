import { Box, Typography, Button } from "@mui/material";

export default function OfficeSupplyHeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: { xs: "calc(100vh - 64px)", sm: "calc(100vh - 72px)" },
        overflow: "hidden",
        backgroundColor: "#000000",
      }}
    >
      {/* Full-size Image */}
      <Box
        component="img"
        src="/image/Organised-Office2.png"
        alt="Office Supply Services"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
          zIndex: 1,
        }}
        onError={(e) => {
          // Fallback if image doesn't exist
          (e.target as HTMLImageElement).src = "/image/Marketing-Build.png";
        }}
      />

      {/* Right Side Overlay Box - Covering exactly half on right */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { xs: "60%", sm: "40%" },
          height: "100%",
          backgroundColor: "rgba(255, 33, 79, 0.85)", // #FF214F with 85% opacity (D9 in hex = 217/255)
          zIndex: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" },
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.2,
              mb: { xs: 2, sm: 3 },
              letterSpacing: "-0.02em",
            }}
          >
            Office Supply Solutions
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "16px", sm: "18px", md: "20px", lg: "22px" },
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.95)",
              lineHeight: 1.5,
              mb: { xs: 3, sm: 4 },
            }}
          >
            Comprehensive electronic and stationary essentials for government and private organizations
          </Typography>
          
          {/* Explore Services Button */}
          <Button
            variant="outlined"
            sx={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "transparent",
              color: "#ffffff",
              border: "2px solid #ffffff",
              fontSize: { xs: "12px", sm: "14px", md: "14px" },
              fontWeight: 600,
              textTransform: "none",
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.2 },
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
            explore services
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

