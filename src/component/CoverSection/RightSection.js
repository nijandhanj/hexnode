import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Banner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "610px",
        position: "relative",
        mx: "auto",
      }}
    >
      {/* Background Image */}
      <img
        src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/banner.jpg"
        alt="Hexnode UEM"
        width="610"
        height="465"
        style={{ width: "100%", height: "auto" }}
      />
      
      {/* Overlay Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <img
          src="https://static.hexnode.com/v2/assets/img/ads-pages/banner/baner.png"
          alt="Hexnode UEM Overlay"
          width="393"
          height="753"
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      
      {/* Status Indicators */}
      {[
        { text: "Password policy applied", color: "#FCD598", top: "14%", left: "5%" },
        { text: "TvOS Kiosk Active", color: "#C3E1E7", top: "40%", right: "-2%" },
        { text: "Device Enrolled", color: "#BCDCBE", bottom: "13%", right: "26%" },
      ].map((item, index) => (
        <Paper
  key={index}
  sx={{
    display: "flex",
    alignItems: "center",
    backgroundColor: item.color,
    borderRadius: "21px",
    padding: "10px 20px",
    position: "absolute",
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
    },
    ...item, // Ensures positioning remains intact
  }}
>
  <CheckCircleIcon
    sx={{
      color: "#000",
      marginRight: "10px",
      transition: "color 0.3s ease-in-out",
    }}
  />
  <Typography
    variant="body1"
    sx={{
      fontSize: { xs: "12px", sm: "20px" }, // Smaller font size on small screens
      color: "#000", // Initially black text
      transition: "color 0.3s ease-in-out",
    }}
  >
    {item.text}
  </Typography>
</Paper>


      
      ))}
    </Box>
  );
};

export default Banner;
