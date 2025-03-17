import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import RightSection from "./RightSection";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade"; // For smooth transitions

import Android from "../../assets/Platforms/android.webp";
import FireOs from "../../assets/Platforms/fireOS.webp";
import IOS from "../../assets/Platforms/iOS.webp";
import MacOS from "../../assets/Platforms/macOS.webp";
import TvOS from "../../assets/Platforms/tvOS.webp";
import Windows from "../../assets/Platforms/windows.webp";
import LeftSideSection from "./LeftSection";

// Image mapping for each panel (panel0, panel1, etc.)
const imageMap = {
  panel0: Android,
  panel1: FireOs,
  panel2: IOS,
  panel3: MacOS,
  panel4: TvOS,
  panel5: Windows,
};

export default function CoverSection() {
  const [accordion, setAccordion] = useState("panel0"); // Default active panel

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "#050c1b",
        pt: { xs: "10px", sm: "80px" }, // No padding-top on small screens
        pb: "80px",
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ width: "88%", margin: "auto", display: "flex" }}
      >
        <Grid container spacing={5} justifyContent="center">
          {/* RightSection comes first on small screens */}
          <Grid item xs={12} sm={6} md={6} sx={{ order: { xs: -1, sm: 1 } }} >
            <RightSection />
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ alignSelf: "center" }}>
            <LeftSideSection />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
