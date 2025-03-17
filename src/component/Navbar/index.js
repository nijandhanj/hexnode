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
import { ReactComponent as LogoDark } from "../../assets/logo-black.svg";
import { ReactComponent as LogoLight } from "../../assets/logo-white.svg";

const pages = ["Why Hexnode", "Features", "Platforms", "Customers"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setIsScrolled(trigger);
  }, [trigger]);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
      handleCloseNavMenu();
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: isScrolled ? "#fff" : "#050c1b",
        transition: "background-color 0.3s ease-in-out",
        boxShadow: isScrolled ? "0px 4px 6px rgba(0, 0, 0, 0.1)" : "none",
        p: "8px",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "88%",
          mx: "auto",
          pr: 0,
          pl: 0,
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isScrolled ? (
              <LogoDark fill="#000" width={"121px"} />
            ) : (
              <LogoLight fill="#fff" width={"121px"} />
            )}
            <Box sx={{ display: { xs: "none", md: "flex" }, ml: 3 }}>
              {pages.map((page) => (
                <Typography
                  key={page}
                  sx={{
                    mx: 2,
                    color: isScrolled ? "#000" : "white",
                    cursor: "pointer",
                    transition: "color 0.3s ease-in-out",
                    fontSize: 15,
                  }}
                  onClick={() =>
                    handleScroll(page.toLowerCase().replace(/\s+/g, ""))
                  }
                >
                  {page}
                </Typography>
              ))}
            </Box>
          </Box>
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: isScrolled ? "#000" : "#fff" }} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() =>
                    handleScroll(page.toLowerCase().replace(/\s+/g, ""))
                  }
                >
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
