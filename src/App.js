import React from "react";
import Navbar from "./component/Navbar";
import CoverSection from "./component/CoverSection";
import Customers from "./component/Customers";
import Features from "./component/Features";
import { ThemeProvider } from "@mui/material";
import theme from "./helpers/ThemeConfig";
import HexNode from "./component/Hexnode";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <CoverSection />
      <HexNode />
      <Features />

      <Customers />
    </ThemeProvider>
  );
};

export default App;
