import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Gorillas from "../../assets/customer-logos/gorillas.svg";
import Saic from "../../assets/customer-logos/saic.svg";
import Hilton from "../../assets/customer-logos/hilton.svg";
import Merck from "../../assets/customer-logos/merck.svg";
import Lowes from "../../assets/customer-logos/lowes.svg";
import Polaris from "../../assets/customer-logos/polaris.svg";


const logos = [
  Gorillas,Saic,Hilton,Merck,Lowes,Polaris
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const LogoCarousel = () => {
  return (
    <Box sx={{ maxWidth: "90%", margin: "auto", padding: "70px 0" }}>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt={`logo-${index}`} style={{ maxWidth: "180px", height: "auto" }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LogoCarousel;
