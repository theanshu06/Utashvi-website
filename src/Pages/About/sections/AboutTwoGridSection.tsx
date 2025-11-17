import { Box, Typography, Container } from "@mui/material";

export default function AboutTwoGridSection() {
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
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 0,
            alignItems: "stretch",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          {/* Left Grid - Black Background */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 4, sm: 5, md: 6 },
              backgroundColor: "#000000",
              color: "#ffffff",
              minHeight: { xs: "auto", md: "500px" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                color: "#ffffff",
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Honestly, we aren't talking anything new in this section. The story here, for this part of the page, is a bit weird.
              <br />
              <br />
              We added this section only because we felt it will improve the overall aesthetics of this page! That's how obsessed with UI/UX we are!
              <br />
              <br />
              If you too are sensitive towards designing and appreciate any attempt made towards being creative, then you wouldn't mind this section, isn't it?
            </Typography>
            <Typography
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "18px", sm: "20px", md: "22px" },
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.3,
              }}
            >
              Time to Look at Our Work
            </Typography>
          </Box>

          {/* Right Grid - White Background (blends with main grid) */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 4, sm: 5, md: 6 },
              backgroundColor: "#ffffff",
              minHeight: { xs: "auto", md: "500px" },
              position: "relative",
            }}
          >
            {/* Decorative Double Quotation Marks */}
            <Typography
              component="span"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "80px", sm: "100px", md: "120px" },
                fontWeight: 700,
                color: "#FF214F",
                lineHeight: 0,
                position: "absolute",
                top: { xs: 20, sm: 30, md: 40 },
                left: { xs: 20, sm: 30, md: 40 },
                opacity: 0.4,
                zIndex: 0,
              }}
            >
              "
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "80px", sm: "100px", md: "120px" },
                fontWeight: 700,
                color: "#FF214F",
                lineHeight: 0,
                position: "absolute",
                bottom: { xs: 20, sm: 30, md: 40 },
                right: { xs: 20, sm: 30, md: 40 },
                opacity: 0.4,
                zIndex: 0,
                transform: "rotate(180deg)",
              }}
            >
              "
            </Typography>
            <Typography
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.3,
                mb: 3,
                fontStyle: "italic",
                position: "relative",
                zIndex: 1,
                pl: { xs: 4, sm: 5, md: 6 },
              }}
            >
              Creativity is intelligence having fun
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "14px", sm: "15px", md: "16px" },
                color: "#666",
                lineHeight: 1.8,
              }}
            >
              Golden were those words from Albert Einstein. Over these years we have realized how creativity has changed its definition.
              <br />
              <br />
              Now, it includes the way programming codes are written, the way project management is done, and the way campaigns are configured. Isn't all this morphing marketers into techno-marketers?
              <br />
              <br />
              Thankfully, we have got a bunch of them. Use them.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

