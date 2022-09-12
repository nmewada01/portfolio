import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { techStack } from "../../data/data";
import "./Skill.css"
const Skill = () => {
  return (
    <>
      <Box id="skill" h={"80vh"} m="auto" w={"95%"} my={"5rem"}>
        <Box mx={"4"}>
          <Heading>
            Ski<span style={{ color: "#59b256" }}>lls</span>
          </Heading>
        </Box>
        <SimpleGrid mt={"8"} columns={[3, 4, 5]} mx={"4"} gap="1rem" >
          {techStack.map((el, index) => (
            <Box my={"8"} transition={'all 0.9s ease'} _hover={{transform:"scale(1.5)"}}   >
              <Image  w="50%" alt="" src={el.link} className="w-12" ml={'auto'} mr={'auto'}  display={'block'}/>
              <Text fontSize={"lg"} ml={"4"} align="center">
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
