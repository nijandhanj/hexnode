import { Box, Container, Typography, Link, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f2f2f2",
        py: { xs: "20px", sm: "30px" },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ width: "88%", maxWidth: "1300px", mx: "auto" }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={{ xs: 2, sm: 0 }}
          flexWrap="wrap"
        >
          {/* Links */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{
              order: { xs: 2, sm: 1 },
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              {
                text: "Terms of Use",
                href: "https://www.hexnode.com/legal/terms-of-use/",
              },
              {
                text: "Privacy",
                href: "https://www.hexnode.com/legal/privacy-policy/",
              },
              {
                text: "Cookies",
                href: "https://www.hexnode.com/legal/cookies-policy/",
              },
            ].map((item, index, arr) => (
              <Box
                key={item.text}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Link
                  href={item.href}
                  underline="none"
                  sx={{
                    fontSize: "12px",
                    lineHeight: "24px",
                    fontWeight: "500",
                    color: "text.primary",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#020a19" },
                  }}
                >
                  {item.text}
                </Link>
                {index < arr.length - 1 && (
                  <Typography sx={{ mx: 1, fontSize: "14px", opacity: 0.8 }}>
                    -
                  </Typography>
                )}
              </Box>
            ))}
          </Stack>

          {/* Copyright */}
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "24px",
              fontWeight: "500",
              color: "text.primary",
              textAlign: "center",
              order: { xs: 3, sm: 2 },
            }}
          >
            Copyright © 2025 Mitsogo Inc. All Rights Reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
