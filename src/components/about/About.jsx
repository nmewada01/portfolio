import "./about.css";
import React from "../../img/react.svg";
import javascript from "../../img/javascript.svg";
import html from "../../img/html.svg";
import css from "../../img/css.svg";
import myImage from "../../img/png.png";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
const About = () => {
  return (
    <Box className="a" id="about">
      <Box className="a-left">
        <Box className="a-card bg"></Box>
        <Box className="a-card">
          <Image src={myImage} alt="" className="a-img" />
        </Box>
      </Box>
      <Box className="a-right">
        <Heading className="a-title">
          <span style={{ color: "#59b256", fontWeight: "bold" }}>About</span> Me
        </Heading>
        <Text className="a-sub">
          Bsc Computer Science graduate with first Division. I am very punctual
          and hardworking person. Honest With My work and very passionate about
          to learn new things. Learning New things is for me a motivation to
          expand my knowledge. And My enthusiasm for health care allows me to
          stay motivated at work and find importance in what I'm doing. Ability
          to learn things quickly and capable of working in a fast-paced and
          team-driven environment.
        </Text>
        {/* <p className="a-desc">
       
        </p> */}
      </Box>
    </Box>
  );
};

export default About;
