import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RightSection from "./RightSection";
import LeftSideSection from "./LeftSection";
import { coverSectionStyles } from "./Styles/Coversection.styles"; // Import styles

export default function CoverSection() {

  return (
    <Box sx={coverSectionStyles.container}>
      <Grid container spacing={2} sx={coverSectionStyles.gridContainer}>
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={6} md={6} sx={coverSectionStyles.rightSection}>
            <RightSection />
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={coverSectionStyles.leftSection}>
            <LeftSideSection />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
