import { Box, Typography, Container } from "@mui/material";

export default function AboutGridSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "#ffffff",
        
        zIndex: 1,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
            gap: { xs: 3, sm: 4, md: 4 },
            alignItems: "stretch",
          }}
        >
          {/* First Grid - Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 3, sm: 4, md: 5 },
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              minHeight: { xs: "auto", md: "400px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "48px", sm: "64px", md: "72px", lg: "80px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1,
                mb: 2,
              }}
            >
              '97
            </Typography>
            <Typography
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "20px", sm: "28px", md: "34px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.3,
              }}
            >
              We Help You Sell More and Sell Better
            </Typography>
          </Box>

          {/* Second Grid - Image */}
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              minHeight: { xs: 300, sm: 400, md: "400px" },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="/image/Marketing-Build.png"
              alt="About Us"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
              onError={(e) => {
                // Fallback if image doesn't exist
                (e.target as HTMLImageElement).src = "/image/Colorful.png";
              }}
            />
          </Box>

          {/* Third Grid - Text */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 3, sm: 4, md: 5 },
              backgroundColor: "#f5f5f5",
              borderRadius: 2,
              minHeight: { xs: "auto", md: "400px" },
            }}
          >
           <Typography
  variant="body1"
  sx={{
    fontFamily: "'DM Sans', 'Poppins', sans-serif",
    fontSize: { xs: "10px", sm: "12px", md: "13px" },
    color: "#666",
    lineHeight: 1.8,
  }}
>
  <span style={{ fontWeight: 800 }}>
    With creativity, technology and everything in between, we love discovering new ways of building consumer connections.
  </span>
  <br /><br />

  We're committed to the cause of making a positive impact in your business. From creating awareness about your products to nurturing prospects and making them your brand advocates, we leverage every tool in a marketer's tool-kit to deliver integrated sales & marketing campaigns.
  <br /><br />

  Since 1997, it's been 28 years of living our dream, of being the marketing custodians for some of the biggest global B2B and B2C brands.
</Typography>

          </Box>
        </Box>
      </Container>
    </Box>
  );
}

