import "./intro.css";
import profile from "../../img/myProfile.png";
import { BsFillPlayCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { Box, Heading, Image, Text } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Box className="i" id="intro">
      <Box className="i-left">
        <Box className="i-left-wrapper">
          <Text className="i-intro">Hello, My name is</Text>
          <Heading className="i-name">
            Naresh <span style={{ color: "#59b256" }}>Rajput</span>
          </Heading>
          <Box className="i-title">
            <Box className="i-title-wrapper">
              <Box className="i-title-item">Full Stack Developer</Box>
              <Box className="i-title-item">Chakra UI</Box>
              <Box className="i-title-item">React</Box>
              <Box className="i-title-item">Javascript</Box>
              <Box className="i-title-item">Html/CSS</Box>
            </Box>
          </Box>
          <Box style={{ display: "flex", gap: "15px", marginBottom: "1rem" }}>
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

          <Box class="wrapper">
            <a
              className="resume_link"
              href="https://drive.google.com/drive/folders/1ACwtO3YPLTFm95n9KqqH-PM16CASyZG8"
              target="blank"
            >
              <span>
                Resume
                <BsFillPlayCircleFill />
              </span>
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
