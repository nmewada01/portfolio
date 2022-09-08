import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
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
          <Box className={styles.nav}>Intro</Box>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <Box className={styles.nav}>About</Box>
        </Link>
        <Link
          to="portfoliolist"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <Box className={styles.nav}>Project</Box>
        </Link>
        <Link
          to="skill"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <Box className={styles.nav}>Skill</Box>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <Box className={styles.nav}>Contact</Box>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;


