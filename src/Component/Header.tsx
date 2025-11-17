import { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  Typography,
  Container,
  Menu,
  MenuItem,
  Collapse,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import { Link as RouterLink } from "react-router-dom";
import LeadFormModal from "./LeadFormModal"; // ✅ Import the modal

const pages = [
  { name: "Home", path: "/" },
  {
    name: "Company",
    subPages: [
      { name: "Overview", path: "/about", icon: <InfoOutlinedIcon /> },
      { name: "Our Team", path: "/ourteam", icon: <GroupsOutlinedIcon /> },
    ],
  },
  // {
  //   name: "Solutions",
  //   subPages: [
  //     { name: "Homes", icon: <HomeWorkOutlinedIcon />, tab: "home" },
  //     { name: "Commercial", icon: <BusinessOutlinedIcon />, tab: "commercial" },
  //     { name: "Housing Societies", icon: <ApartmentOutlinedIcon />, tab: "housing" },
  //   ],
  // },
  // { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const appBarRef = useRef<HTMLElement>(null);

  // ✅ Modal states
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadTab, setLeadTab] = useState<"home" | "commercial" | "housing">("home");

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      // Get scroll position with multiple fallbacks for cross-browser compatibility
      const scrollY = 
        window.scrollY || 
        window.pageYOffset || 
        document.documentElement.scrollTop || 
        document.body.scrollTop || 
        0;
      
      // Set scrolled state if scroll position is greater than 10px
      const scrolled = scrollY > 10;
      setIsScrolled(scrolled);
      
      // Directly update ALL AppBar elements in the DOM
      const appBarElements = document.querySelectorAll('.MuiAppBar-root');
      appBarElements.forEach((element) => {
        const el = element as HTMLElement;
        el.style.setProperty('background-color', scrolled ? '#000000' : 'transparent', 'important');
        el.style.setProperty('--background-color', scrolled ? '#000000' : 'transparent');
      });
      
      // Also update via ref
      if (appBarRef.current) {
        const element = appBarRef.current as HTMLElement;
        element.style.setProperty('background-color', scrolled ? '#000000' : 'transparent', 'important');
      }
    };

    // Check initial scroll position immediately
    handleScroll();

    // Add scroll event listener - use capture phase to catch it early
    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    
    // Also use a scroll listener without capture
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll, { capture: true });
      document.removeEventListener("scroll", handleScroll, { capture: true });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, name: string) => {
    setAnchorEl(event.currentTarget);
    setActiveMenu(name);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setActiveMenu(null);
  };

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const handleLeadOpen = (tab: "home" | "commercial" | "housing") => {
    setLeadTab(tab);
    setLeadModalOpen(true);
    handleMenuClose();
  };

  return (
    <>
      {/* 🧭 HEADER APPBAR */}
      <AppBar
        ref={appBarRef}
        position="fixed"
        elevation={0}
        className={isScrolled ? "header-scrolled" : "header-transparent"}
        style={{
          backgroundColor: isScrolled ? "#000000" : "transparent",
        }}
        sx={{
          backgroundColor: isScrolled ? "#000000" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
          color: isScrolled ? "#ffffff" : "#1d1d1f",
          fontFamily: "'DM Sans', 'Poppins', sans-serif",
          zIndex: 1400,
          height: { xs: "50px", sm: "60px" },
          display: "flex",
          justifyContent: "center",
          transition: "background-color 0.3s ease, color 0.3s ease, border-bottom 0.3s ease",
          "&.MuiAppBar-root": {
            backgroundColor: isScrolled ? "#000000" : "transparent",
          },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: { xs: "50px", sm: "60px" },
              px: { xs: 2, sm: 3, md: 3 },
            }}
          >
            {/* LOGO */}
            <Box
              component={RouterLink}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                "&:hover": { transform: "scale(1.05)" },
                transition: "transform 0.3s ease",
              }}
            >
              <Box
                component="img"
                src={isScrolled ? "/image/Utashvi2.jpeg" : "/image/Utashvi3.png"}
                alt="Utashvi Logo"
                sx={{ 
                  height: { xs: "40px", sm: "45px" }, 
                  width: "auto", 
                  borderRadius: "8px",
                  transition: "opacity 0.3s ease",
                }}
              />
            </Box>

                {/* DESKTOP MENU */}
                <Box
                  sx={{
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flexGrow: 1,
                    mx: 4,
                    gap: 2,
                  }}
                >
              {pages.map((page) =>
                page.subPages ? (
                  <Box
                    key={page.name}
                    onMouseEnter={(e) => handleMenuOpen(e, page.name)}
                    onMouseLeave={handleMenuClose}
                  >
                    <Button
                      endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
                      sx={{
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "15px",
                        color: isScrolled ? "#ffffff" : "#ffffff",
                        position: "relative",
                        "&:hover": { color: "#ffffff", background: "transparent", opacity: 0.8 },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          width: activeMenu === page.name ? "100%" : "0%",
                          height: "2px",
                          backgroundColor: "#ffffff",
                          transition: "width 0.3s ease",
                        },
                        "&:hover::after": { width: "100%" },
                      }}
                    >
                      {page.name}
                    </Button>

                    {/* Dropdown Menu */}
                    <Menu
                      anchorEl={anchorEl}
                      open={activeMenu === page.name}
                      onClose={handleMenuClose}
                      MenuListProps={{
                        onMouseEnter: () => setActiveMenu(page.name),
                        onMouseLeave: handleMenuClose,
                      }}
                      PaperProps={{
                        sx: {
                          mt: 1,
                          borderRadius: "16px",
                          boxShadow: "0 6px 22px rgba(0,0,0,0.1)",
                          minWidth: 250,
                          border: "1px solid rgba(0,0,0,0.06)",
                          p: 1.5,
                          background: "rgba(255,255,255,0.96)",
                        },
                      }}
                    >
                      {page.subPages.map((subPage) => {
                        const hasTab = "tab" in subPage;
                        const hasPath = "path" in subPage;

                        return (
                          <MenuItem
                            key={subPage.name}
                            component={hasPath ? RouterLink : "div"}
                            to={hasPath ? (subPage as any).path : undefined}
                            onClick={() => {
                              if (hasTab) handleLeadOpen((subPage as any).tab);
                              else handleMenuClose();
                            }}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                              py: 1.3,
                              px: 2,
                              borderRadius: "10px",
                              color: "#1d1d1f",
                              transition: "all 0.25s ease",
                              "&:hover": {
                                backgroundColor: "rgba(29,29,31,0.08)",
                                color: "#1d1d1f",
                                transform: "translateX(3px)",
                              },
                              "& svg": {
                                fontSize: 20,
                                color: "rgba(0,0,0,0.5)",
                                transition: "color 0.3s",
                              },
                              "&:hover svg": { color: "#1d1d1f" },
                            }}
                          >
                            {subPage.icon}
                            <Typography sx={{ fontSize: "14.5px", fontWeight: 500 }}>
                              {subPage.name}
                            </Typography>
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </Box>
                ) : (
                  <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.path}
                    sx={{
                      textTransform: "none",
                      fontWeight: 600,
                      fontSize: "15px",
                      color: isScrolled ? "#ffffff" : "#ffffff",
                      position: "relative",
                      "&:hover": { color: "#ffffff", background: "transparent", opacity: 0.8 },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "-4px",
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: "#ffffff",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": { width: "100%" },
                    }}
                  >
                    {page.name}
                  </Button>
                )
              )}
            </Box>

            {/* CTA BUTTON — only on md and larger */}
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon sx={{ fontSize: 18 }} />}
              component={RouterLink}
              to="/contact#contact-form"
              sx={{
                display: { xs: "none", md: "flex" },
                backgroundColor: "transparent",
                color: "#fff",
                fontWeight: 700,
                textTransform: "none",
                fontSize: "15px",
                borderRadius: "12px",
                px: 3,
                py: 1,
                border: "2px solid",
                borderImage: "linear-gradient(135deg, #ff0080, #ff8c00, #ffd700, #32cd32, #00bfff, #0000ff, #8b00ff) 1",
                boxShadow: "0 6px 18px rgba(255,255,255,0.2)",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 10px 24px rgba(255,255,255,0.3)",
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Get Started
            </Button>

            {/* MOBILE ICON */}
            <IconButton
              onClick={() => setOpenDrawer((prev) => !prev)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: isScrolled ? "#ffffff" : "#1d1d1f",
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.04)",
                borderRadius: "10px",
                p: 1,
              }}
            >
              {openDrawer ? <CloseIcon sx={{ fontSize: 26 }} /> : <MenuIcon sx={{ fontSize: 26 }} />}
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* 📱 MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: {
            width: { xs: "40%", sm: "30%" },
            backgroundColor: "#fff",
            borderLeft: "1px solid rgba(0,0,0,0.08)",
            p: 3,
          },
        }}
      >
        <List>
          {pages.map((page) =>
            page.subPages ? (
              <Box key={page.name}>
                <ListItemButton
                  onClick={() => handleDropdownToggle(page.name)}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: 700,
                    fontSize: "16px",
                    color: "#1d1d1f",
                  }}
                >
                  {page.name}
                  {openDropdown === page.name ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </ListItemButton>

                <Collapse in={openDropdown === page.name} timeout="auto" unmountOnExit>
                  {page.subPages.map((sub) => {
                    const hasTab = "tab" in sub;
                    const hasPath = "path" in sub;
                    return (
                      <ListItemButton
                        key={sub.name}
                        component={hasPath ? RouterLink : "div"}
                        to={hasPath ? (sub as any).path : undefined}
                        onClick={() => {
                          if (hasTab) handleLeadOpen((sub as any).tab);
                          setOpenDrawer(false);
                        }}
                        sx={{
                          pl: 4,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          fontSize: "14.5px",
                          fontWeight: 500,
                          color: "#4a4a4a",
                          borderRadius: "8px",
                          "&:hover": { color: "#1d1d1f" },
                        }}
                      >
                        {sub.icon}
                        {sub.name}
                      </ListItemButton>
                    );
                  })}
                </Collapse>
              </Box>
            ) : (
              <ListItemButton
                key={page.name}
                component={RouterLink}
                to={page.path}
                onClick={() => setOpenDrawer(false)}
                sx={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#1d1d1f",
                  "&:hover": { color: "#7bda57" },
                }}
              >
                {page.name}
              </ListItemButton>
            )
          )}

          <Divider sx={{ my: 2 }} />

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                component={RouterLink}
                to="/contact#contact-form"
                onClick={() => setOpenDrawer(false)}
                sx={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "400px",
                  px: 3,
                  py: 1.5,
                  width: "100%",
                  border: "2px solid",
                  borderImage: "linear-gradient(135deg, #ff0080, #ff8c00, #ffd700, #32cd32, #00bfff, #0000ff, #8b00ff) 1",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Get Started
              </Button>
        </List>
      </Drawer>

      {/* 🧾 Lead Form Modal */}
      <LeadFormModal
        open={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        initialTab={leadTab}
      />
    </>
  );
}
