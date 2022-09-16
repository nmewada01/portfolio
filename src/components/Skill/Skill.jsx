import { Box, Divider, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { techStack } from "../../data/data";
import GitHubGreen from "../GitHub/GitHubGreen";
import "./Skill.css"
const Skill = () => {
  return (
    <>
      <Box id="skill" min-h={"100vh"} m="auto" w={"95%"} my={"7rem"}>
        <Box mx={"4"}>
          <Heading>
            Ski<span style={{ color: "#59b256" }}>lls</span>
          </Heading>
        </Box>
        <SimpleGrid mt={"8"} columns={[3, 4, 5]} mx={"4"} gap="1rem" >
          {techStack.map((el, index) => (
            <Box my={"8"} transition={'all 0.9s ease'} _hover={{transform:"scale(1.2)",boxShadow:"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"}}   >
              <Image  w="50%" alt="" src={el.link} className="w-12" ml={'auto'} mr={'auto'}  display={'block'}/>
              <Text fontSize={"lg"} ml={"4"} align="center">
                {el.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
        <Divider/>
        <GitHubGreen />
      </Box>
    </>
  );
};

export default Skill;
