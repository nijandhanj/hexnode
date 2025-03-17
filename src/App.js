import React from "react";
import Navbar from "./component/Navbar";
import CoverSection from "./component/CoverSection";
import Customers from "./component/Customers";
import Features from "./component/Features";
import { ThemeProvider } from "@mui/material";
import theme from "./helpers/ThemeConfig";
import HexNode from "./component/Hexnode";
import LogoCarousel from "./component/Customers/Company";
import TryHexNode from "./component/Sections/TryHexNode";
import Footer from "./component/Footer";
import Platforms from "./component/Platforms";
import NewsSection from "./component/CoverSection/NewsSection";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <CoverSection />
      <NewsSection />
      {/* hexnode */}
      <HexNode />
    {/* id="features"  */}
      
      <Features />
    {/* id="platforms"  */}

      <Platforms/>
    {/* id="customers"  */}

      <Customers />
      
      <LogoCarousel/>
      <TryHexNode />
      
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
