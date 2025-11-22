import React from "react";
import { Box, Typography, Button, Container, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useTypewriter } from "./Typing.jsx";
// ICONS
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
// IMAGE
import Myphoto from "../assets/images/my-photo2.jpg";

export default function Hero() {
  const typedText = useTypewriter("Welcome, Eng. Abdullah Wael", 80);
  const typedSub = useTypewriter(
    typedText ? "Front-End Developer (React.js & Tailwind CSS)" : "",
    40
  );

  return (
    <Container maxWidth="lg" id="hero" sx={{ pt: "160px", pb: "60px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          bgcolor: "#0e0e0e",
          color: "white",
          p: { xs: 3, md: 6 },
          borderRadius: "50px",
          boxShadow: "0 0 25px rgba(0,0,0,0.6)",
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 2, lineHeight: 1.2 }}
          >
            {typedText}
            <span
              style={{
                color: "#4dabf7",
                marginLeft: "3px",
                animation: "blink 1s infinite",
              }}
            >
              |
            </span>
          </Typography>

          <Typography variant="h6" sx={{ color: "#bbbbbb", mb: 4 }}>
            {typedSub}
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => {
                const section = document.getElementById("projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: "12px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "#1976d2", 
                transition: "background-color 0.3s ease",
                boxShadow: "0 0 12px rgba(77,171,247,0.5)",
                ":hover": {
                  backgroundColor: "#4dabf7", 
                },
              }}
            >
              View Projects
            </Button>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <IconButton
                component="a"
                href="https://github.com/abdallah-wael-1"
                target="_blank"
                sx={{ color: "#fff", mx: 0.5 }}
              >
                <GitHubIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com/in/abdallah-wael-56a215357"
                target="_blank"
                sx={{ color: "#4dabf7", mx: 0.5 }}
              >
                <LinkedInIcon />
              </IconButton>

              <IconButton
                component="a"
                href="mailto:abdallahelsadany18@gmail.com"
                target="_blank"
                sx={{ color: "#ff5722", mx: 0.5 }}
              >
                <EmailIcon />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.facebook.com/share/17PC2dYvi6/"
                target="_blank"
                sx={{ color: "#1877f2", mx: 0.5 }}
              >
                <FacebookIcon />
              </IconButton>
            </Box>
          </motion.div>
        </Box>

        {/* RIGHT SIDE IMAGE */}
        <Box sx={{ flex: 1, textAlign: "center", mt: { xs: 4, md: 0 } }}>
          <motion.img
            src={Myphoto}
            alt="Eng. Abdullah"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            style={{
              borderRadius: "20px",
              maxWidth: "430px",
              width: "100%",
              boxShadow: "0 0 25px rgba(0,0,0,0.6)",
            }}
          />
        </Box>
      </Box>

      {/* Cursor Animation */}
      <style>
        {`
          @keyframes blink {
            0% { opacity: 1; }
            50% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}
      </style>
    </Container>
  );
}
