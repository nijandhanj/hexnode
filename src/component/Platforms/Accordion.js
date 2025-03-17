import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ expanded }) => ({
  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
  borderRadius: expanded ? "15px" : "0", 
  backgroundColor: expanded ? "#fff" : "transparent", 
  transition:
    "background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out", 
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={null} {...props} />
))(({ expanded }) => ({
  backgroundColor: expanded ? "#fff!important" : "#f7f7f7", 
  flexDirection: "row-reverse",
  borderRadius: expanded ? "15px" : "0",
  transition:
    "background-color 0.3s ease-in-out, border-radius 0.3s ease-in-out",
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "16px",
  backgroundColor: "#fff!important", 
  borderBottomLeftRadius: "15px", 
  borderBottomRightRadius: "15px",
}));

const accordionData = [
  {
    title: "Android",
    description:
      "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
  },
  {
    title: "iOS",
    description:
      "Manage, secure, and monitor iOS devices in your organization. With Hexnode’s ABM and ASM integration, deploy devices and apps with ease.",
  },
  {
    title: "macOS",
    description:
      "Leverage Hexnode’s desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
  },
  {
    title: "Windows",
    description:
      "Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.",
  },
  {
    title: "tvOS",
    description:
      "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
  },
  {
    title: "FireOS",
    description:
      "Enroll Amazon Fire tablets, phones, and e-readers in Hexnode UEM to manage them all from a single console.",
  },
];

export default function CustomizedAccordions({ setAccordion }) {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    setAccordion(newExpanded ? panel : false);
  };

  return (
    <div>
      {accordionData.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === `panel${index}`}
          onChange={handleChange(`panel${index}`)}
        >
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              borderTop:
                expanded === `panel${index}`
                  ? "1px solid #d7d7d7"
                  : "transparent",
              borderRight:
                expanded === `panel${index}`
                  ? "1px solid #d7d7d7"
                  : "transparent",
              borderLeft:
                expanded === `panel${index}`
                  ? "1px solid #d7d7d7"
                  : "transparent",
              backgroundColor:
                expanded === `panel${index}` ? "#fff" : "transparent",
              borderTopRightRadius: expanded === `panel${index}` ? "15px" : "0", // Apply border radius when expanded
              borderTopLeftRadius: expanded === `panel${index}` ? "15px" : "0", // Apply border radius when expanded
            }}
          >
            <Typography
              variant="h6"
              sx={{
                textAlign: "left",
                px: 4,
                fontWeight: "700",
                fontSize: "24px",
              }}
              component="span"
            >
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              borderRight:
                expanded === `panel${index}`
                  ? "1px solid #d7d7d7"
                  : "transparent",
              borderLeft:
                expanded === `panel${index}`
                  ? "1px solid #d7d7d7"
                  : "transparent",
            }}
          >
            <Typography
              sx={{
                fontSize: "18px",

                mb: "20px",
                color: "rgb(51 51 51)",
                pl: "30px",
              }}
            >
              {item.description}
            </Typography>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#dd0735",
                cursor: "pointer",
                pl: "30px",
                pb: 1,
                pt: 0,
              }}
            >
              Try Hexnode on your endpoints
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
