import React from "react";
import { motion } from "framer-motion";
import myLogo from "../assets/images/my-logo.png"; // ضع اللوجو هنا

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(255,255,255,0.05)",
        backdropFilter: "blur(8px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 9999,
      }}
    >
      <div style={{ position: "relative", width: 150, height: 150 }}>
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            border: "3px solid transparent",
            borderTopColor: "#4dabf7",
            borderRightColor: "#4dabf7",
          }}
        />

        {/* Inner rotating ring (reverse direction) */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            right: 15,
            bottom: 15,
            borderRadius: "50%",
            border: "3px solid transparent",
            borderBottomColor: "#38bdf8",
            borderLeftColor: "#38bdf8",
          }}
        />

        {/* Logo */}
        <motion.img
          src={myLogo}
          alt="Logo"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "90px",
            height: "90px",
            borderRadius: "50%",
            objectFit: "cover",
            position: "absolute",
            top: "20%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 15px rgba(77,171,247,0.5)",
          }}
        />
      </div>

      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          marginTop: 20,
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#4dabf7",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Abdallah Wael
      </motion.h2>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          fontSize: "1.8rem",
          color: "#fff",
          fontFamily: "Poppins, sans-serif",
          translateY: "-50px",
        }}
      >
        Front-End Developer
      </motion.p>
    </motion.div>
  );
}
