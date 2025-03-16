import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import ZeroTouch from "../../assets/zero-touch.webp"; // Dark version of the logo

export default function Features() {
  return (
    <Box
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
        <Grid item xs={12} sx={{ pb: 4 }} >
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", textAlign: "center", maxWidth:"800px", margin:'auto' }}
            variant="h2"
          >
            Powerful endpoint management, built for the devices you choose
          </Typography>
        </Grid>
        <Grid
                    item
                    xs={12}
                    mg={6}
                    lg={6}
                  
                  >
 <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ maxHeight: 240, maxWidth:380 }}
        image={ZeroTouch}
        title="green iguana"
      />
      <CardContent>
        <Typography 
            sx={{ fontSize: "40px", fontWeight: "700", textAlign: "center", maxWidth:"800px", margin:'auto' }}
        
        gutterBottom variant="h5" component="div">
        Zero-touch Enrollment
        </Typography>
           <Typography
                        sx={{
                          fontSize: "18px",
                          mt: "15px",
                          mb: "20px",
                          color: "rgb(51 51 51)",
                        }}
                      >
                    Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.
                      </Typography>
      </CardContent>
      <CardActions>
        {/* <B size="small">Share</B>
        <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

                  </Grid>
      </Grid>
    </Box>
  );
}
