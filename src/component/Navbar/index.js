import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { ReactComponent as LogoDark } from "../../assets/logo-black.svg"; // Dark version of the logo
import { ReactComponent as LogoLight } from "../../assets/logo-white.svg"; // Light version of the logo

const pages = ["Why Hexnode", "Features", "Platforms", "Customers"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle mobile menu open
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // Handle mobile menu close
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Detect scroll using useScrollTrigger
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setIsScrolled(trigger);
  }, [trigger]);

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? "#fff" : "#050c1b",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: isScrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        p:"8px"
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "88%",
          mx: "auto",
          maxWidth: { md: "1300px" },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Side - Logo and Desktop Menu */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Dynamic Logo */}
            {isScrolled ? (
              <LogoDark fill="#000" width={100} />
            ) : (
              <LogoLight fill="#fff" width={100} />
            )}

            {/* Desktop Navigation Links */}
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: 3 }}>
              {pages.map((page) => (
                <Typography
                  key={page}
                  sx={{
                    mx: 2,
                    color: isScrolled ? "#000" : "white",
                    cursor: "pointer",
                    transition: "color 0.3s ease-in-out",
                    fontSize:15
                  }}
                  onClick={handleCloseNavMenu}
                >
                  {page}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* Right Side - CTA Button (Desktop Only) */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#dd0735",
                color: "white",
                "&:hover": { backgroundColor: "#b30000" },
              }}
            >
              14 DAY FREE TRIAL
            </Button>
          </Box>

          {/* Mobile Menu - Right Side */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon sx={{ color: isScrolled ? "#000" : "#fff" }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
