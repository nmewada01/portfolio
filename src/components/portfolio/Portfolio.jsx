import {
  Box,
  Code,
  Flex,
  Image,
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
}) => {
  const [isLargerThan] = useMediaQuery("(min-width: 769px)");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Box
        key={id}
        w={isLargerThan ? "85%" : "95%"}
        h={"60vh"}
        borderRadius="10px 10px 0px 0px"
        overflow={"hidden"}
        my={"20px"}
        mx={"10px"}
        border="1px solid skyblue"
        _hover={{ border: "3px solid skyblue" }}
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
                <Box mx={"5"} my={"2"} fontSize="2rem">
                  <FaEye />
                </Box>
              </a>
            </Text>
          </Tooltip>
          <Tooltip label="Source Code">
            <Text>
              <a href={link1} target="_blank" rel="noreferrer">
                <Box mx={"5"} my={"2"} fontSize="2rem">
                  <FaGithub />
                </Box>
              </a>
            </Text>
          </Tooltip>
        </Flex>
        <Box
          min-h={isLargerThan ? "10vh" : "15vh"}
          color={darkMode ? "whitesmoke" : "black"}
          position={"sticky"}
          zIndex={"2"}
        >
          <Box>
            <Text
              color={"#59b256"}
              fontSize={"lg"}
              fontWeight={"semibold"}
              textDecoration={"underline"}
            >
              {ProjectName}
            </Text>
          </Box>
          <Box>{description}</Box>
          <Box>
            <Text>
              <Code color={"green"}>Tech Stack:</Code> {techstack}
            </Text>
          </Box>
        </Box>

        <Image
          display={"block"}
          m="auto"
          my={"6"}
          w={isLargerThan ? "80%" : "90%"}
          _hover={{ transform: "scale(1.5)" }}
          transition="all 3s ease"
          src={img}
          alt=""
        />
      </Box>
    </>
  );
};

export default PortFolio;
