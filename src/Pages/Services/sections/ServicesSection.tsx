import { useState } from "react";
import { Box, Typography, Container, Card, CardContent, Button, Modal, IconButton, Chip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const services = [
  {
    title: "Digital Strategy and Planning",
    description: "We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue.",
    fullDescription: "We leverage our years of experience to create the correct strategy and plans for your business which helps to grow your brand and revenue. Our team of digital strategists works closely with you to understand your business goals, target audience, and market positioning. We develop comprehensive digital roadmaps that align with your business objectives, ensuring every marketing initiative contributes to your growth and success.",
    icon: <AnalyticsOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Creative Strategy and Web Graphics Design",
    description: "Creativity is a way of life at webeesocial. When we create something – a website, an app, emailer, an infographic, a social media post or..",
    fullDescription: "Creativity is a way of life at webeesocial. When we create something – a website, an app, emailer, an infographic, a social media post or any digital asset – we ensure it's not just visually appealing but also strategically designed to communicate your brand message effectively. Our creative team combines artistic vision with marketing expertise to deliver designs that resonate with your audience and drive engagement.",
    icon: <DesignServicesOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Social Media Marketing",
    description: "Social is in our name, literally! Social Media is key to our overall strategy, and we use a variety of social strategies across different channels…",
    fullDescription: "Social is in our name, literally! Social Media is key to our overall strategy, and we use a variety of social strategies across different channels to maximize your brand's online presence. From content creation and community management to paid social advertising and influencer partnerships, we help you build a strong social media presence that engages your audience and drives business results.",
    icon: <ShareOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Videos, GIFs and Content Marketing",
    description: "Video has become the most popular content format. Google algorithm rewards pages with features such as social media integration, social bookmarking and rich videos. Videos…",
    fullDescription: "Video has become the most popular content format. Google algorithm rewards pages with features such as social media integration, social bookmarking and rich videos. Videos capture attention, tell stories, and drive conversions like no other medium. Our content marketing team creates engaging video content, animated GIFs, and comprehensive content strategies that help you connect with your audience and achieve your marketing goals.",
    icon: <VideoLibraryOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Website Design and Development",
    description: "We stay ahead of the technological and UI trends. We focus on breaking down a user journey, translating our design into the most efficient and…",
    fullDescription: "We stay ahead of the technological and UI trends. We focus on breaking down a user journey, translating our design into the most efficient and user-friendly experience possible. Our web development team creates responsive, fast-loading websites that not only look great but also perform exceptionally well. We ensure your website is optimized for conversions, SEO, and provides an exceptional user experience across all devices.",
    icon: <WebOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Search Engine Optimization",
    description: "Our approach to SEO and SEM is simple and transparent. We audit your assets and assess your SEO/SEM goals post which we share timeline expectations…",
    fullDescription: "Our approach to SEO and SEM is simple and transparent. We audit your assets and assess your SEO/SEM goals post which we share timeline expectations and a clear roadmap. Our SEO experts use proven strategies and the latest best practices to improve your search engine rankings, increase organic traffic, and drive qualified leads to your website. We provide regular reports and insights so you always know how your SEO efforts are performing.",
    icon: <SearchOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Email Marketing",
    description: "We can build effective email marketing campaigns and streamline the delivery process so that sending emailers is easy, secure and personalised. Our creative team designs…",
    fullDescription: "We can build effective email marketing campaigns and streamline the delivery process so that sending emailers is easy, secure and personalised. Our creative team designs visually appealing email templates that are optimized for all devices. We help you segment your audience, create personalized content, and automate your email campaigns to nurture leads and drive conversions. Our email marketing strategies are designed to maximize engagement and ROI.",
    icon: <EmailOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Web Analytics",
    description: "Data driven marketing is most effective. Understanding analytics data is key for any business with a digital presence. Your analytics helps you understand how users…",
    fullDescription: "Data driven marketing is most effective. Understanding analytics data is key for any business with a digital presence. Your analytics helps you understand how users interact with your website, which marketing channels drive the most conversions, and where you can optimize for better results. We set up comprehensive analytics tracking, create custom dashboards, and provide regular insights that help you make informed decisions about your digital marketing strategy.",
    icon: <BarChartOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Media Planning and Buying",
    description: "We are connected with a network of media partners who help us offer a fully integrated and accredited communication solution. These media include websites, apps,…",
    fullDescription: "We are connected with a network of media partners who help us offer a fully integrated and accredited communication solution. These media include websites, apps, social platforms, and other digital channels. Our media planning and buying team ensures your advertising budget is spent efficiently across the right channels to reach your target audience. We negotiate the best rates, optimize campaigns in real-time, and provide detailed performance reports.",
    icon: <CampaignOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Shopify Website & Development",
    description: "Looking for a Shopify website development company? You've landed on just the right page!,",
    fullDescription: "Looking for a Shopify website development company? You've landed on just the right page! We specialize in creating beautiful, high-performing Shopify stores that drive sales. Our team has extensive experience with Shopify's platform and can help you set up, customize, and optimize your online store. From theme customization and app integration to payment gateway setup and SEO optimization, we handle everything you need to launch and grow your e-commerce business.",
    icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
];

export default function ServicesSection() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const handleOpenModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedService(null);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundColor: "#ffffff",
          py: { xs:4, sm: 6, md:6 },
          zIndex: 1,
          overflow: "hidden",
        }}
      >
        {/* Decorative Background Elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "400px",
            background: "linear-gradient(135deg, rgba(29,29,31,0.02) 0%, rgba(29,29,31,0.05) 100%)",
            zIndex: 0,
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(29,29,31,0.03) 0%, transparent 70%)",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-30%",
              left: "-5%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(29,29,31,0.02) 0%, transparent 70%)",
            },
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Page Heading */}
          <Box sx={{ textAlign: "center", mb: { xs: 4, sm:4, md: 5 } }}>
            <Chip
              label="What We Offer"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "#1d1d1f",
                backgroundColor: "#f5f5f5",
                px: 1,
                height: "32px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            />
            {/* <Typography
              variant="h2"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "32px", sm: "40px", md: "48px", lg: "56px" },
                fontWeight: 700,
                color: "#1d1d1f",
                lineHeight: 1.2,
                mb: 2,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "60px",
                  height: "4px",
                  backgroundColor: "#1d1d1f",
                  borderRadius: "2px",
                },
              }}
            >
              Our Services
            </Typography> */}
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'DM Sans', 'Poppins', sans-serif",
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
                color: "#666",
                maxWidth: "800px",
                mx: "auto",
                lineHeight: 1.6,
                mt: 3,
              }}
            >
              We offer a comprehensive range of digital marketing and web development services to help your business grow and succeed.
            </Typography>
          </Box>

          {/* Services Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: { xs: 3, sm: 4, md: 4 },
            }}
          >
            {services.map((service, index) => (
              <Card
                key={index}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  backgroundColor: "#ffffff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  position: "relative",
                  "&:hover": {
                    boxShadow: "0 12px 32px rgba(0,0,0,0.16)",
                    transform: "translateY(-8px) scale(1.02)",
                    borderColor: "#1d1d1f",
                    "& .service-icon-wrapper": {
                      transform: "scale(1.1) rotate(5deg)",
                      backgroundColor: "#1d1d1f",
                      color: "#ffffff",
                    },
                    "& .service-number": {
                      opacity: 1,
                      transform: "scale(1)",
                    },
                  },
                }}
              >
                {/* Service Number Badge */}
                <Box
                  className="service-number"
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "#f5f5f5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#1d1d1f",
                    opacity: 0.6,
                    transform: "scale(0.8)",
                    transition: "all 0.3s ease",
                    zIndex: 2,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </Box>

                {/* Decorative Corner Element */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "100px",
                    height: "100px",
                    background: "linear-gradient(135deg, rgba(29,29,31,0.03) 0%, transparent 50%)",
                    borderRadius: "0 0 0 100%",
                    pointerEvents: "none",
                  }}
                />

                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    p: { xs: 3, sm: 3.5, md: 4 },
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {/* Icon Wrapper */}
                  <Box
                    className="service-icon-wrapper"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: "16px",
                      backgroundColor: "#f5f5f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 3,
                      color: "#1d1d1f",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    {service.icon}
                  </Box>

                  {/* Service Title */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'DM Sans', 'Poppins', sans-serif",
                      fontSize: { xs: "20px", sm: "22px", md: "24px" },
                      fontWeight: 700,
                      color: "#1d1d1f",
                      mb: 2,
                      lineHeight: 1.3,
                      minHeight: { xs: "56px", sm: "64px" },
                    }}
                  >
                    {service.title}
                  </Typography>

                  {/* Service Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'DM Sans', 'Poppins', sans-serif",
                      fontSize: { xs: "14px", sm: "15px", md: "16px" },
                      color: "#666",
                      lineHeight: 1.7,
                      mb: 3,
                      flexGrow: 1,
                    }}
                  >
                    {service.description}
                  </Typography>

                  {/* Read More Button */}
                  <Button
                    onClick={() => handleOpenModal(service)}
                    endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
                    sx={{
                      fontFamily: "'DM Sans', 'Poppins', sans-serif",
                      color: "#1d1d1f",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: { xs: "14px", sm: "15px" },
                      alignSelf: "flex-start",
                      px: 2,
                      py: 1,
                      borderRadius: "8px",
                      backgroundColor: "#f5f5f5",
                      "&:hover": {
                        color: "#ffffff",
                        backgroundColor: "#1d1d1f",
                        transform: "translateX(4px)",
                        "& .MuiSvgIcon-root": {
                          transform: "translateX(2px)",
                        },
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Read more
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Service Detail Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            maxWidth: { xs: "100%", sm: "600px", md: "700px" },
            maxHeight: "90vh",
            overflow: "auto",
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
          {selectedService && (
            <Box>
              <Typography
                id="service-modal-title"
                variant="h4"
                sx={{
                  fontFamily: "'DM Sans', 'Poppins', sans-serif",
                  fontSize: { xs: "24px", sm: "28px", md: "32px" },
                  fontWeight: 700,
                  color: "#1d1d1f",
                  mb: 3,
                  pr: { xs: 4, sm: 6 },
                  lineHeight: 1.3,
                }}
              >
                {selectedService.title}
              </Typography>

              <Typography
                id="service-modal-description"
                variant="body1"
                sx={{
                  fontFamily: "'DM Sans', 'Poppins', sans-serif",
                  fontSize: { xs: "15px", sm: "16px", md: "17px" },
                  color: "#666",
                  lineHeight: 1.8,
                  whiteSpace: "pre-line",
                }}
              >
                {selectedService.fullDescription}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
}

