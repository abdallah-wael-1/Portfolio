import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "./Title/SectionTitle.jsx";

// ICONS
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMui } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const iconSize = 45;

const skills = [
  { name: "React.js", icon: <FaReact size={iconSize} color="#4dabf7" /> },
  {
    name: "JavaScript",
    icon: <SiJavascript size={iconSize} color="#efd81d" />,
  },
  { name: "HTML", icon: <FaHtml5 size={iconSize} color="#ff5722" /> },
  { name: "CSS", icon: <FaCss3Alt size={iconSize} color="#2196f3" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={iconSize} color="#38bdf8" />,
  },
  { name: "Material UI", icon: <SiMui size={iconSize} color="#007fff" /> },
  { name: "Bootstrap", icon: <FaBootstrap size={iconSize} color="#7952b3" /> },
  { name: "Git", icon: <FaGitAlt size={iconSize} color="#f34f29" /> },
  { name: "GitHub", icon: <FaGithub size={iconSize} color="white" /> },
  { name: "VS Code", icon: <VscCode size={iconSize} color="#0078d7" /> },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ color: "white", py: 12 }}>
      <SectionTitle text="My Skills" />
      <Typography
        variant="h5"
        color="#fff"
        textAlign="center"
        sx={{
          mb: 6,
          textDecoration: "underline",
          textDecorationColor: "#1976d2",
          textUnderlineOffset: "7px", 
          textDecorationThickness: "2px",
        }}
      >
        Technologies & tools I work with:
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "900px", margin: "0 auto" }}
      >
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "18px",
                  padding: "25px",
                  height: "160px",
                  width: "140px",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "0.3s",
                  boxShadow: "0 0 20px rgba(0,0,0,0.4)",
                  "&:hover": {
                    transform: "translateY(-8px) rotate(2deg)",
                    boxShadow: "0 0 25px rgba(77,171,247,0.6)",
                  },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{ marginBottom: "10px" }}
                >
                  {skill.icon}
                </motion.div>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#4dabf7" }}
                >
                  {skill.name}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
