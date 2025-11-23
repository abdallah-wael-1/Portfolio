import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop({ showAfter = 300 }) {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY || window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercent = docHeight > 0 ? (scrolled / docHeight) * 100 : 0;

      setVisible(scrolled > showAfter);
      setScrollPercent(scrolledPercent);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle properties
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.25 }}
        >
          <Box
            onClick={scrollTop}
            sx={{
              position: "fixed",
              right: { xs: 16, md: 32 },
              bottom: { xs: 16, md: 32 },
              zIndex: 1400,
              width: 64,
              height: 64,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <svg
              width={64}
              height={64}
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#ccc"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="32"
                cy="32"
                r={radius}
                stroke="#1976d2"
                strokeWidth="4"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                transform="rotate(-90 32 32)"
              />
            </svg>

            <IconButton
              size="large"
              color="primary"
              aria-label="scroll to top"
              sx={{
                bgcolor: "background.paper",
                color: "primary.contrastText",
                width: 56,
                height: 56,
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 25px rgba(77,171,247,0.16)",
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </IconButton>
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
