import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={styles.root}>
      <div className={styles.navsCont}>
        <Link
          to="intro"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>Intro</div>
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>About</div>
        </Link>
        <Link
          to="portfoliolist"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>Project</div>
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={1000}
          activeClass={styles.active}
          spy={true}
          hashSpy={true}
        >
          <div className={styles.nav}>Contact</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


