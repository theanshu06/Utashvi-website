import { Box, Typography, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function TestimonialSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        backgroundColor: "black",
        // py: { xs: 6, sm: 8, md: 10 },
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
          gap: 0,
          alignItems: "stretch",
          minHeight: { xs: "auto", sm: "500px", md: "600px" },
        }}
      >
        {/* Left Grid - Image - Extends to screen edge */}
        <Box
          sx={{
            borderRadius: 0,
            overflow: "hidden",
            height: "100%",
            minHeight: { xs: 300, sm: "100%" },
            position: "relative",
            order: { xs: 2, sm: 1 },
          }}
        >
            <Box
              component="img"
              src="/image/Marketing-Build.png"
              alt="Utashvi Marketing Agency - Client Testimonials and Success Stories"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Centered Overlay Box */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#FF214F",
                px: { xs: 3, sm: 4, md: 5 },
                py: { xs: 2, sm: 3, md: 4 },
                borderRadius: 2,
                textAlign: "center",
                maxWidth: { xs: "90%", sm: "80%", md: "70%" },
                zIndex: 2,
              }}
            >
              {/* Double Quotes Above - Half on box, half on image */}
              <Typography
                component="span"
                sx={{
                  position: "absolute",
                  top: { xs: "-20px", sm: "-30px", md: "-20px", lg: "-45px" },
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontFamily: "'DM Sans', 'Poppins', sans-serif",
                  fontSize: { xs: "60px", sm: "80px", md: "100px", lg: "120px" },
                  fontWeight: 700,
                  color: "#FF214F",
                  lineHeight: 0.5,
                  opacity: 0.9,
                  zIndex: 3,
                }}
              >
                "
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'DM Sans', 'Poppins', sans-serif",
                  fontSize: { xs: "16px", sm: "20px", md: "24px", lg: "28px" },
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: 1.3,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Exceptional B2B Marketing Partner. Seamless Execution Every Time.
              </Typography>
            </Box>
          </Box>

          {/* Right Grid - Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              backgroundColor: "black",
              order: { xs: 1, sm: 2 },
              p: { xs: 3, sm: 4, md: 5, lg: 6 },
              justifyContent: "center",
            }}
          >


<Typography
              variant="h3"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: 700,
                color: "#6f6f6f",
                lineHeight: 1.5,
              }}
            >
              Our Clientele
            </Typography>



            {/* Main Heading */}
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "28px", sm: "32px", md: "38px", lg: "42px" },
                fontWeight: 700,
                color: "#D6d5d5",
                lineHeight: 1.2,
              }}
            >
              Evidence of Our Professional Excellence
            </Typography>

            {/* Subheading */}
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "18px", sm: "20px", md: "24px" },
                fontWeight: 600,
                color: "#6f6f6f",
                lineHeight: 1.5,
              }}
            >
              We are honored that leading international corporations choose us to manage their marketing initiatives
            </Typography>

            {/* Description Text */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                color: "#6f6f6f",
                lineHeight: 1.8,
              }}
            >
              Educational technology platform promotions, pharmaceutical industry virtual conferences, consumer goods audience development, manufacturing sector sales enablement programs, fast-moving consumer goods brand revitalization; we've created countless success narratives throughout our 27-year journey, spanning multiple regions, that continue to motivate our team.
            </Typography>

            {/* CTA Button */}
            <Button
              component={RouterLink}
              to="/projects"
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
                mt: 1,
                alignSelf: { xs: "center", sm: "flex-start" },
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                "&:hover": {
                  backgroundColor: "#000000",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              View Our Portfolio
            </Button>
          </Box>
        </Box>
    </Box>
  );
}

