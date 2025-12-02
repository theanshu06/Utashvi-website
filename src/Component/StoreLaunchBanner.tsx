import { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button, Modal, TextField, Snackbar, Alert } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";

export default function StoreLaunchBanner() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Show banner after a short delay and check localStorage
  useEffect(() => {
    // Check if we're in development mode
    const isDev = import.meta.env.DEV || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    const bannerDismissed = localStorage.getItem("storeBannerDismissed");
    
    // Show banner if not dismissed, or always show in development mode for testing
    if (!bannerDismissed || isDev) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setShowBanner(false);
    localStorage.setItem("storeBannerDismissed", "true");
  };

  const handleGetNotified = () => {
    // If not on home page, navigate to home first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        scrollToStoreSection();
      }, 300);
    } else {
      // If on home page, just scroll to section
      scrollToStoreSection();
    }
  };

  const scrollToStoreSection = () => {
    const storeSection = document.getElementById("store-coming-soon");
    if (storeSection) {
      storeSection.scrollIntoView({ behavior: "smooth", block: "start" });
      // Optionally open modal after scrolling
      setTimeout(() => {
        setShowModal(true);
      }, 800);
    } else {
      // If section doesn't exist, just open modal
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail("");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setSnackbarMessage("Please enter a valid email address");
      setSnackbarOpen(true);
      return;
    }

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
    setSnackbarMessage("Email client opened! Please send the email to get notified.");
    setSnackbarOpen(true);
    
    // Close modal and banner
    handleCloseModal();
    handleDismiss();
  };

  if (!showBanner) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "linear-gradient(135deg, #ff214f 0%, #ff6b9d 100%)",
        color: "#ffffff",
        zIndex: 1300,
        py: { xs: 2, sm: 2.5 },
        px: { xs: 2, sm: 3, md: 4 },
        boxShadow: "0 -4px 20px rgba(255, 33, 79, 0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        flexWrap: "wrap",
        animation: "slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
        "@keyframes slideUp": {
          from: {
            transform: "translateY(100%)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1.5, sm: 2 },
          flex: 1,
          minWidth: { xs: "100%", sm: "auto" },
        }}
      >
        <Box
          sx={{
            width: { xs: 40, sm: 48 },
            height: { xs: 40, sm: 48 },
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <StoreIcon sx={{ fontSize: { xs: 20, sm: 24 }, color: "#ffffff" }} />
        </Box>
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: { xs: "14px", sm: "16px", md: "18px" },
              fontWeight: 700,
              mb: 0.5,
              lineHeight: 1.2,
            }}
          >
            🎉 Our Online Store is Launching Soon!
          </Typography>
          <Typography
            sx={{
              fontFamily: "'DM Sans', 'Poppins', sans-serif",
              fontSize: { xs: "12px", sm: "13px", md: "14px" },
              opacity: 0.95,
              lineHeight: 1.4,
            }}
          >
            Be the first to know and get exclusive early-bird offers
          </Typography>
        </Box>
      </Box>

      {/* Right Actions */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { xs: 1, sm: 1.5 },
          flexShrink: 0,
        }}
      >
        <Button
          onClick={handleGetNotified}
          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
          sx={{
            fontFamily: "Montserrat, sans-serif",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "#ffffff",
            fontWeight: 600,
            textTransform: "none",
            fontSize: { xs: "12px", sm: "13px", md: "14px" },
            px: { xs: 2, sm: 2.5 },
            py: { xs: 0.75, sm: 1 },
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
        >
          Get Notified
        </Button>
        <IconButton
          onClick={handleDismiss}
          sx={{
            color: "#ffffff",
            padding: { xs: "6px", sm: "8px" },
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <CloseIcon sx={{ fontSize: { xs: 18, sm: 20 } }} />
          </IconButton>
      </Box>

      {/* Email Modal */}
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="store-notification-modal"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          component="form"
          onSubmit={handleEmailSubmit}
          sx={{
            position: "relative",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            maxWidth: { xs: "100%", sm: "500px" },
            width: "100%",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            outline: "none",
            p: { xs: 3, sm: 4, md: 5 },
          }}
        >
          {/* Close Button */}
          <IconButton
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              top: { xs: 12, sm: 16 },
              right: { xs: 12, sm: 16 },
              color: "#1d1d1f",
              backgroundColor: "#f5f5f5",
              "&:hover": {
                backgroundColor: "#e0e0e0",
                transform: "rotate(90deg)",
              },
              transition: "all 0.3s ease",
              zIndex: 2,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Modal Content */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #ff214f 0%, #ff6b9d 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <StoreIcon sx={{ fontSize: 40, color: "#ffffff" }} />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: { xs: "24px", sm: "28px" },
                fontWeight: 700,
                color: "#1d1d1f",
                mb: 1,
              }}
            >
              Get Notified!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "14px", sm: "16px" },
                color: "#666",
                lineHeight: 1.6,
              }}
            >
              Enter your email address and we'll notify you as soon as our store launches!
            </Typography>
          </Box>

          {/* Email Input */}
          <TextField
            type="email"
            fullWidth
            required
            label="Email Address"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <EmailIcon sx={{ color: "#999", mr: 1, fontSize: 20 }} />
              ),
            }}
            sx={{
              mb: 3,
              "& .MuiOutlinedInput-root": {
                borderRadius: "12px",
                "&:hover fieldset": {
                  borderColor: "#ff214f",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ff214f",
                },
              },
            }}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              fontFamily: "Montserrat, sans-serif",
              backgroundColor: "#ff214f",
              color: "#ffffff",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "16px",
              py: 1.5,
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(255, 33, 79, 0.4)",
              "&:hover": {
                backgroundColor: "#ff3d6b",
                boxShadow: "0 8px 24px rgba(255, 33, 79, 0.5)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Notify Me
          </Button>
        </Box>
      </Modal>

      {/* Success Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{
            backgroundColor: "#ff214f",
            color: "#ffffff",
            "& .MuiAlert-icon": {
              color: "#ffffff",
            },
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

