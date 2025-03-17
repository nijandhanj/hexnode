import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade"; // For smooth transitions
import CustomizedAccordions from "./Accordion";
import ZeroTouch from "../../assets/zero-touch.webp";
import Automation from "../../assets/automation.webp";
import Integrations from "../../assets/integrations.webp";
import Security from "../../assets/endpoint-security.webp";
import RemoteAccess from "../../assets/remote-access.webp";
import AppManagement from "../../assets/app-management.webp";
import Android from "../../assets/Platforms/android.webp";
import FireOs from "../../assets/Platforms/fireOS.webp";
import IOS from "../../assets/Platforms/iOS.webp";
import MacOS from "../../assets/Platforms/macOS.webp";
import TvOS from "../../assets/Platforms/tvOS.webp";
import Windows from "../../assets/Platforms/windows.webp";

// Image mapping for each panel (panel0, panel1, etc.)
const imageMap = {
  panel0: Android,
  panel1: FireOs,
  panel2: IOS,
  panel3: MacOS,
  panel4: TvOS,
  panel5: Windows,
};

export default function Platforms() {
  const [accordion, setAccordion] = useState("panel0"); // Default active panel

  return (
    <Box
      id="platforms"
      sx={{
        flexGrow: 1,
        background: "#f7f7f7",
        pt: "80px",
        pb: "80px",
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ width: "88%", margin: "auto", display: "flex" }}
      >
        <Grid item xs={12} sx={{ pb: 4 }}>
          <Typography
            sx={{
              fontSize: { xs: "32px", md: "40px" },
              pb: "20px",
              fontWeight: "700",
              textAlign: "center",
              maxWidth: "800px",
              margin: "auto",
            }}
            variant="h2"
          >
            Multi-platform Endpoint Management
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "center",
              mt: "10px",
              mb: "20px",
              color: "rgb(51 51 51)",
            }}
          >
            Devices of varying platforms? Hexnode thrives in a diverse
            environment.
          </Typography>
        </Grid>

        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} sm={6} md={6}>
            <Fade in={true} timeout={500} key={accordion}>
              <img width={"100%"} src={imageMap[accordion]} alt="Feature" />
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CustomizedAccordions setAccordion={setAccordion} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
