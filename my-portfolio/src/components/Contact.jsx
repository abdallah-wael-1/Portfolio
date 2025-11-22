// src/components/Contact.jsx
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  IconButton,
} from "@mui/material";
import SectionTitle from "./Title/SectionTitle.jsx";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address.";
    }
    if (formData.phone && !/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        MySwal.fire({
          title: <p>Thank you, {formData.name}!</p>,
          html: "<b>Your message has been sent successfully.</b>",
          icon: "success",
          confirmButtonText: "Close",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        MySwal.fire("Error", data.error || "Something went wrong", "error");
      }
    } catch (err) {
      console.error("❌ Error sending message:", err); // هيظهر الخطأ في الـ console
      MySwal.fire("Error", err.message || "Server not reachable", "error");
    }
  };

  return (
    <Container component="section" maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <SectionTitle text="Contact Me" />

      <Box
        id="contact"
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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Intro Section */}
        <Box
          textAlign={{ xs: "center", md: "left" }}
          sx={{ mb: { xs: 4, md: 0 }, maxWidth: "450px" }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#4dabf7",
              letterSpacing: "1px",
              mb: 2,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Get in Touch
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#ccc",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              mb: 3,
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Have a question, a project idea, or want to collaborate? I'm always
            open to new opportunities. Send me a message or reach out directly
            on my social profiles.
          </Typography>

          {/* Social Icons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <IconButton
              color="inherit"
              component="a"
              href="mailto:abdallahelsadany18@gmail.com"
              sx={{
                border: "1px solid #4dabf788",
                "&:hover": { backgroundColor: "#4dabf722" },
              }}
            >
              <EmailIcon sx={{ color: "#4dabf7" }} />
            </IconButton>

            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/abdallah-wael-1"
              target="_blank"
              sx={{
                border: "1px solid #4dabf788",
                "&:hover": { backgroundColor: "#4dabf722" },
              }}
            >
              <GitHubIcon sx={{ color: "#4dabf7" }} />
            </IconButton>

            <IconButton
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/abdallah-wael-56a215357"
              target="_blank"
              sx={{
                border: "1px solid #4dabf788",
                "&:hover": { backgroundColor: "#4dabf722" },
              }}
            >
              <LinkedInIcon sx={{ color: "#4dabf7" }} />
            </IconButton>
          </Box>
        </Box>

        {/* Contact Form */}
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            {[
              {
                label: "Your Name",
                name: "name",
                type: "text",
                placeholder: "Your full name",
              },
              {
                label: "Your Email",
                name: "email",
                type: "email",
                placeholder: "your.email@example.com",
              },
              {
                label: "Phone Number",
                name: "phone",
                type: "tel",
                optional: true,
                placeholder: "Optional (e.g., +20123456789)",
              },
              {
                label: "Subject",
                name: "subject",
                type: "text",
                placeholder: "E.g., Project Collaboration",
              },
            ].map((field) => (
              <Grid
                item
                xs={12}
                md={field.name === "subject" ? 12 : 6}
                key={field.name}
              >
                <TextField
                  fullWidth
                  sx={{ maxWidth: "500px" }}
                  label={field.label}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  variant="outlined"
                  value={formData[field.name]}
                  onChange={handleChange}
                  error={!!errors[field.name]}
                  helperText={
                    errors[field.name] || (field.optional ? "Optional" : "")
                  }
                  InputProps={{
                    sx: {
                      color: "#fff",
                      borderRadius: 2,
                      backgroundColor: "#1b1b1b",
                      fontSize: "1.1rem",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#4dabf7",
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#38bdf8",
                      },
                      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#4dabf7",
                      },
                    },
                  }}
                  InputLabelProps={{
                    sx: { color: "#4dabf7", fontSize: "1.1rem" },
                  }}
                />
              </Grid>
            ))}

            {/* Message field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Message"
                name="message"
                placeholder="Write your message…"
                multiline
                rows={6}
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                InputProps={{
                  sx: {
                    color: "#fff",
                    borderRadius: 2,
                    backgroundColor: "#1b1b1b",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1976d2",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#38bdf8",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#1976d2",
                    },
                  },
                }}
                InputLabelProps={{ sx: { color: "#1976d2" } }}
              />
            </Grid>

            {/* Submit button */}
            <Grid item xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-end" },
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{
                    textTransform: "none",
                    fontWeight: "bold",
                    px: 5,
                    py: 1.5,
                    borderRadius: 2,
                    mt: 2,
                    marginTop: 15,
                    background: "#1976d2",
                    transition: "background 0.3s ease",
                    "&:hover": {
                      background: "#1565c0",
                    },
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
