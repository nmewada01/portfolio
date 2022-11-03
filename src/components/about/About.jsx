import "./about.css";
import React from "../../img/react.svg";
import myImage from "../../img/png.png";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box className="a" id="about">
      <Box className="a-left">
        <Box className="a-card bg"></Box>
        <Box className="a-card"></Box>
      </Box>
      <Box className="a-right">
        <Heading className="a-title">
          <span style={{ color: "#59b256", fontWeight: "bold" }}>About</span> Me
        </Heading>
        <Text className="a-sub">
          I am a Bsc Computer Science graduate,and a Full Stack Web Developer.
          I'm a analytical, solution-focused, and detail-oriented Full Stack Web
          Developer with the ability to adapt to new environments quickly.
          Problem solving mindset with committed to shared goals and highly
          believed in team work. Has 1100+ hours of hands on experience in web
          development and always energetic and eager to learn new things.
          Learning New things is for me a motivation to expand my knowledge and always honest with my work.
        </Text>
        {/* <p className="a-desc">
       
        </p> */}
      </Box>
    </Box>
  );
};

export default About;
