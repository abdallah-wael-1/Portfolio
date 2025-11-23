import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#0e0e0e",
        color: "#fff",
        py: 4,
        textAlign: "center",
        borderTop: "1px solid #333",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
        © 2025 Eng. Abdullah Wael. All rights reserved.
      </Typography>

      <Box>
        <Link
          href="https://www.linkedin.com/in/abdallah-wael-56a215357"
          target="_blank"
        >
          <IconButton sx={{ color: "#4dabf7", mx: 1 }}>
            <FaLinkedin />
          </IconButton>
        </Link>
        <Link href="https://github.com/abdallah-wael-1" target="_blank">
          <IconButton sx={{ color: "#fff", mx: 1 }}>
            <FaGithub />
          </IconButton>
        </Link>
        <Link href="mailto:abdallahelsadany18@gmail.com">
          <IconButton sx={{ color: "#ff5722", mx: 1 }}>
            <FaEnvelope />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}
