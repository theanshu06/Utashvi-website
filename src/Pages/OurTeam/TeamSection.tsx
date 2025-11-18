import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

const founders = [
  {
    name: "MR. Utpal Vatsa",
    role: "CHAIRMAN & MD",
    description: "An engineer by qualification and an entrepreneur by passion, Mr. Utpal Vatsa has been serving people and businesses for over a decade through counselling, consulting, and strategic digital solutions. With hands-on experience across government supply, supply chain operations, water treatment, and real estate, he brings deep multi-industry understanding and practical insight. In 2021, he founded Utsavi Marketing with a mission to empower brands in the digital era. Since then, he has helped numerous companies strengthen their digital presence, streamline operations, and expand their market reach. His philosophy is simple: you have the fuel — he helps you refine direction and accelerate business growth. Known for his problem-solving mindset and commitment to innovation, he continues to inspire teams and clients alike with his vision for sustainable, technology-driven business transformation.",
    descriptionMobile: "An engineer turned entrepreneur, Mr. Utpal Vatsa brings over 10 years of experience in counselling, consulting, and digital business solutions. With a strong background across government supply, supply chain, water treatment, and real estate, he carries broad industry expertise. After founding Utsavi Marketing in 2021, he has supported many businesses in enhancing their digital presence and expanding their market reach. Driven by a passion for innovation and practical execution, he focuses on helping brands grow with clarity, strategy, and long-term vision. His belief remains simple: you bring the energy, and he converts it into meaningful business growth.",  
    image: "/images/TeamSection-image.jpg"
  }
  
   ,  
   {
    name: "MR. Anand Kumar",
    role: "CO-FOUNDER & BUSINESS STRATEGIST",
    description: "With a strong academic foundation in business — a BBA followed by an MBA — Mr. Anand Kumar brings structured thinking and strategic clarity to every project he leads. He has over 5 years of hands-on experience in business excellence, client management, and operational planning. Known for his ability to analyse businesses deeply and provide practical, growth-focused insights, he has worked with multiple clients across diverse industries. His early experience with LIC strengthened his understanding of customer behaviour, risk management, and service-driven operations. Over the years, he has helped several brands optimise processes, identify opportunities, and streamline their business direction. His approach is simple: understand the business, solve real problems, and drive sustainable growth with clarity and precision.",
    
    descriptionMobile: "Mr. Anand Kumar, a BBA and MBA graduate, brings over 5 years of experience in business excellence and client strategy. He has worked with diverse clients across different domains, including valuable experience at LIC. Known for his analytical mindset and ability to offer clear, actionable business insights, he helps brands improve operations, discover opportunities, and grow sustainably. His focus is always on understanding the business first and delivering solutions that create long-term impact.",
    
    image: "/image/Anand-image.jpeg"
  }
  ,
  {
    name: "MR. Sumit Kumar",
    role: "VICE PRESIDENT",
    description: "Mr. Sumit Kumar is an accomplished IT Support and Computer Technician with over 5 years of professional expertise in system maintenance, hardware diagnostics, software installation, and network configuration. Throughout his career, he has played a key role in ensuring seamless technical operations for clients and organizations by resolving complex issues with precision and speed. His strong analytical skills, deep understanding of computer systems, and commitment to delivering reliable support make him a trusted technology partner for businesses. With a passion for continuous learning, he stays updated with emerging technologies, cybersecurity practices, and modern infrastructure trends. Dedicated, detail-oriented, and problem-solving by nature, he aims to contribute effectively in dynamic technical environments while consistently enhancing operational efficiency.",
    
    descriptionMobile: "Sumit Kumar is an IT professional with 5+ years of experience in hardware, networking, troubleshooting, and system maintenance. He specializes in resolving issues quickly and keeping systems running smoothly. Passionate about new technologies and cybersecurity, he continues to grow his skills while delivering dependable technical support.",
    
    image: "/images/TeamSection-image.jpg"
  }
  
  
  
];

export default function TeamSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, sm: 6, md: 8, lg: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "#F5F5F7",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2, md: 4 } }}>
        {/* Team Members */}
        {founders.map((founder, index) => {
          // Index 0 (Paresh): image left, text right
          // Index 1 (Manish): image right, text left
          // Index 2 (Nitin): image left, text right
          const isManish = index === 1;
          
          return (
            <Box
              key={index}
              sx={{
                mb: { xs: 6, sm: 8, md: 10 },
                border: { xs: "2px solid rgba(0,0,0,0.1)", sm: "none" },
                borderRadius: { xs: 3, sm: 0 },
                p: { xs: 3, sm: 0 },
                backgroundColor: { xs: "#ffffff", sm: "transparent" },
                boxShadow: { xs: "0 4px 20px rgba(0,0,0,0.08)", sm: "none" },
              }}
            >
              <Grid
                container
                spacing={{ xs: 3, sm: 4, md: 6 }}
                alignItems="stretch"
                sx={{
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                {/* Image */}
                <Grid
                  size={{ xs: 12, sm: 5, md: 5 }}
                  sx={{
                    order: { xs: 1, sm: isManish ? 2 : 1 },
                    display: "flex",
                    alignItems: "stretch",
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isManish ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ width: "100%", display: "flex" }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: { xs: "400px", sm: "100%" },
                        minHeight: { xs: "400px", sm: "500px", md: "600px" },
                        borderRadius: { xs: 3, sm: 4, md: 5 },
                        overflow: "hidden",
                        boxShadow: {
                          xs: "0 8px 24px rgba(0,0,0,0.12)",
                          sm: "0 12px 40px rgba(0,0,0,0.15)",
                        },
                        border: { xs: "3px solid rgba(0,0,0,0.1)", sm: "none" },
                      }}
                    >
                      <Box
                        component="img"
                        src={founder.image}
                        alt={founder.name}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          transition: "transform 0.5s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.src = "https://via.placeholder.com/600x800/7bda57/ffffff?text=" + encodeURIComponent(founder.name);
                        }}
                      />
                      {/* Gradient overlay for better text readability if needed */}
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: "30%",
                          background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)",
                          display: { xs: "none", sm: "block" },
                        }}
                      />
                    </Box>
                  </motion.div>
                </Grid>

                {/* Text Content */}
                <Grid
                  size={{ xs: 12, sm: 7, md: 7 }}
                  sx={{
                    order: { xs: 2, sm: isManish ? 1 : 2 },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    py: { xs: 2, sm: 3, md: 4 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.0, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ 
                      width: "100%", 
                      display: "flex", 
                      flexDirection: "column", 
                      height: "100%",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "12px", sm: "13px", md: "14px" },
                        color: "#1d1d1f",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "1px",
                        mb: { xs: 1, sm: 1.5 },
                      }}
                    >
                      {founder.role}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "42px" },
                        fontWeight: 900,
                        color: "#1d1d1f",
                        mb: { xs: 2, sm: 2.5, md: 3 },
                        lineHeight: 1.2,
                      }}
                    >
                      {founder.name}
                    </Typography>
                    {/* Mobile Description */}
                    <Typography
                      sx={{
                        display: { xs: "block", sm: "none" },
                        fontSize: "15px",
                        color: "#4a4a4a",
                        lineHeight: 1.7,
                      }}
                    >
                      {founder.descriptionMobile}
                    </Typography>
                    
                    {/* Desktop/Tablet Description */}
                    <Typography
                      sx={{
                        display: { xs: "none", sm: "block" },
                        fontSize: { sm: "16px", md: "18px" },
                        color: "#4a4a4a",
                        lineHeight: 1.6,
                      }}
                    >
                      {founder.description}
                    </Typography>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}

