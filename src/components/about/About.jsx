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
          I'm a Bsc Computer Science graduate and A MERN developer having
          1100+hrs of hands on experience in web development and always
          energetic and eager to learn new things,Learning new things is for me
          a motivation to expand my knowledge and always honest with my work.
          also collaborative, flexible and versatile who loves to develop the
          websites using mern stack. Ambitious and hardworking individual with
          competency in web development and looking forward to work in the
          software industry.
        </Text>
        {/* <p className="a-desc">
       
        </p> */}
      </Box>
    </Box>
  );
};

export default About;
