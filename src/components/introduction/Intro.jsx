import "./intro.css";
import profile from "../../img/myProfile.png";
import { BsFillPlayCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isLargerThan] = useMediaQuery("(min-width: 489px)");

  return (
    <Flex
      id="intro"
      h={"110vh"}
      lineHeight={"1rem"}
      flexDirection={isLargerThan ? "row" : "column"}
    >
      <Flex alignItems={"center"} alignContent={"center"} flex={"1"}>
        <Flex
          p="50px"
          h="50%"
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text fontSize={"30px"} fontWeight={"semibold"} my={"5"}>
            Hello, <br />
            <br />
            My name <br />
            <br />
            is
          </Text>
          <Heading className={isLargerThan ? "i-name" : "typewriter"}>
            <Text className="type">
              Naresh <span style={{ color: "#59b256" }}>Rajput</span>
            </Text>
          </Heading>
          {/* {isLarger ? (
            <Box className="i-title">
              <Box className="i-title-wrapper">
                <Box className="i-title-item">Full Stack Developer</Box>
                <Box className="i-title-item">Chakra UI</Box>
                <Box className="i-title-item">React</Box>
                <Box className="i-title-item">Javascript</Box>
                <Box className="i-title-item">Html/CSS</Box>
              </Box>
            </Box>
          ) : null} */}
          <Flex gap="15px" marginBottom={"1rem"} my={"5"}>
            <Tooltip label="My Github">
              <Box>
                <a href="https://github.com/nmewada01" target="blank">
                  <BsGithub size="2rem" color={darkMode ? "white" : "green"} />
                </a>
              </Box>
            </Tooltip>
            <Tooltip label="My Linkedin">
              <Box>
                <a
                  href="https://www.linkedin.com/in/naresh-rajput-659ab5220/"
                  target="blank"
                >
                  <BsLinkedin
                    size="2rem"
                    color={darkMode ? "white" : "green"}
                  />
                </a>
              </Box>
            </Tooltip>
          </Flex>

          {/* --------------------------------------------------------------------------------------------- */}
          <Tooltip label={"Click To Download Resume"}>
            <Box>
              <a
                className="resume_link"
                href={require("../../resume/Naresh_Rajput_Resume.pdf")}
                download="Naresh_Rajput's Resume"
                my={"5"}
              >
                <Flex
                  alignItems={"center"}
                  bg={darkMode ? "white" : "#2a3132"}
                  color={darkMode ? "black" : "white"}
                >
                  Resume
                  <BsFillPlayCircleFill />
                </Flex>
              </a>
            </Box>
          </Tooltip>
          {/* ------------------------------------------------------------------------------------------------------ */}

          {/* <p className="i-desc">
           
          </p> */}
        </Flex>
      </Flex>
      <Box className="i-right" pt={"5"}>
        <Box className="i-bg"></Box>
        <Image
          src={profile}
          alt="Naresh Rajput"
          width="100%"
          height={["130%", "100%"]}
          object-fit="cover"
          position="absolute"
        />
      </Box>
    </Flex>
  );
};

export default Intro;

//source code by lama dev group
//youtube channel lama dev
