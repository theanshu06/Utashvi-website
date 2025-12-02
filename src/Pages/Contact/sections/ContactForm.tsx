import { useState } from "react";
import { Box, Typography, Container, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    organization: "",
    email: "",
    phone: "",
    city: "",
    interestedIn: "",
    agreeMessages: false,
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Construct email body with form data
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Job Title: ${formData.jobTitle}\n` +
      `Organization: ${formData.organization}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `City: ${formData.city}\n` +
      `Interested In: ${formData.interestedIn}\n\n` +
      `Agreed to receive messages: ${formData.agreeMessages ? "Yes" : "No"}\n` +
      `Agreed to Terms: ${formData.agreeTerms ? "Yes" : "No"}`
    );
    
    // Create mailto link
    const mailtoLink = `mailto:theanshu415@gmail.com?subject=${subject}&body=${body}`;
    
    // Redirect to email
    window.location.href = mailtoLink;
  };

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
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 4, sm: 5, md: 6 },
            alignItems: "center",
          }}
        >
          {/* Left Grid - Image */}
          <Box
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              height: "100%",
              minHeight: { xs: 300, sm: 400, md: 500 },
              position: "relative",
              order: { xs: 2, sm: 1 },
            }}
          >
            <Box
              component="img"
              src="/image/contact-page-image4.png"
              alt="Contact"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Box>

          {/* Right Grid - Contact Form */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              order: { xs: 1, sm: 2 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "24px", sm: "28px", md: "32px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.2,
              }}
            >
              Let's talk. How can we help you?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              We help you sell more and sell better. We are in the business of delivering marketing campaigns and maximizing returns from every penny spent.
            </Typography>

            <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
              <Typography
                component={RouterLink}
                to="/about"
                sx={{
                  fontFamily: "'DM Sans', 'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  textDecoration: "none",
                  borderBottom: "2px solid #1d1d1f",
                  "&:hover": {
                    color: "#7bda57",
                    borderBottomColor: "#7bda57",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                About Us
              </Typography>
              <Typography
                component={RouterLink}
                to="/contact/"
                sx={{
                  fontFamily: "'DM Sans', 'Poppins', sans-serif",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  textDecoration: "none",
                  borderBottom: "2px solid #1d1d1f",
                  "&:hover": {
                    color: "#7bda57",
                    borderBottomColor: "#7bda57",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Work with Us
              </Typography>
            </Box>

            {/* Contact Form */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mt: 2,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'DM Sans', 'Poppins', sans-serif",
                  fontSize: { xs: "20px", sm: "24px", md: "28px" },
                  fontWeight: 700,
                  color: "#1d1d1f",
                  mb: 1,
                }}
              >
                Get in touch
              </Typography>

              {/* Row 1: Name and Job Title */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7bda57",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7bda57",
                      },
                    },
                  }}
                />
                <TextField
                  name="jobTitle"
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="Your Job Title"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7bda57",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7bda57",
                      },
                    },
                  }}
                />
              </Box>

              {/* Row 2: Organization and Email */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                <TextField
                  name="organization"
                  label="Organization"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="Your Organization"
                  value={formData.organization}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7bda57",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7bda57",
                      },
                    },
                  }}
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7bda57",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7bda57",
                      },
                    },
                  }}
                />
              </Box>

              {/* Row 3: Mobile phone number and City */}
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2 }}>
                <TextField
                  name="phone"
                  label="Mobile phone number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="+1 234 567 8900"
                  value={formData.phone}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7bda57",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7bda57",
                      },
                    },
                  }}
                />
                <TextField
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  required
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "& fieldset": {
                        borderColor: "#e0e0e0",
                      },
                      "&:hover fieldset": {
                        borderColor: "#7bda57",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#7bda57",
                      },
                    },
                  }}
                />
              </Box>

              {/* Row 4: Interested In */}
              <FormControl
                fullWidth
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    "& fieldset": {
                      borderColor: "#e0e0e0",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7bda57",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7bda57",
                    },
                  },
                }}
              >
                <InputLabel id="interested-in-label">Interested In</InputLabel>
                <Select
                  name="interestedIn"
                  labelId="interested-in-label"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  label="Interested In"
                >
                  <MenuItem value="" disabled>
                    <em>Please Select</em>
                  </MenuItem>
                  <MenuItem value="b2b-marketing">B2B Marketing</MenuItem>
                  <MenuItem value="experiential-marketing">Experiential Marketing</MenuItem>
                  <MenuItem value="lead-generation">Lead Generation</MenuItem>
                  <MenuItem value="digital-marketing">Digital Marketing</MenuItem>
                  <MenuItem value="creative-designing">Creative Designing</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>

              {/* Row 5: Checkboxes and Submit Button */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeMessages"
                      required
                      checked={formData.agreeMessages}
                      onChange={handleCheckboxChange("agreeMessages")}
                      sx={{
                        color: "#7bda57",
                        "&.Mui-checked": {
                          color: "#7bda57",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'DM Sans', 'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      I agree to receive messages / RCS / Email and any updates to mobile number or email.
                    </Typography>
                  }
                />

                {/* <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeTerms"
                      required
                      checked={formData.agreeTerms}
                      onChange={handleCheckboxChange("agreeTerms")}
                      sx={{
                        color: "#7bda57",
                        "&.Mui-checked": {
                          color: "#7bda57",
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "'DM Sans', 'Poppins', sans-serif",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      I agree to Kestone's Terms of Service and Privacy Policy.
                    </Typography>
                  }
                /> */}

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontFamily: "'DM Sans', 'Poppins', sans-serif",
                    backgroundColor: "#1d1d1f",
                    color: "#ffffff",
                    fontSize: "16px",
                    fontWeight: 600,
                    textTransform: "none",
                    py: 1.5,
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
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}