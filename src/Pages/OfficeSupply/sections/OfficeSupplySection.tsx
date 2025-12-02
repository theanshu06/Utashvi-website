import { useState } from "react";
import { Box, Typography, Container, Card, CardContent, Button, Modal, IconButton, Chip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import LaptopOutlinedIcon from "@mui/icons-material/LaptopOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

const services = [
  {
    title: "Electronic Equipment Supply",
    description: "We provide comprehensive electronic equipment including computers, laptops, printers, scanners, and other essential office electronics to government and private organizations on contract basis.",
    fullDescription: "We provide comprehensive electronic equipment including computers, laptops, printers, scanners, and other essential office electronics to government and private organizations on contract basis. Our extensive network of suppliers ensures that we can deliver high-quality, reliable electronic equipment that meets your organization's specific requirements. We handle everything from procurement to installation and maintenance, ensuring seamless integration with your existing infrastructure.",
    icon: <ComputerOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Printing Solutions",
    description: "Complete printing solutions including printers, copiers, scanners, and all related consumables. We ensure your office has reliable printing infrastructure to support daily operations.",
    fullDescription: "Complete printing solutions including printers, copiers, scanners, and all related consumables. We ensure your office has reliable printing infrastructure to support daily operations. Our services include regular maintenance, supply of toners, inks, and paper, as well as technical support to minimize downtime. We work with leading brands to provide cost-effective printing solutions that meet your volume and quality requirements.",
    icon: <PrintOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Communication Devices",
    description: "Supply of phones, smartphones, tablets, and communication equipment essential for modern office operations. We provide devices that keep your team connected and productive.",
    fullDescription: "Supply of phones, smartphones, tablets, and communication equipment essential for modern office operations. We provide devices that keep your team connected and productive. Our range includes both standard office phones and modern smartphones for executives and field staff. We also provide tablets and other mobile devices that enable remote work and enhance productivity. All devices come with warranty and support services.",
    icon: <PhoneAndroidOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Computer Hardware & Accessories",
    description: "Complete range of computer hardware including desktops, laptops, monitors, keyboards, mice, and all necessary accessories. We ensure compatibility and optimal performance.",
    fullDescription: "Complete range of computer hardware including desktops, laptops, monitors, keyboards, mice, and all necessary accessories. We ensure compatibility and optimal performance. Our hardware solutions are tailored to your organization's needs, whether you require high-performance workstations for design teams or standard office computers for administrative tasks. We also provide accessories like external hard drives, USB devices, and networking equipment to complete your IT infrastructure.",
    icon: <LaptopOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Stationery Supplies",
    description: "Comprehensive stationery supplies including paper, pens, notebooks, folders, binders, and all office consumables. We maintain inventory to ensure uninterrupted supply.",
    fullDescription: "Comprehensive stationery supplies including paper, pens, notebooks, folders, binders, and all office consumables. We maintain inventory to ensure uninterrupted supply. Our stationery catalog includes everything from basic writing instruments to specialized office supplies. We offer bulk purchasing options and regular delivery schedules to keep your office well-stocked. Our quality assurance ensures that all products meet professional standards and provide value for money.",
    icon: <DescriptionOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Office Furniture & Equipment",
    description: "Supply of office furniture including desks, chairs, filing cabinets, storage solutions, and ergonomic equipment. We help create productive and comfortable workspaces.",
    fullDescription: "Supply of office furniture including desks, chairs, filing cabinets, storage solutions, and ergonomic equipment. We help create productive and comfortable workspaces. Our furniture solutions are designed to maximize space utilization and employee comfort. We offer a wide range of options from budget-friendly solutions to premium ergonomic furniture. Our team can also assist with space planning and furniture layout to optimize your office environment.",
    icon: <BusinessCenterOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Printing & Paper Supplies",
    description: "Complete range of printing papers, specialty papers, envelopes, labels, and all printing-related consumables. We ensure quality and consistency in all printing materials.",
    fullDescription: "Complete range of printing papers, specialty papers, envelopes, labels, and all printing-related consumables. We ensure quality and consistency in all printing materials. Our paper supplies include standard office paper, photo paper, cardstock, and specialty papers for various applications. We also provide envelopes, labels, and other printing accessories. Our bulk purchasing power allows us to offer competitive pricing while maintaining high quality standards.",
    icon: <LocalPrintshopOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Office Supplies & Consumables",
    description: "Regular supply of office consumables including toners, cartridges, batteries, cleaning supplies, and other essential items. We maintain stock levels to prevent shortages.",
    fullDescription: "Regular supply of office consumables including toners, cartridges, batteries, cleaning supplies, and other essential items. We maintain stock levels to prevent shortages. Our consumables management service ensures that your office never runs out of critical supplies. We monitor usage patterns and automatically replenish stock based on your consumption rates. This proactive approach minimizes downtime and ensures smooth office operations.",
    icon: <InventoryOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
  {
    title: "Maintenance & Support Services",
    description: "Comprehensive maintenance and support services for all supplied equipment. We provide technical support, repairs, and regular maintenance to ensure optimal performance.",
    fullDescription: "Comprehensive maintenance and support services for all supplied equipment. We provide technical support, repairs, and regular maintenance to ensure optimal performance. Our support team is available to address any issues with your equipment promptly. We offer both on-site and remote support services, ensuring minimal disruption to your operations. Our maintenance contracts include regular inspections, preventive maintenance, and priority support to keep your office equipment running smoothly.",
    icon: <BuildOutlinedIcon sx={{ fontSize: 40 }} />,
    color: "#1d1d1f",
  },
];

export default function OfficeSupplySection() {
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
              label="Our Supply Services"
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
              We provide comprehensive electronic and stationary essentials to government and private organizations on contract basis. Our reliable supply chain ensures uninterrupted operations for your business.
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

