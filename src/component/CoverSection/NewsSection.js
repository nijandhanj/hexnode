import { Box, Grid, Typography, Divider } from "@mui/material";

const accolades = [
  {
    img: "https://static.hexnode.com/v2/assets/img/accolades/idc.png",
    alt: "IDC",
    text: "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
  },
  {
    img: "https://static.hexnode.com/v2/assets/img/accolades/gartner.png",
    alt: "Gartner",
    text: "Hexnode was recognized in the 2025 Gartner® Market Guide for Unified Endpoint Management Tools.",
  },
  {
    img: "https://static.hexnode.com/v2/assets/img/accolades/forrester.png",
    alt: "Forrester",
    text: "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
  },
];

const NewsSection = () => {
  return (
    <Box sx={{ backgroundColor: "#1A1C2B", py: { xs: 4, md: 5 } }}>
      <Box sx={{ width: "88%", maxWidth: "1300px", mx: "auto" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{ mx: { md: "-10px", lg: "-25px", xl: "-45px" },    }}
        >
          {accolades.map((item, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "center", md: "start" },
                px: { xs: 0, md: 2, lg: 3, xl: 5 },
                borderRight: { md: index !== 2 ? "1px solid gray" : "none" }, // Right border on medium and larger screens
                py: { xs: 5, md: 0 },
              }}
            >
              <Box sx={{ display: "flex", mb: 2 }}>
                <img
                  src={item.img}
                  alt={item.alt}
                  width="auto"
                  height="25px"
                  style={{ maxWidth: "156px", objectFit: "contain" }}
                />
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  lineHeight: "22px",
                  color: "rgba(255,255,255,0.6)",
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {item.text}
              </Typography>
            </Grid>
          ))}

          {/* Dividers between items */}
          {[...Array(accolades.length - 1)].map((_, index) => (
            <Divider
              key={index}
              orientation="vertical"
              flexItem
              sx={{
                width: { xs: "107px", md: "1px" },
                backgroundColor: "rgba(255,255,255,0.2)",
                display: { xs: "none", md: "block" },
              }}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NewsSection;
