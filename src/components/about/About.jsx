import "./about.css";
import React from "../../img/react.svg";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
const About = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 480px)");
  return (
    <Flex
      align={"center"}
      m={"auto"}
      w={"95%"}
      h={["50vh", "70vh"]}
      mt={!isLargerThan && "55%"}
      id="about">
      {/* {isLargerThan ? (
        <Box className="a-left">
          <Box className="a-card bg"></Box>
          <Box className="a-card"></Box>
        </Box>
      ) : null} */}
      <Box px={["1rem", "3rem", "3rem", "5rem"]}>
        <Heading fontWeight={"semibold"} textAlign={"center"} my={"5"}>
          <span style={{ color: "rgb(220, 20, 60)", fontWeight: "bold" }}>
            About
          </span>{" "}
          Me
        </Heading>
        <Text
          my={"5"}
          fontSize={["xs", "sm", "md", "lg"]}
          px={"2"}
          textAlign={"justify"}>
          <Text fontWeight={"semibold"}>Hello , I am Naresh Mewada</Text>
          <Box color={"rgb(220, 20, 60)"} fontWeight={"semibold"}>
            <Typewriter
              options={{
                strings: ["Full Stack Web Developer", "MERN Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Box>
          <Box mt={4}>
            <Text mb={3}>
              Hi! I’m Naresh Mewada, a passionate Full Stack Developer who loves
              turning ideas into scalable, production-ready applications. I
              specialize in Angular, NestJS, and PostgreSQL, with strong skills
              in creating reusable UI components, building secure backend APIs,
              and improving app performance and maintainability.
            </Text>
            <Text mb={3}>
              After graduating with a B.Sc. in Computer Science, I completed a
              full-time software development program and quickly transitioned
              into a product-based role. I’ve delivered 50+ features across 7
              modules, built a reusable drawer system used 200+ times, and
              actively contributed to UI/UX improvements by building a component
              library aligned with Figma designs.
            </Text>
            <Text>
              Today, I’m working as a Full Stack Developer at Kelp, where I
              collaborate closely with cross-functional teams to develop and
              optimize enterprise-grade features. I've strengthened unit testing
              with Jest, improved code quality by resolving 150+ SonarLint
              issues, and helped make large parts of the codebase more modular
              and maintainable. I'm always eager to learn new technologies and
              take on meaningful challenges.
            </Text>
          </Box>
          {/* <p className="a-desc">
       
        </p> */}
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
