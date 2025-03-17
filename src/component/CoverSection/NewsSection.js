import { Box, Grid, Typography, Divider } from "@mui/material";
import newsSectionStyles from "../CoverSection/Styles/NewsSection.styles" ;

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
    <Box sx={newsSectionStyles.container}>
      <Box sx={newsSectionStyles.wrapper}>
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={newsSectionStyles.gridContainer}>
          {accolades.map((item, index) => (
            <Grid key={index} item xs={12} md={4} sx={newsSectionStyles.gridItem(index)}>
              <Box sx={newsSectionStyles.imageContainer}>
                <img src={item.img} alt={item.alt} width="auto" height="25px" style={newsSectionStyles.imageStyle} />
              </Box>
              <Typography variant="body2" sx={newsSectionStyles.text}>
                {item.text}
              </Typography>
            </Grid>
          ))}

          {[...Array(accolades.length - 1)].map((_, index) => (
            <Divider key={index} orientation="vertical" flexItem sx={newsSectionStyles.divider} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NewsSection;
