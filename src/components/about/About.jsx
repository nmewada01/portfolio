import "./about.css";
import React from "../../img/react.svg";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";

const About = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 480px)");
  return (
    <Flex
      align={"center"}
      m={"auto"}
      w={"95%"}
      h={["50vh", "100vh"]}
      mt={!isLargerThan && "30%"}
      id="about"
    >
      {isLargerThan ? (
        <Box className="a-left">
          <Box className="a-card bg"></Box>
          <Box className="a-card"></Box>
        </Box>
      ) : null}
      <Box flex={"1"}>
        <Heading fontWeight={"semibold"} px={"2"}>
          <span style={{ color: "#59b256", fontWeight: "bold" }}>About</span> Me
        </Heading>
        <Text my={"5"} fontSize={["xs", "sm", "md", "md"]} px={"2"}>
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
    </Flex>
  );
};

export default About;
