import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Container,
} from "@mui/material";

const UnifiedEndpointManagement = () => {

    const [error, setError] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      
        textAlign: { xs: "center", xl: "left" },
        width: "100%",
        maxWidth: { md: 554 },
        order: { xs: 2, xl: 1 },
      }}
    >
      {/* Heading Section */}
      <Box sx={{ mb: { xs: 2.5, md: 1.5 }, mt: { xs: 5, xl: 0 } }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{
            color: "rgba(191,193,197,0.6)",
            fontSize: 16,
            lineHeight: "20px",
            mb: 1,
          }}
        >
          Unified Endpoint Management
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: 34, lg: 42 },
            lineHeight: { xs: "44px", lg: "53px" },
            textAlign: { xs: "center", xl: "left" },
          }}
        >
          Gain control and visibility over your endpoints
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          color: "rgba(255,255,255,0.75)",
          fontSize: 18,
          lineHeight: "28px",
          textAlign: { xs: "center", xl: "left" },
          mb: 2,
        }}
      >
        Hexnode's UEM solution allows you to simplify endpoint management and free up IT. Focus on the big picture while Hexnode works on the details.
      </Typography>

      {/* Form Section */}
      <Container disableGutters>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ flexDirection: { xs: "column", sm: "row" } }}
        >
          <Grid item xs={12} sm={7}>
            <TextField
              fullWidth
              placeholder="Email"
              type="email"
              variant="outlined"
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                "& input": {
                  fontSize: 16,
                  lineHeight: "20px",
                  padding: "12px",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Button
                          variant="contained"
                          fullWidth
                          onClick={()=> setError(true)}
                          size="large"
                          sx={{
                            backgroundColor: "#dd0735",
                            p:1.5,
                            color: "white",
                            "&:hover": { backgroundColor: "#b30000" },
                          }}
                        >
                           Let's Try It Out!
                        </Button>
            
          </Grid>
        </Grid>
      </Container>

      {/* Error Message (Hidden Initially) */}
    {  error && <Box sx={{ position: "relative", width: "100%", mt: 2 }}>
        <Typography
          sx={{
            fontSize: 15,
            lineHeight: "24px",
            color: "white",
            fontWeight: 200,
            textAlign: "center",
          }}
        >
          This field is mandatory.
        </Typography>
      </Box>}
    </Box>
  );
};

export default UnifiedEndpointManagement;
