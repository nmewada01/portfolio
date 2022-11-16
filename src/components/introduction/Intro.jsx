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
      lineHeight={"1rem"}
      flexDirection={isLargerThan ? "row" : "column"}
      w={["100%", "100%", "100%", "100%"]}
      height={["100vh", "80vh", "90vh", "100vh"]}
    >
      <Flex alignItems={"center"} alignContent={"center"} flex={"1"}>
        <Flex
          p="50px"
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Text
            fontSize={["2xl", "lg", "2xl", "3xl"]}
            fontWeight={"semibold"}
            my={"5"}
          >
            Hello, <br />
            <br />
            My name <br />
            <br />
            is
          </Text>
          <Heading fontSize={["4xl", "xl", "4xl", "5xl"]}>
            <Text className="type">
              Naresh <span style={{ color: "#59b256" }}>Rajput</span>
            </Text>
          </Heading>
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
      <Box className="i-right" pt={isLargerThan ? "5" : null} mx={"5"}>
        <Box
          position={"absolute"}
          bgGradient={"linear(to-r, #59b256, #59b256)"}
          w={["100%", "100%", "100%", "100%"]}
          h={["45vh", "65vh", "75vh", "100%"]}
        ></Box>
        <Image
          src={profile}
          alt="Naresh Rajput"
          width={["100%", "100%", "100%", "100%"]}
          height={["45vh", "65vh", "75vh", "100%"]}
          position="absolute"
        />
      </Box>
    </Flex>
  );
};

export default Intro;

//source code by lama dev group
//youtube channel lama dev
