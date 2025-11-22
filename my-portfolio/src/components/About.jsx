// src/components/About.jsx
import React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import SectionTitle from "./Title/SectionTitle.jsx";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMui } from "react-icons/si";
import MyPhoto from "../assets/images/my-photo3.jpg";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        py: 12,
        color: "white",
        textAlign: "center",
      }}
    >
      <SectionTitle text="About Me" />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: { xs: "center", md: "left" },
          bgcolor: "#0e0e0e",
          color: "white",
          p: { xs: 3, md: 6 },
          borderRadius: "50px",
          gap: 6,
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <Avatar
          src={MyPhoto}
          alt="Eng. Abdullah"
          sx={{
            width: { xs: 180, md: 250 },
            height: { xs: 180, md: 250 },
            border: "4px solid #4dabf7",
            boxShadow: "0 0 25px rgba(77,171,247,0.5)",
            margin: { xs: "0 auto", md: "0" },
          }}
        />

        <Box
          sx={{
            maxWidth: { xs: "100%", md: "600px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              color: "#ccc",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Hi! I'm <strong>Eng. Abdullah</strong>, a passionate Front-End
            Developer from Egypt who loves building <strong>modern</strong> and{" "}
            <strong>responsive</strong> web interfaces. I specialize in{" "}
            <strong>React.js</strong>, <strong>HTML</strong>,{" "}
            <strong>CSS</strong>, and <strong>Tailwind CSS</strong>, creating
            smooth, user-friendly experiences. I enjoy learning new
            technologies, improving my skills constantly, and delivering
            high-quality results for real-world projects.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: "#999",
              mb: 3,
              fontWeight: "bold",
            }}
          >
            Key Technologies I Work With:
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 3,
              flexWrap: "wrap",
            }}
          >
            <FaReact size={40} color="#4dabf7" />
            <SiTailwindcss size={40} color="#38bdf8" />
            <SiMui size={40} color="#007fff" />
            <FaHtml5 size={40} color="#ff5722" />
            <FaCss3Alt size={40} color="#2196f3" />
            <FaJs size={40} color="#efd81d" />
            <FaGitAlt size={40} color="#f34f29" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
