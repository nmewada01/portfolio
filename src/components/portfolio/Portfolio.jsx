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
              textAlign={"center"}
              my={"1"}
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

        <Box mt={"2"} display="inline-block" overflow={"hidden"}>
          <Image
            transition="transform .4s"
            display="block"
            m="auto"
            w={"100%"}
            _hover={{ transform: "scale(1.2)", transformOrigin: "50% 50%" }}
            src={img}
            alt=""
          />
        </Box>
      </Box>
    </>
  );
};

export default PortFolio;
