import {
  Box,
  Code,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import "./portfolio.css";
import { FaEye, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";
const PortFolio = ({
  img,
  link1,
  link2,
  ProjectName,
  description,
  techstack,
  id,
  feature,
  role,
}) => {
  const [isLargerThan] = useMediaQuery("(min-width: 769px)");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Stack
        key={id}
        align="stretch"
        w={isLargerThan ? "85%" : "100%"}
        h={["60vh", "80vh", "90vh", "80vh"]}
        borderRadius="10px 10px 0px 0px"
        overflow={"hidden"}
        my={"20px"}
        mx={"10px"}
        p={"2"}
        border="1px solid skyblue"
        _hover={{ border: "2px solid #59b256" }}
      >
        <Flex
          justify={"center"}
          gap={"1rem"}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Tooltip label="Deploy">
            <Text>
              <a href={link2} target="_blank" rel="noreferrer">
                <Box mx={"5"} my={"2"} fontSize={["xl", "2xl", "3xl", "4xl"]}>
                  <FaEye />
                </Box>
              </a>
            </Text>
          </Tooltip>
          <Tooltip label="Source Code">
            <Text>
              <a href={link1} target="_blank" rel="noreferrer">
                <Box mx={"5"} my={"2"} fontSize={["xl", "2xl", "3xl", "4xl"]}>
                  <FaGithub />
                </Box>
              </a>
            </Text>
          </Tooltip>
        </Flex>
        <Box>
          <Box
           
            color={darkMode ? "whitesmoke" : "black"}
            position={"sticky"}
            zIndex={"2"}
          >
            <Box>
              <Heading
                color={"#59b256"}
                fontSize={"2xl"}
                fontWeight={"semibold"}
                textDecoration={"underline"}
                textAlign={"center"}
                my={"1"}
              >
                {ProjectName}
              </Heading>
            </Box>
            <Box>
              <Text fontSize={["xs", "sm", "md", "md"]}> {description}</Text>
            </Box>
            {/* <Box>
              <Text>
                <Code fontSize={"lg"} fontWeight={"bold"} color={"green"}>
                  Feature:
                </Code>
                {feature}
              </Text>
            </Box>
            <Box>
              <Text>
                <Code fontSize={"lg"} fontWeight={"bold"} color={"green"}>
                  Role:
                </Code>
                {role}
              </Text>
            </Box> */}
            <Box>
              <Text fontSize={["xs", "sm", "md", "md"]}>
                <Code
                 
                  fontWeight={"bold"}
                  color={"green"}
                >
                  Tech Stack:
                </Code>{" "}
                {techstack}
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          mt={"2"}
          display="inline-block"
          overflow={"hidden"}
          border="1px solid green"
        >
          <Box>
            <Image
              transition="transform .4s"
              display="block"
              m="auto"
              _hover={{ transform: "scale(1.2)", transformOrigin: "50% 50%" }}
              src={img}
              alt=""
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default PortFolio;
