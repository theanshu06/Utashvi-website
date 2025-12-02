import { useState } from "react";
import { Box, Typography, Container, TextField, Button, InputAdornment, Snackbar, Alert } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import StoreIcon from "@mui/icons-material/Store";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { keyframes } from "@mui/system";

// Animation for pulsing effect
const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

// Animation for floating effect
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export default function StoreComingSoonSection() {
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      return;
    }

    setIsSubmitting(true);
    
    // Construct email body similar to contact form
    const subject = encodeURIComponent("Store Launch Notification Request");
    const body = encodeURIComponent(
      `Hello,\n\n` +
      `I would like to be notified when your online store launches.\n\n` +
      `Email: ${email}\n\n` +
      `Please add me to your notification list for the store launch.\n\n` +
      `Thank you!`
    );
    
    // Create mailto link (same as contact form)
    const mailtoLink = `mailto:theanshu415@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      setIsSubmitting(false);
      setSnackbarOpen(true);
      setEmail("");
    }, 500);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Box
        id="store-coming-soon"
        sx={{
          position: "relative",
          width: "100%",
          background: "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)",
          pt: { xs: 8, sm: 10, md: 12 },
          pb: { xs: 6, sm: 8, md: 10 },
          zIndex: 1,
          overflow: "hidden",
          scrollMarginTop: { xs: "80px", sm: "100px" },
          marginBottom: 0,
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: "-50%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 33, 79, 0.15) 0%, transparent 70%)",
            animation: `${pulse} 4s ease-in-out infinite`,
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "-30%",
            left: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 33, 79, 0.1) 0%, transparent 70%)",
            animation: `${pulse} 5s ease-in-out infinite`,
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: 4,
            }}
          >
            {/* Icon with animation */}
            <Box
              sx={{
                width: { xs: 80, sm: 100, md: 120 },
                height: { xs: 80, sm: 100, md: 120 },
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff214f 0%, #ff6b9d 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
                animation: `${float} 3s ease-in-out infinite`,
                boxShadow: "0 10px 40px rgba(255, 33, 79, 0.3)",
              }}
            >
              <StoreIcon
                sx={{
                  fontSize: { xs: 40, sm: 50, md: 60 },
                  color: "#ffffff",
                }}
              />
            </Box>

            {/* Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1,
                px: 3,
                py: 1,
                borderRadius: "50px",
                backgroundColor: "rgba(255, 33, 79, 0.2)",
                border: "1px solid rgba(255, 33, 79, 0.3)",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "#ff214f",
                  animation: `${pulse} 2s ease-in-out infinite`,
                }}
              />
              <Typography
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: { xs: "12px", sm: "14px" },
                  fontWeight: 600,
                  color: "#ff214f",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                Coming Soon
              </Typography>
            </Box>

            {/* Main Heading */}
            <Typography
              component="h2"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "32px", sm: "48px", md: "64px", lg: "72px" },
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                maxWidth: "900px",
                mb: 2,
              }}
            >
              Our Online Store is
              <Box
                component="span"
                sx={{
                  display: "block",
                  background: "linear-gradient(135deg, #ff214f 0%, #ff6b9d 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Launching Soon!
              </Box>
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "700px",
                lineHeight: 1.6,
                mb: 2,
              }}
            >
              Get ready for an exclusive shopping experience! We're building something amazing for you. Be the first to know when we launch and get special early-bird offers.
            </Typography>

            {/* Additional Info */}
            <Typography
              variant="body2"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "14px", sm: "16px" },
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Our online store will feature a wide selection of products, fast delivery, competitive prices, and exclusive deals for early customers. Stay tuned for the launch!
            </Typography>

            {/* Features Icons */}
            <Box
              sx={{
                display: "flex",
                gap: { xs: 3, sm: 4, md: 6 },
                mb: 5,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {[
                { icon: <ShoppingBagIcon />, text: "Wide Selection" },
                { icon: <LocalShippingIcon />, text: "Fast Delivery" },
                { icon: <TrendingUpIcon />, text: "Best Prices" },
              ].map((feature, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    color: "rgba(255, 255, 255, 0.7)",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: { xs: 32, sm: 40, md: 48 },
                      animation: `${float} ${3 + index}s ease-in-out infinite`,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: "'DM Sans', 'Poppins', sans-serif",
                      fontSize: { xs: "12px", sm: "14px" },
                      fontWeight: 500,
                    }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Email Signup Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: "100%",
                maxWidth: "600px",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <TextField
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "rgba(255, 255, 255, 0.5)" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    borderRadius: "50px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    },
                    "&.Mui-focused": {
                      backgroundColor: "rgba(255, 255, 255, 0.15)",
                      border: "1px solid #ff214f",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#ffffff",
                    "&::placeholder": {
                      color: "rgba(255, 255, 255, 0.5)",
                      opacity: 1,
                    },
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting || !email}
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  backgroundColor: "#ff214f",
                  color: "#ffffff",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: { xs: "14px", sm: "16px" },
                  px: { xs: 4, sm: 3 },
                  py: { xs: 1.5, sm: 1.75 },
                  borderRadius: "50px",
                  minWidth: { xs: "100%", sm: "180px" },
                  boxShadow: "0 6px 20px rgba(255, 33, 79, 0.4)",
                  "&:hover": {
                    backgroundColor: "#ff3d6b",
                    boxShadow: "0 8px 24px rgba(255, 33, 79, 0.5)",
                    transform: "translateY(-2px)",
                  },
                  "&:disabled": {
                    backgroundColor: "rgba(255, 33, 79, 0.5)",
                    color: "rgba(255, 255, 255, 0.5)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </Button>
            </Box>

            {/* Additional Text */}
            <Typography
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "12px", sm: "14px" },
                color: "rgba(255, 255, 255, 0.6)",
                mt: 1,
              }}
            >
              We'll send you an email as soon as we launch. No spam, promise!
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{
            backgroundColor: "#ff214f",
            color: "#ffffff",
            "& .MuiAlert-icon": {
              color: "#ffffff",
            },
          }}
        >
          Email client opened! Please send the email to get notified.
        </Alert>
      </Snackbar>
    </>
  );
}

