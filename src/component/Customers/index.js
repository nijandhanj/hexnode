import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Justin from "../../assets/justin-modrak.webp";
import Dalibor from "../../assets/dalibor-kruljac.webp";
import Chris from "../../assets/chris-robinson.webp";

const testimonials = [
  {
    name: "Justin Modrak",
    company: "Technology Coordinator",
    quote: "Hexnode is of great value. Works great with Android and iOS!",
    image: Justin,
  },
  {
    name: "Dalibor Kruljac",
    company: "KAMELEYA LTD",
    quote:
      "Most complete MDM solution I found, and I tested many of them, including major names.",
    image: Dalibor,
  },
  {
    name: "Chris Robinson",
    company: "Executive Account Manager, NCS",
    quote: "It seemed to be in-line with everything we were looking at.",
    image: Chris,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 50000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <Box 
    id="customers" 

     sx={{ position: "relative", width: "100%", maxWidth: 960, mx: "auto", overflow: "hidden" }}>
      <Typography sx={{ pb: 5, fontSize: { xs: "32px", md: "40px" }, fontWeight: "700", textAlign: "center" }}>
        What our customers say
      </Typography>
      <Box sx={{ display: "flex", transition: "transform 0.5s ease-in-out", transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              flex: "0 0 100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              borderRadius: 3,
              boxShadow: 3,
              alignItems: "center",
              p: { xs: 0, md: 0 },
            }}
          >
            <Box
              sx={{
                flex: { md: "47%" },
                maxWidth: { xs: "100%", md: 320 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                pb: { xs: 2, md: 0 },
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "8px",
                }}
              />
            </Box>
            <CardContent
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                bgcolor: "#f7f7f7",
                textAlign: { xs: "center", md: "left" },
                p: { xs: 3, md: 0 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  px: { xs: 2, md: 4 },
                  mt: { xs: 2, md: 4 },
                  fontWeight: "700",
                  mb: 2,
                  fontSize: { xs: "18px", md: "24px" },
                }}
              >
                "{testimonial.quote}"
              </Typography>
              <Box sx={{ py: 3, background: "#eaebeb" }}>
                <Typography sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: "700", px: { xs: 2, md: 4 } }}>
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    opacity: 0.7,
                    textTransform: "uppercase",
                    px: { xs: 2, md: 4 },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  {testimonial.company}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "white",
          boxShadow: 3,
          zIndex: 20,
        }}
      >
        <ChevronLeftIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "white",
          boxShadow: 3,
          zIndex: 20,
        }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};

export default TestimonialCarousel;
