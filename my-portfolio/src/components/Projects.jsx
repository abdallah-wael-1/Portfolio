// src/components/Projects.jsx
import React, { useState } from "react";
import { Box, Typography, Grid, Chip, Button } from "@mui/material";
import { motion } from "framer-motion";
import SectionTitle from "./Title/SectionTitle.jsx";

// IMAGES
import FoodLover from "../assets/images/food-lover.png";
import Kasper from "../assets/images/kasper-project.png";
import Elzero from "../assets/images/elzero-project.png";
import Dashboard from "../assets/images/Dashbord.png";
import Ecommerce from "../assets/images/e-commerce.png";
import Hospital from "../assets/images/hospital-project.png";
import Guess from "../assets/images/guess-word.png";
import Form from "../assets/images/form.png";
import Art from "../assets/images/art-house.png";
import Platform from "../assets/images/platform.png";
import Prayer from "../assets/images/paryer-times.png";
import Todo from "../assets/images/to-do-list.png";

const projectsData = [
  {
    id: 1,
    title: "Art House E-Commerce",
    category: "React",
    image: Art,
    link: "https://shahdahmedmahmoud.github.io/Phase-one-project-iti/",
  },
  {
    id: 2,
    title: "Dynamic Platform ",
    category: "React",
    image: Platform,
    link: "https://lovely-cat-b984cb.netlify.app/",
  },
  {
    id: 3,
    title: "Prayer Times",
    category: "React",
    image: Prayer,
    link: "https://ubiquitous-lamington-d3afa6.netlify.app/",
  },
  {
    id: 4,
    title: "Dynamic To-Do List",
    category: "React",
    image: Todo,
    link: "https://superb-empanada-dffcac.netlify.app/",
  },
  {
    id: 5,
    title: "Advanced Form",
    category: "JavaScript",
    image: Form,
    link: "https://abdallah-wael12.github.io/my-website-5/",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    category: "JavaScript",
    image: Ecommerce,
    link: "https://www.linkedin.com/posts/abdallah-wael-el-saadany-56a215357_webdevelopment-html-css-activity-7369088045955956739-cYMZ",
  },
  {
    id: 7,
    title: "Hospital Website",
    category: "JavaScript",
    image: Hospital,
    link: "https://abdallah-wael-1.github.io/Hospital-Project/",
  },
  {
    id: 8,
    title: "Guess The Word Game",
    category: "JavaScript",
    image: Guess,
    link: "https://abdallah-wael-1.github.io/Guess-The-Word/",
  },
  {
    id: 9,
    title: "Food Lover",
    category: "HTML & CSS",
    image: FoodLover,
    link: "https://abdallah-wael12.github.io/my-web-site-3/",
  },
  {
    id: 10,
    title: "Kasper Website",
    category: "HTML & CSS",
    image: Kasper,
    link: "https://abdallah-wael12.github.io/my-website-2/",
  },
  {
    id: 11,
    title: "Elzero Website",
    category: "HTML & CSS",
    image: Elzero,
    link: "https://abdallah-wael12.github.io/my-web/",
  },
  {
    id: 12,
    title: "Advanced Dashbord",
    category: "HTML & CSS",
    image: Dashboard,
    link: "https://marwan-wael-1.github.io/Dashboard_1/",
  },
];

const categories = ["All", "React", "JavaScript", "HTML & CSS"];

export default function Projects() {
  const [selected, setSelected] = useState("All");

  const filteredProjects =
    selected === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selected);

  return (
    <Box id="projects" sx={{ color: "white", py: 12 }}>
      {/* Section Title */}
      <SectionTitle text="My Projects" />

      {/* Category Filters */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mb: 6,
          flexWrap: "wrap",
        }}
      >
        {categories.map((cat) => (
          <Chip
            key={cat}
            label={cat}
            onClick={() => setSelected(cat)}
            sx={{
              px: 2,
              py: 1,
              fontSize: "1rem",
              cursor: "pointer",
              bgcolor: selected === cat ? "#1976d2" : "#222",
              color: selected === cat ? "black" : "white",
              transition: "0.3s",
              "&:hover": { bgcolor: "#4dabf2", color: "black" },
            }}
          />
        ))}
      </Box>

      {/* Projects Grid */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 4 }, maxWidth: "1200px", margin: "0 auto" }}
      >
        {filteredProjects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                sx={{
                  bgcolor: "#0e0e0e",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 0 20px rgba(0,0,0,0.5)",
                  transition: "0.3s",
                  "&:hover": { transform: "translateY(-8px)" },
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  maxWidth: 400,
                  height: 390,
                }}
              >
                {/* Image */}
                <Box sx={{ width: "100%", height: 220, overflow: "hidden" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>

                {/* Content */}
                <Box
                  sx={{
                    p: 3,
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: "bold", mb: 1, color: "#4dabf7" }}
                    >
                      {project.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#999", mb: 2 }}>
                      Category: {project.category}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    size="small"
                    href={project.link}
                    target="_blank"
                    sx={{
                      backgroundColor: "#1976d2",
                      textTransform: "none",
                      fontWeight: "bold",
                      px: 3,
                      py: 1,
                      borderRadius: "8px",
                      boxShadow: "0 0 10px rgba(77,171,247,0.4)",
                      ":hover": { backgroundColor: "#4dabf7" },
                    }}
                  >
                    Learn More
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
