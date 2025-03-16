import { Box, styled } from "@mui/material";

const AnimatedSvg = styled("svg")`
  .path {
    stroke-dasharray: 10;
    stroke-dashoffset: 1000;
    animation: dash 15s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

export default function AnimatedComponent({top,left,bottom,right, direction = "right", reverse = false }) {
  // Define paths for different directions
  const paths = {
    right: {
      normal: "M-19046.7-5013.562v95.043c0,26.781,22.783,38.885,35.471,38.885h141.02",
      reverse: "M-19046.7-4879.633v-95.043c0-26.781,22.783-38.885,35.471-38.885h141.02",
    },
    left: {
      normal: "M-18870.2-5013.562v95.043c0,26.781-22.783,38.885-35.471,38.885h-141.02",
      reverse: "M-18870.2-4879.633v-95.043c0-26.781-22.783-38.885-35.471-38.885h-141.02",
    },
  };

  return (
    <Box sx={{ position: "absolute", top: {top}, left: {left}, bottom:{bottom}, right:{right} }}>
      <AnimatedSvg xmlns="http://www.w3.org/2000/svg" width="177" height="134.928" viewBox="0 0 177.49 134.928">
        <path
          className="path"
          d={reverse ? paths[direction].reverse : paths[direction].normal} // Dynamic path selection
          transform="translate(19047.195 5014.062)"
          fill="none"
          stroke="#020a19"
          strokeLinecap="round"
          strokeWidth="1"
          strokeDasharray="7"
        />
      </AnimatedSvg>
    </Box>
  );
}
