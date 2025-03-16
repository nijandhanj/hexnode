import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import AnimatedComponent from "./FloatingIcon";
import Logo from "../../assets/hexnode-app-icon.svg"; // Dark version of the logo

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  border: "1px solid #e5e7eb",
  textAlign: "left",
  borderRadius: "16px",
  maxWidth: "396px",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const data = [
  {
    title: "Adapt to the new normal",
    content:
      "Hybrid, remote or onsite, you can trust Hexnode UEM to deliver. Create policies that cater to your organization’s protocols. Whether it be BYOD, COPE, or platform limited, Hexnode can manage it all.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <g id="icon" transform="translate(-350 -1026)">
          <rect
            id="bg"
            width="40"
            height="40"
            rx="6"
            transform="translate(350 1026)"
            fill="#f8faff"
          ></rect>
          <g
            id="icon-2"
            data-name="icon"
            transform="translate(360.637 1033.314)"
          >
            <path
              id="Path_4886"
              data-name="Path 4886"
              d="M31.112,22.38a.25.25,0,0,0-.274.055l-1.547,1.56L27.217,21.9a6.527,6.527,0,0,0-.766-8.236A6.347,6.347,0,0,0,23.1,11.88V8.921h2.188a.254.254,0,0,0,.168-.442l-3.372-3.4a.25.25,0,0,0-.355,0l-3.381,3.41a.255.255,0,0,0-.054.276.251.251,0,0,0,.232.156h2.187v2.958a6.345,6.345,0,0,0-3.355,1.788,6.526,6.526,0,0,0-.766,8.236l-2.075,2.092-1.547-1.56a.25.25,0,0,0-.274-.055.253.253,0,0,0-.155.234v4.822a.253.253,0,0,0,.251.254h4.782a.254.254,0,0,0,.168-.442L16.2,25.7l2.074-2.092c.15.1.3.2.461.291a6.38,6.38,0,0,0,3.163.836h0a6.524,6.524,0,0,0,.719-.04,6.356,6.356,0,0,0,2.9-1.087L27.6,25.7l-1.547,1.56a.255.255,0,0,0-.054.276.252.252,0,0,0,.232.157h4.782a.252.252,0,0,0,.251-.254V22.614A.252.252,0,0,0,31.112,22.38Z"
              transform="translate(-12.54 -5.004)"
              fill="#3371ed"
              stroke="#3371ed"
              stroke-width="1"
            ></path>
            <ellipse
              id="Ellipse_25"
              data-name="Ellipse 25"
              cx="3.046"
              cy="3.048"
              rx="3.046"
              ry="3.048"
              transform="translate(6.317 10.111)"
              fill="#e0eafd"
              stroke="#3371ed"
              stroke-width="1"
            ></ellipse>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Zero compromise security",
    content:
      "Enable full-fledged device encryption, data loss prevention, and all-rounded device security with Hexnode UEM. Be at the bleeding edge of device security without any compromises.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <g id="icon" transform="translate(-350 -1026)">
          <rect
            id="bg"
            width="40"
            height="40"
            rx="6"
            transform="translate(350 1026)"
            fill="#f8faff"
          ></rect>
          <g
            id="icon-2"
            data-name="icon"
            transform="translate(360.652 1034.657)"
          >
            <path
              id="Path_4884"
              data-name="Path 4884"
              d="M274.137,195.4l1.177.515a.562.562,0,0,0,.538,0l1.345-.584a13.1,13.1,0,0,0,7.9-12.118v-6.66a.726.726,0,0,0-.37-.618l-8.776-2.56a.7.7,0,0,0-.639,0l-8.574,2.594a.724.724,0,0,0-.336.618v6.8a13.143,13.143,0,0,0,7.734,12.015Z"
              transform="translate(-266.403 -173.299)"
              fill="#3371ed"
            ></path>
            <path
              id="Path_6831"
              data-name="Path 6831"
              d="M-12748.986,956.841l3.372,3.372,5.7-5.7"
              transform="translate(12754.033 -946.022)"
              fill="none"
              stroke="#fff"
              stroke-width="1"
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Get more done with automation",
    content:
      "Hexnode UEM automation features help free up IT’s time spent on mundane and repetitive tasks. Do hours’ worth of work in a few minutes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <g id="icon" transform="translate(-350 -1026)">
          <rect
            id="bg"
            width="40"
            height="40"
            rx="6"
            transform="translate(350 1026)"
            fill="#f8faff"
          ></rect>
          <path
            id="settings"
            d="M18.17,15.878l2.118.733a13.582,13.582,0,0,0,.652,1.629L19.962,20.2a.866.866,0,0,0,.163.978L22.651,23.7a.866.866,0,0,0,.978.163l1.955-.978a9.709,9.709,0,0,0,1.629.652l.733,2.118a.782.782,0,0,0,.733.57h3.584a.981.981,0,0,0,.815-.57l.733-2.118a13.583,13.583,0,0,0,1.629-.652l1.955.978a.866.866,0,0,0,.978-.163L40.9,21.174a.866.866,0,0,0,.163-.978l-.978-1.955a9.71,9.71,0,0,0,.652-1.629l2.118-.733a.809.809,0,0,0,.57-.815V11.479a.981.981,0,0,0-.57-.815l-2.118-.57a9.71,9.71,0,0,0-.652-1.629l.978-1.955a.888.888,0,0,0-.163-.978L38.292,2.925a.866.866,0,0,0-.978-.163l-1.955.978a9.709,9.709,0,0,0-1.629-.652L33,.97A.809.809,0,0,0,32.182.4H28.6a.782.782,0,0,0-.733.57l-.733,2.118A13.582,13.582,0,0,0,25.5,3.74l-1.874-.9a.866.866,0,0,0-.978.163L20.125,5.532a.866.866,0,0,0-.163.978l.978,1.955a9.71,9.71,0,0,0-.652,1.629l-2.118.733a.809.809,0,0,0-.57.815v3.584A.912.912,0,0,0,18.17,15.878Z"
            transform="translate(339.488 1032.688)"
            fill="#3371ed"
          ></path>
          <path
            id="play"
            d="M5.2,1.067a1,1,0,0,1,1.6,0l4,5.333A1,1,0,0,1,10,8H2a1,1,0,0,1-.8-1.6Z"
            transform="translate(375.55 1040) rotate(90)"
            fill="#fff"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: "Unified Policy Management",
    content:
      "Create a single policy through Hexnode and apply it on all the devices in your organization. Any platform or form factor, achieve single pane of glass management with Hexnode.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
      >
        <g id="icon" transform="translate(-350 -1026)">
          <rect
            id="bg"
            width="40"
            height="40"
            rx="6"
            transform="translate(350 1026)"
            fill="#f8faff"
          ></rect>
          <g
            id="icon-2"
            data-name="icon"
            transform="translate(-169.518 -292.287)"
          >
            <path
              id="Path_4890"
              data-name="Path 4890"
              d="M-2352.028,1328.551l1.324.582.872,1.594v6.487l-.7.673-1.919.251-2.3-.251v-7.31l.875-1.268.872-.758Z"
              transform="translate(2900.665 -1.124)"
              fill="#3371ed"
            ></path>
            <path
              id="Path_4888"
              data-name="Path 4888"
              d="M-2400.021,1328.551l-1.22,1.094-.512,1.688v18.06l-1.005.341h-15.724l-1.012-.765v-19.027l1.012-1.391Z"
              transform="translate(2947.591 -1.124)"
              fill="#3371ed"
            ></path>
            <g id="noun-policy-5740034" transform="translate(527.942 1327)">
              <path
                id="Path_4887"
                data-name="Path 4887"
                d="M27.34,3H9.253A2.313,2.313,0,0,0,6.942,5.311V23.967a1.381,1.381,0,0,0,1.379,1.379H23.959a1.381,1.381,0,0,0,1.379-1.379v-10.7h3.377a1.38,1.38,0,0,0,1.379-1.379V6.036A2.91,2.91,0,0,0,27.34,3ZM24.586,23.967a.627.627,0,0,1-.627.627H8.321a.627.627,0,0,1-.627-.627V5.311A1.56,1.56,0,0,1,9.252,3.752H25.528a3.168,3.168,0,0,0-.943,2.284Zm4.756-12.082a.627.627,0,0,1-.627.627H25.338V6.036a2.159,2.159,0,0,1,2-2.284,2.16,2.16,0,0,1,2,2.284ZM23.131,25.2a.376.376,0,0,1-.376.376H9.525a.376.376,0,1,1,0-.752H22.755A.376.376,0,0,1,23.131,25.2Z"
                transform="translate(-6.942 -3)"
                fill="#f8faff"
              ></path>
              <path
                id="Path_6795"
                data-name="Path 6795"
                d="M6.341,35.232h10.3"
                transform="translate(-2.296 -21.896)"
                fill="none"
                stroke="#f8faff"
                stroke-linecap="round"
                stroke-width="1"
              ></path>
              <path
                id="Path_6796"
                data-name="Path 6796"
                d="M6.341,35.232h10.3"
                transform="translate(-2.296 -19.151)"
                fill="none"
                stroke="#f8faff"
                stroke-linecap="round"
                stroke-width="1"
              ></path>
              <path
                id="Path_6797"
                data-name="Path 6797"
                d="M6.341,35.232h10.3"
                transform="translate(-2.296 -16.406)"
                fill="none"
                stroke="#f8faff"
                stroke-linecap="round"
                stroke-width="1"
              ></path>
            </g>
            <path
              id="Path_6966"
              data-name="Path 6966"
              d="M533.9,1334.671l2.109,2.109,4.777-4.777"
              fill="none"
              stroke="#f8faff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
            ></path>
          </g>
        </g>
      </svg>
    ),
  },
];

export default function HexNode() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        background: "#f7f7f7",
        pt: "80px",
        pb: "80px",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          mb: 2,
          position: "absolute",
          top: "48%",
          left: "48%",
        }}
      >
        <img
          src={Logo}
          alt="hexnode app logo"
          width={105}
          height={105}
          sx={{}}
        />
      <AnimatedComponent top={"85%"} left={"75%"}/>
      <AnimatedComponent direction="left" top={"85%"} right= {"75%"}/>  
      <AnimatedComponent direction="right" reverse left={"75%"} bottom={"85%"}/>
      <AnimatedComponent direction="left" reverse right={"75%"} bottom={"85%"} /> 
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ width: "88%", margin: "auto", display: "flex" }}
      >
        <Grid item xs={12} sx={{ pb: 4 }}>
          <Typography
            sx={{ fontSize: "40px", fontWeight: "700", textAlign: "center" }}
            variant="h2"
          >
            Why Hexnode?
          </Typography>
        </Grid>
        {data.map((item, index) => (
          <Grid
            item
            xs={12}
            mg={6}
            lg={6}
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              height: "343px",
            }}
          >
            <Card
              sx={{
                transition: "all 0.3s ease-in-out",
                zIndex:1,
                height: "fit-content",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 3,
                  "& .hover-text": {
                    opacity: 1,
                    visibility: "visible",
                  },
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {item.icon}
                <Typography
                  variant="h4"
                  sx={{ fontSize: "24px", fontWeight: "700", color: "#000" }}
                >
                  {item.title}
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  mt: "15px",
                  mb: "20px",
                  color: "rgb(51 51 51)",
                }}
              >
                {item.content}
              </Typography>
              <Typography
                variant="p"
                className="hover-text"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#dd0735",
                  opacity: 0,
                  position: "absolute",
                  visibility: "hidden",
                  bottom: "20px",
                  cursor: "pointer",
                  transition:
                    "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
                }}
              >
                Try Hexnode on your endpoints
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
