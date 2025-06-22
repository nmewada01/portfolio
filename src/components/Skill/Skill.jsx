import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { techStack } from "../../data/data";
import GitHubGreen from "../GitHub/GitHubGreen";
import "./Skill.css";
const Skill = () => {
  // const [isLargerThan] = useMediaQuery("(min-width: 426px)");
  const [isSmallerThan] = useMediaQuery("(min-width: 769px)");

  // const hovering = {
  //   transform: "scale(1.1)",
  //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  //   bg: "skyblue",
  //   px: "0.5rem",
  // };
  return (
    <>
      <Box id="skill" min-h={"100vh"} m="auto" w={"95%"} my={"7rem"}>
        <Box mx={"4"} my={"4"}>
          <Heading textAlign={"center"}>
            Ski<span style={{ color: "rgb(220, 20, 60)" }}>lls</span>
          </Heading>
        </Box>
        <Divider />
        <Text
          fontSize={"2xl"}
          fontWeight={"semibold"}
          textAlign={"center"}
          textDecoration={"underline"}
          my={"5"}>
          Tech <span style={{ color: "rgb(220, 20, 60)" }}>Skills</span>
        </Text>
        <SimpleGrid mt={"8"} columns={[3, 4, 5]} mx={"4"} gap="1rem">
          {techStack.map((el, index) => (
            <Tooltip hasArrow label={el.name}>
              <Box
                my={"5"}
                py={"3"}
                key={index}
                transition={"all 0.9s ease"}
                boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                mx={["1", "2", "3", "5"]}
                _hover={{
                  transform: "scale(1.2)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                  bg: "skyblue",
                }}>
                <Image
                  w="30%"
                  alt={el.name}
                  src={el.link}
                  className="w-12"
                  ml={"auto"}
                  mr={"auto"}
                  display={"block"}
                />
                {!isSmallerThan && (
                  <Text
                    fontSize={["xs", "sm", "md", "lg"]}
                    align="center"
                    fontWeight={"semibold"}>
                    {el.name}
                  </Text>
                )}
              </Box>
            </Tooltip>
          ))}
        </SimpleGrid>
        <Divider />
        <GitHubGreen />
      </Box>
    </>
  );
};

export default Skill;
