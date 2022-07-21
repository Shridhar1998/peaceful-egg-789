import React from "react";
import Navbar from "../Navbar/Navbar";
import Video from "./Video";
import "../css/video.css";
import Mhome from "./Mhome";
import { Box } from "@chakra-ui/react";
import { Feature } from "./Feature";

function Home() {
  return (
    <div>
      <Navbar />

      <Video />
      <Box mt="14.5vh" bgColor="#26a9e1">
        <Mhome />
      </Box>
      <Feature />
    </div>
  );
}

export default Home;
