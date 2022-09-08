import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { techStack } from "../../data/data";

const Skill = () => {
  return (
    <>
      <Box id="skill" h={"80vh"} m="auto" w={"95%"} my={"5rem"}>
        <Box mx={"4"}>
          <Heading>
            Ski<span style={{ color: "#59b256" }}>lls</span>
          </Heading>
        </Box>
        <SimpleGrid mt={"8"} columns={["3", "3", "4", "5"]} mx={"4"}>
          {techStack.map((el, index) => (
            <Box my={"8"}>
              <Image w="20%" alt="" src={el.link} className="w-12" />
              <Text fontSize={"md"} ml={"4"}>
                {el.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Skill;
