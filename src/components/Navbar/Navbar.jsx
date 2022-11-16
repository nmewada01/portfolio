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
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import pro from "../../img/png.png";
const Navbar = () => {
  const [isLargerThan] = useMediaQuery("(min-width: 769px)");
  return (
    <Box>
      {isLargerThan ? (
        <Flex mx={"5"} bg={"#f1f1f2"} position={"fixed"} zIndex={"99"} px={"5"}>
          <Flex
            fontSize={"lg"}
            gap={"14px"}
            my={"2"}
            color={" #59b256"}
            fontWeight={"semibold"}
          >
            <Link
              to="intro"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
              hashSpy={true}
            >
              <Box>
                <Tooltip label="Naresh Rajput" fontSize="md">
                  <Avatar size="sm" src={pro} />
                </Tooltip>
              </Box>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={1000}
              activeClass={styles.active}
              spy={true}
              hashSpy={true}
            >
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
              hashSpy={true}
            >
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
              hashSpy={true}
            >
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
              hashSpy={true}
            >
              <Box>
                <Tooltip label="My Contact" fontSize="md">
                  Contact
                </Tooltip>
              </Box>
            </Link>
            <Box>
              <Box m="0" p="0">
                <a
                  href={require("../../resume/Naresh_Rajput_Resume.pdf")}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  <Tooltip label="Click To Download Resume" fontSize="md">
                    Resume
                  </Tooltip>
                </a>
              </Box>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <DrawerExample />
      )}
    </Box>
  );
};

export default Navbar;

export function DrawerExample() {
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
        color={"#59b256"}
        fontSize={"lg"}
        bg={"#f1f1f2"}
        position={"fixed"}
        zIndex={"99"}
      >
        <Icon as={HamburgerIcon} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader color={"#59b256"}>Naresh Rajput</DrawerHeader>

          <DrawerBody lineHeight={"10vh"} textAlign={"center"}>
            <Box>
              <Link
                to="intro"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}
              >
                <Box _hover={{ bgColor: "darkgrey" }}>Introduction</Box>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}
              >
                <Box _hover={{ bgColor: "darkgrey" }}>About Me</Box>
              </Link>

              <Link
                to="skill"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}
              >
                <Box _hover={{ bgColor: "darkgrey" }}>Skills</Box>
              </Link>
              <Link
                to="portfoliolist"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}
              >
                <Box _hover={{ bgColor: "darkgrey" }}>Project</Box>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={1000}
                activeClass={styles.active}
                spy={true}
                hashSpy={true}
                onClick={() => onClose()}
              >
                <Box _hover={{ bgColor: "darkgrey" }}>Contact</Box>
              </Link>

              <Box my="1">
                <Box m="0" p="0" _hover={{ bgColor: "darkgrey" }}>
                  <a
                    href={require("../../resume/Naresh_Rajput_Resume.pdf")}
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
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
