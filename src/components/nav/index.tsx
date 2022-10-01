import React, { useState } from "react";
import {
  Controls,
  NavContainer,
  MainNavContainer,
  MainNav,
  UtilityNavContainer,
  UtilityNav,
} from "./styles";
import { IconButton } from "../icon-button";
import { Burger } from "../burger";
import { Panel } from "../panel";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

const mainNavVariants = {
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const navItemAbout = {
  enter: {
    opacity: 1,
    x: "2rem",
  },
  exit: {
    opacity: 0,
    x: 0,
  },
};

const navItemWork = {
  enter: {
    opacity: 1,
    x: "6rem",
  },
  exit: {
    opacity: 0,
    x: "8rem",
  },
};

const navItemResume = {
  enter: {
    opacity: 1,
    x: "4rem",
  },
  exit: {
    opacity: 0,
    x: "3rem",
  },
};

const utilNavItem = {
  enter: {
    opacity: 1,
    y: -10,
  },
  exit: {
    opacity: 0,
    y: 0,
  },
};

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleButtonClick = () => {
    if (!showNav) {
      setOpen(true);
    } else {
      setShowNav(false);
    }
  };
  const handlePanelAnimationEnd = () => {
    setShowNav(open);
  };

  const handleNavAnimationEnd = () => {
    if (open && !showNav) {
      setOpen(false);
    }
  };
  return (
    <>
      <Controls>
        <IconButton onClick={handleButtonClick} active={open}>
          <Burger active={open} />
        </IconButton>
      </Controls>
      <Panel
        direction="btt"
        show={open}
        durationIn="0.3s"
        durationOut="0.3s"
        lockScroll
        onAnimationEnd={handlePanelAnimationEnd}
      >
        <NavContainer>
          <div
            style={{
              background: "red",
              width: 80,
              height: 80,
              flexShrink: 0,
              borderRadius: "50%",
            }}
          ></div>
          <MainNavContainer
            variants={mainNavVariants}
            animate={showNav ? "enter" : "exit"}
            initial="exit"
            exit={showNav ? "exit" : "enter"}
            onAnimationComplete={handleNavAnimationEnd}
          >
            <MainNav>
              <motion.li variants={navItemAbout}>
                <Link
                  to="/about/"
                  activeStyle={{ color: "red" }}
                  partiallyActive={true}
                >
                  About
                </Link>
              </motion.li>
              <motion.li variants={navItemWork}>Work</motion.li>
              <motion.li variants={navItemResume}>Resume</motion.li>
            </MainNav>
          </MainNavContainer>
          <UtilityNavContainer
            variants={mainNavVariants}
            animate={showNav ? "enter" : "exit"}
            initial="exit"
            exit={showNav ? "exit" : "enter"}
          >
            <UtilityNav>
              <motion.li variants={utilNavItem}>Codepen</motion.li>
              <motion.li variants={utilNavItem}>Github</motion.li>
              <motion.li variants={utilNavItem}>Tumblr</motion.li>
              <motion.li variants={utilNavItem}>Twitter</motion.li>
            </UtilityNav>
          </UtilityNavContainer>
        </NavContainer>
      </Panel>
    </>
  );
};
