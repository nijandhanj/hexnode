const newsSectionStyles = {
    container: {
      backgroundColor: "#1A1C2B",
      py: { xs: 4, md: 5 },
    },
    wrapper: {
      width: "88%",
      maxWidth: "1300px",
      mx: "auto",
    },
    gridContainer: {
      mx: { md: "-10px", lg: "-25px", xl: "-45px" },
    },
    gridItem: (index) => ({
      display: "flex",
      flexDirection: "column",
      alignItems: { xs: "center", md: "start" },
      px: { xs: 0, md: 2, lg: 3, xl: 5 },
      borderRight: { md: index !== 2 ? "1px solid gray" : "none" }, // Right border on medium and larger screens
      py: { xs: 5, md: 0 },
    }),
    imageContainer: {
      display: "flex",
      mb: 2,
    },
    imageStyle: {
      maxWidth: "156px",
      objectFit: "contain",
    },
    text: {
      fontSize: "14px",
      lineHeight: "22px",
      color: "rgba(255,255,255,0.6)",
      textAlign: { xs: "center", md: "left" },
    },
    divider: {
      width: { xs: "107px", md: "1px" },
      backgroundColor: "rgba(255,255,255,0.2)",
      display: { xs: "none", md: "block" },
    },
  };
  
  export default newsSectionStyles;
  