const unifiedEndpointStyles = {
    heading: {
      color: "#FFFFFF",
      fontSize: { xs: 34, lg: 42 },
      lineHeight: { xs: "44px", lg: "53px" },
      textAlign: { xs: "center", xl: "left" },
    },
    description: {
      color: "rgba(255,255,255,0.75)",
      fontSize: 18,
      lineHeight: "28px",
      textAlign: { xs: "center", xl: "left" },
      mb: 2,
    },
    inputField: (error) => ({
      backgroundColor: "white",
      borderRadius: 1,
      "& input": {
        fontSize: 16,
        lineHeight: "20px",
        padding: "12px",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: error ? "#dd0735" : "#ccc",
        },
        "&:hover fieldset": {
          borderColor: error ? "#b30000" : "#888",
        },
      },
    }),
    button: {
      backgroundColor: "#dd0735",
      p: 1.5,
      color: "white",
      "&:hover": { backgroundColor: "#b30000" },
      "&:disabled": {
        backgroundColor: "gray",
        cursor: "not-allowed",
      },
    },
  };
  
  export default unifiedEndpointStyles;
  