import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { Tooltip } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import pro from "../../img/profile.webp";
import { ThemeContext } from "../../context/context";
const Navbar = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 769px)");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Box>
      {isLargerThan ? (
        <Flex
          w={"100%"}
          mx={"5"}
          position={"fixed"}
          zIndex={"99"}
          px={"5"}
          bg={darkMode ? "rgb(15, 22, 36)" : "rgb(237, 242, 248)"}>
          <Flex
            fontSize={"lg"}
            gap={"14px"}
            my={"2"}
            color={darkMode ? "#fff" : "#222"}
            fontWeight={"semibold"}>
            <Link
              to="intro"
              smooth={true}
              duration={1000}
              activeClass={styles.activeAvatar}
              spy={true}
              hashSpy={true}>
              <Box>
                <Tooltip label="Naresh Mewada" fontSize="md">
                  <Avatar className={styles.avatarBorder} size="sm" src={pro} />
                </Tooltip>
              </Box>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
              hashSpy={true}>
              <Box>
                <Tooltip label="About Me" fontSize="md">
                  About
                </Tooltip>
              </Box>
            </Link>
            <Link
              to="skill"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
              hashSpy={true}>
              <Box>
                <Tooltip label="My Skills" fontSize="md">
                  Skill
                </Tooltip>
              </Box>
            </Link>
            <Link
              to="portfoliolist"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
              hashSpy={true}>
              <Box>
                <Tooltip label="My Projects" fontSize="md">
                  Project
                </Tooltip>
              </Box>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
              hashSpy={true}>
              <Box>
                <Tooltip label="My Contact" fontSize="md">
                  Contact
                </Tooltip>
              </Box>
            </Link>
          </Flex>
        </Flex>
      ) : (
        <DrawerExample darkMode={darkMode} />
      )}
    </Box>
  );
};

export default Navbar;

export function DrawerExample({ darkMode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
        mx={"5"}
        my={"2"}
        color={darkMode ? "white" : "#59b256"}
        fontSize={"lg"}
        bg={darkMode && "#2a3132"}
        position={"fixed"}
        zIndex={"99"}>
        <Icon as={HamburgerIcon} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"#59b256"}>Naresh Mewada</DrawerHeader>

          <DrawerBody lineHeight={"10vh"} textAlign={"center"}>
            <Box>
              <Link
                to="intro"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}>
                <Box _hover={{ bgColor: "darkgrey" }}>Introduction</Box>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}>
                <Box _hover={{ bgColor: "darkgrey" }}>About Me</Box>
              </Link>

              <Link
                to="skill"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}>
                <Box _hover={{ bgColor: "darkgrey" }}>Skills</Box>
              </Link>
              <Link
                to="portfoliolist"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}>
                <Box _hover={{ bgColor: "darkgrey" }}>Project</Box>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}>
                <Box _hover={{ bgColor: "darkgrey" }}>Contact</Box>
              </Link>

              <Box my="1">
                <Box m="0" p="0" _hover={{ bgColor: "darkgrey" }}>
                  <a
                    href="/Naresh_Mewada.pdf"
                    target="_blank"
                    rel="noreferrer"
                    download>
                    Resume
                  </a>
                </Box>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
