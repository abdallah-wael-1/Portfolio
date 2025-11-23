import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
// ICONS
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import ContactMailIcon from "@mui/icons-material/ContactMail";
// LOGO
import logoImage from "../assets/images/my-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const navLinks = [
    { title: "Hero", id: "hero", icon: <HomeIcon /> },
    { title: "Projects", id: "projects", icon: <WorkIcon /> },
    { title: "Skills", id: "skills", icon: <BuildIcon /> },
    { title: "About", id: "about", icon: <InfoIcon /> },
    { title: "Contact", id: "contact", icon: <ContactMailIcon /> },
  ];

  const handleScroll = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      const navbarHeight = 64; 
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", 
      });
    }
    if (open) {
      handleDrawerToggle();
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            onClick={() => handleScroll("hero")} 
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={logoImage}
              alt="Abdullah Logo"
              sx={{
                height: 50,
                width: 50,
                borderRadius: "50%",
                objectFit: "cover",
                mr: 2,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
          </Box>

          {/* Links for desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {navLinks.map((link) => (
              <Button
                key={link.title}
                color="inherit"
                onClick={() => handleScroll(link.id)} 
                startIcon={link.icon}
                sx={{
                  textTransform: "none",
                  fontWeight: "bold",
                  transition: "0.3s",
                  "&:hover": {
                    color: "#4dabf7",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>

          {/* Menu button for mobile */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="right" open={open} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding>
                <ListItemButton
                  onClick={() => handleScroll(link.id)} 
                >
                  <ListItemIcon>{link.icon}</ListItemIcon>
                  <ListItemText primary={link.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
