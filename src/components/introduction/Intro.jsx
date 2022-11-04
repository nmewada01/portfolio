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
    <Box
      className="i"
      id="intro"
      lineHeight={"1rem"}
      flexDirection={isLargerThan ? "row" : "column"}
    >
      <Box className="i-left">
        <Box className="i-left-wrapper">
          <Text className="i-intro" my={"5"}>
            Hello, <br />
            <br />
            My name <br />
            <br />
            is
          </Text>
          <Heading className={isLargerThan ? "i-name" : "typeWritertheme"}>
            Naresh <span style={{ color: "#59b256" }}>Rajput</span>
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
          <Box
            display="flex"
            gap="15px"
            marginBottom={"1rem"}
            // style={{ display: "flex", gap: "15px", marginBottom: "1rem" }}
            my={"5"}
          >
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
          </Box>

          {/* --------------------------------------------------------------------------------------------- */}
          <Tooltip label={"Click To Download My Resume"}>
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
        </Box>
      </Box>
      <Box className="i-right">
        <Box className="i-bg"></Box>
        <Image src={profile} alt="Naresh Rajput" className="i-img" />
      </Box>
    </Box>
  );
};

export default Intro;

//source code by lama dev group
//youtube channel lama dev
