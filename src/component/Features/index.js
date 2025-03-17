import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ZeroTouch from "../../assets/zero-touch.webp"; // Dark version of the logo
import Automation from "../../assets/automation.webp"; // Dark version of the logo
import Integrations from "../../assets/integrations.webp"; // Dark version of the logo
import Security from "../../assets/endpoint-security.webp"; // Dark version of the logo
import RemoteAccess from "../../assets/remote-access.webp"; // Dark version of the logo
import AppManagement from "../../assets/app-management.webp"; // Dark version of the logo

const featuresData = [
  {
    title: "Zero-touch Enrollment",
    description:
      "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
    image: ZeroTouch,
  },
  {
    title: "Automation",
    description:
      "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
    image: Automation,
  },
  {
    title: "Remote Access Management",
    description:
      "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
    image: RemoteAccess,
  },
  {
    title: "Endpoint Security and Compliance",
    description:
      "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
    image: Security,
  },
  {
    title: "Integrations",
    description:
      "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
    image: Integrations,
  },
  {
    title: "App Management",
    description:
      "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
    image: AppManagement,
  },
];

export default function Features() {
  return (
    <Box
      id="features"
      sx={{
        flexGrow: 1,
        background: "#fff",
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
            Powerful endpoint management, built for the devices you choose
          </Typography>
        </Grid>

        <Grid container spacing={5} justifyContent="center">
          {featuresData.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: { xs: 340, md: 380 },
                  mx: "auto",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  sx={{ height: "240px", maxWidth: "380px" }}
                  image={feature.image}
                  title={feature.title}
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: { xs: "24px", md: "32px" },
                      pt: 4,
                      pb: 2,
                      fontWeight: "700",
                      textAlign: "left",
                      maxWidth: "800px",
                      margin: "auto",
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      mt: "15px",
                      mb: "20px",
                      color: "rgb(51 51 51)",
                    }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
