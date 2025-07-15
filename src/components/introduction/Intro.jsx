import "./intro.css";
import profile from "../../img/profile.webp";
import { BsFillPlayCircleFill, BsGithub, BsLinkedin } from "react-icons/bs";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Tooltip,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../context/context";

const accent = "rgb(220, 20, 60)";

const Intro = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      id="intro"
      direction={isLargerThan ? "row" : "column"}
      align="center"
      justify="center"
      w="100%"
      minH={["90vh", "100vh"]}
      px={[4, 8, 16]}
      py={[8, 8, 0]}
      gap={[8, 12, 24]}>
      {/* Left Section: Text */}
      <Flex
        flex="1"
        direction="column"
        align={isLargerThan ? "flex-start" : "center"}
        justify="center"
        gap={4}>
        <Text
          fontSize={["lg", "xl", "2xl"]}
          color={darkMode ? "#fff" : "#222"}
          mb={1}>
          Hello, my name is
        </Text>
        <Heading
          fontSize={["4xl", "5xl", "6xl"]}
          color={accent}
          fontWeight="extrabold"
          mb={1}
          lineHeight="1.2"
          color={darkMode ? "#fff" : "#222"}>
          Naresh Mewada
        </Heading>
        <Text
          id="animatedText"
          fontSize={["2xl", "3xl", "4xl"]}
          fontWeight="medium"
          textAlign={isLargerThan ? "left" : "center"}
          whiteSpace="nowrap"
          overflow="hidden"
          display="flex"
          alignItems="center">
          <span className="typewriter">
            <span> I'm a </span>
            <span style={{ color: accent, fontWeight: 800 }} className="type">
              Full Stack Developer.
            </span>
          </span>
        </Text>
        <Flex gap={4} mb={4}>
          <Tooltip label="My Github">
            <Box>
              <a
                href="https://github.com/nmewada01"
                target="_blank"
                rel="noreferrer">
                <BsGithub size="2rem" color={darkMode ? "#fff" : accent} />
              </a>
            </Box>
          </Tooltip>
          <Tooltip label="My Linkedin">
            <Box>
              <a
                href="https://www.linkedin.com/in/naresh-rajput-659ab5220/"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin size="2rem" color={darkMode ? "#fff" : accent} />
              </a>
            </Box>
          </Tooltip>
        </Flex>
        <Box>
          <a
            className="resume_link"
            href={require("../../resume/Naresh_Mewada.pdf")}
            download="Naresh_Mewada's Resume">
            <Button
              colorScheme="red"
              variant="solid"
              size="lg"
              bg={accent}
              _hover={{ bg: "#b71c1c" }}
              color="#fff"
              fontWeight={"bold"}
              px={8}
              py={6}
              fontSize="lg">
              Resume
            </Button>
          </a>
        </Box>
      </Flex>

      {/* Right Section: Image */}
      <Flex
        flex="1"
        align="center"
        justify="center"
        minH={["40vh", "50vh", "60vh"]}
        bgImage={`url(${
          process.env.PUBLIC_URL || ""
        }/assets/blob.da2ded7b.svg)`}
        bgSize="cover"
        bgPosition="center"
        borderRadius="2xl"
        className="intro-image-bg">
        <Box
          className="zoom intro-image-circle"
          w={["210px", "240px", "260px"]} // Small red circle
          h={["210px", "240px", "260px"]}
          minW={["210px", "240px", "260px"]}
          minH={["210px", "240px", "260px"]}
          maxW="260px"
          maxH="260px"
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <Image
            src={profile}
            alt="Naresh Mewada"
            borderRadius="50%"
            className="zoomDelay"
            w={["210px", "240px", "260px"]} // Image is bigger than the circle
            h={["220px", "270px", "310px"]}
            position="absolute"
            left="50%"
            top="50%"
            style={{
              transform: "translate(-50%, -50%)",
              zIndex: 2,
            }}
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Intro;
