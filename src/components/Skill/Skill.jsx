import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { techStack } from "../../data/data";
import GitHubGreen from "../GitHub/GitHubGreen";
import "./Skill.css";
const Skill = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 426px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 769px)");

  const hovering = {
    transform: "scale(1.1)",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    bg:"skyblue",
    px:"0.5rem"
  };
  return (
    <>
      <Box id="skill" min-h={"100vh"} m="auto" w={"95%"} my={"7rem"}>
        <Box mx={"4"} my={"4"}>
          <Heading textAlign={isSmallerThan ? null : "center"}>
            Ski<span style={{ color: "#59b256" }}>lls</span>
          </Heading>
        </Box>
        <Divider />
        <Text
          fontSize={"2xl"}
          fontWeight={"semibold"}
          textAlign={"center"}
          textDecoration={"underline"}
        >
          Tech <span style={{ color: "#59b256" }}>Skills</span>
        </Text>
        <SimpleGrid mt={"8"} columns={[3, 4, 5]} mx={"4"} gap="1rem">
          {techStack.map((el, index) => (
            <Box
              my={"5"}
              key={index}
              transition={"all 0.9s ease"}
              _hover={{
                transform: "scale(1.2)",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  bg:"skyblue",
                  
              }}
            >
              <Image
                w="30%"
                alt={el.name}
                src={el.link}
                className="w-12"
                ml={"auto"}
                mr={"auto"}
                display={"block"}
                
              />
              <Text
                fontSize={"lg"}
                ml={"4"}
                align="center"
                fontWeight={"semibold"}
              >
                {el.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <Divider />
        <Text
          my={"7"}
          fontSize={"2xl"}
          fontWeight={"semibold"}
          textAlign={"center"}
          textDecoration={"underline"}
        >
          Soft <span style={{ color: "#59b256" }}>Skills</span>
        </Text>
        <Flex
          w="90%"
          m="auto"
          my={"7"}
          fontSize={"xl"}
          fontWeight={"extrabold"}
          justifyContent={"space-around"}
          flexDirection={isLargerThan ? "row" : "column"}
          justifyItems={"center"}
        >
          <Box transition="all 0.9s ease" _hover={hovering}>
            🎯 Punctuality
          </Box>
          <Box transition="all 0.9s ease" _hover={hovering}>
            🎯 Hardworking
          </Box>
          <Box transition="all 0.9s ease" _hover={hovering}>
            🎯 Adaptability
          </Box>
          <Box transition="all 0.9s ease" _hover={hovering}>
            🎯 Teamwork
          </Box>
          <Box transition="all 0.9s ease" _hover={hovering}>
            🎯 self-Motivated
          </Box>
        </Flex>
        <Divider />
        <GitHubGreen />
      </Box>
    </>
  );
};

export default Skill;
