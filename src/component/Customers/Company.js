import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const logos = [
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/costco.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/group1-automotive.png",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
  "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
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
