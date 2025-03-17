import { Box, Typography, Button, Container } from "@mui/material";

export default function HexnodeSection() {
  return (
    <Box
      sx={{
        backgroundColor: "#020a19",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: "50px", md: 0 },
        height: { md: 330 },
        position: "relative",
      }}
    >
      {/* Hidden element */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "-65px", xl: "-74px" },
          opacity: 0,
          width: 0,
          height: 0,
          margin: 0,
        }}
      />

      {/* Content container */}
      <Container
        maxWidth="lg"
        sx={{ width: "88%", maxWidth: "1300px", mx: "auto" }}
      >
        <Box sx={{ textAlign: "center", maxWidth: "1000px", mx: "auto" }}>
          <Typography
            variant="h3"
            component="h3"
            sx={{
              fontSize: { xs: "30px", md: "42px" },
              fontWeight: "bold",
              lineHeight: { xs: "38px", md: "1.3" },
              color: "#fff",
              mb: "20px",
            }}
          >
            Get Hexnode UEM and start securing your endpoints
          </Typography>
        </Box>

        {/* Button */}
        <Box sx={{ maxWidth: { xs: "325px", md: "302px" }, mx: "auto" }}>
          <Button
            href="https://www.hexnode.com/mobile-device-management/cloud/signup/"
            target="_blank"
            rel="noreferrer"
            sx={{
              backgroundColor: "#DD0735",
              "&:hover": { backgroundColor: "#AA232F" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: "15px",
              transition: "all 0.3s ease-out",
              borderRadius: "3px",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontSize: { xs: "14px", md: "17px" },
                lineHeight: { xs: "20px", md: "24px" },
                fontWeight: "normal",
                color: "#FFFFFF",
              }}
            >
              TRY HEXNODE FOR FREE
            </Typography>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
