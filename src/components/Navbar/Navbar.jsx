import { Avatar, Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
import { Tooltip } from "@chakra-ui/react";
import {
  ArrowRightIcon,
  CalendarIcon,
  InfoIcon,
  PhoneIcon,
  StarIcon,
} from "@chakra-ui/icons";
import pro from "../../img/png.png";
const Navbar = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.navsCont}>
        <Link
          to="intro"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <Box className={styles.nav}>
            <Tooltip label="Introduction" fontSize="md">
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
          <Box className={styles.nav}>
            <Tooltip label="About" fontSize="md">
              <InfoIcon w={6} h={6} />
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
          <Box className={styles.nav}>
            <Tooltip label="My Skills" fontSize="md">
              <StarIcon w={6} h={6} />
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
          <Box className={styles.nav}>
            <Tooltip label="My Projects" fontSize="md">
              <CalendarIcon w={6} h={6} />
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
          <Box className={styles.nav}>
            <Tooltip label="My Contact" fontSize="md">
              <PhoneIcon w={6} h={6} />
            </Tooltip>
          </Box>
        </Link>

        <Box className={styles.nav} my="1">
          <Box m="0" p="0">
            <a
              href={require("../../resume/Naresh_Rajput_Resume.pdf")}
              target="_blank"
              rel="noreferrer"
              download
            >
              <Tooltip label="Resume" fontSize="md">
                <ArrowRightIcon w={6} h={6} mb="1" />
              </Tooltip>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
