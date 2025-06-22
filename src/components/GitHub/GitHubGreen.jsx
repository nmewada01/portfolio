import { Box, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubGreen = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 750px)");
  return (
    <div>
      <Text
        fontSize={"2xl"}
        fontWeight={"semibold"}
        mx={isLargerThan ? "2rem" : "1rem"}
        textAlign={"center"}
        textDecoration={"underline"}
        my={"7"}>
        Sta<span style={{ color: "rgb(220, 20, 60)" }}>tistics</span>
      </Text>
      <Box min-h="100vh" w="95%" m="1rem" my={"3rem"}>
        <Flex justify={"center"} my={"9"} w="90%" m="auto">
          <GitHubCalendar blockSize={25} blockMargin={5} username="nmewada01" />
        </Flex>
        <Flex
          justify={"center"}
          m="auto"
          min-h="50vh"
          transition={"all 0.9s ease"}
          _hover={{ transform: "scale(1.1)" }}>
          <Image
            width={["95%", "90%", "75%", "50%"]}
            src="https://github-readme-streak-stats.herokuapp.com/?user=nmewada01"
            alt="nmewada01"
          />
        </Flex>
      </Box>
    </div>
  );
};

export default GitHubGreen;
