import "./intro.css";
import profile from "../../img/myProfile.png";
import { BsFillPlayCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const Intro = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 430px)");

  return (
    <Box className="i" id="intro" lineHeight={"1rem"}>
      <Box className="i-left">
        <Box className="i-left-wrapper">
          <Text className="i-intro" my={'5'}>Hello, My name is</Text>
          <Heading className={isLargerThan ? "i-name" : "typeWritertheme"}>
            Naresh <span style={{ color: "#59b256" }}>Rajput</span>
          </Heading>
          {isLargerThan ? (
            <Box className="i-title">
              <Box className="i-title-wrapper">
                <Box className="i-title-item">Full Stack Developer</Box>
                <Box className="i-title-item">Chakra UI</Box>
                <Box className="i-title-item">React</Box>
                <Box className="i-title-item">Javascript</Box>
                <Box className="i-title-item">Html/CSS</Box>
              </Box>
            </Box>
          ) : null}
          <Box style={{ display: "flex", gap: "15px", marginBottom: "1rem" }} my={'5'}>
            <Box>
              <a href="https://github.com/nmewada01" target="blank">
                <BsGithub size="2rem" style={{ color: "blue" }} />
              </a>
            </Box>
            <Box>
              <a
                href="https://www.linkedin.com/in/naresh-rajput-659ab5220/"
                target="blank"
              >
                <BsLinkedin size="2rem" style={{ color: "blue" }} />
              </a>
            </Box>
          </Box>

          {/* --------------------------------------------------------------------------------------------- */}

          <Box>
            <a
              className="resume_link"
              href={require("../../resume/Naresh's Resume.pdf")}
              download="Naresh's Resume"
              my={'5'}
            >
              <Flex alignItems={"center"}>
                Resume
                <BsFillPlayCircleFill />
              </Flex>
            </a>
          </Box>

          {/* ------------------------------------------------------------------------------------------------------ */}

          {/* <p className="i-desc">
           
          </p> */}
        </Box>
      </Box>
      <Box className="i-right">
        <Box className="i-bg"></Box>
        <Image src={profile} alt="" className="i-img" />
      </Box>
    </Box>
  );
};

export default Intro;

//source code by lama dev group
//youtube channel lama dev
