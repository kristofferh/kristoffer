import React, { useState } from "react";
import {
  Controls,
  NavContainer,
  MainNavContainer,
  MainNav,
  UtilityNavContainer,
  UtilityNav,
  PrimaryNavLink,
} from "./styles";
import { IconButton } from "../icon-button";
import { Burger } from "../burger";
import { Panel } from "../panel";
import { motion } from "framer-motion";

const PRIMARY_NAV_LINKS = [
  {
    name: "about",
    link: "/about/",
    label: "About",
    variants: {
      enter: {
        opacity: 1,
        x: "2rem",
      },
      exit: {
        opacity: 0,
        x: 0,
      },
    },
  },
  {
    name: "work",
    link: "/work/",
    label: "Work",
    variants: {
      enter: {
        opacity: 1,
        x: "6rem",
      },
      exit: {
        opacity: 0,
        x: "8rem",
      },
    },
  },
  {
    name: "resume",
    link: "/resume/",
    label: "Resume",
    variants: {
      enter: {
        opacity: 1,
        x: "4rem",
      },
      exit: {
        opacity: 0,
        x: "3rem",
      },
    },
  },
];

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

const utilNavItem = {
  enter: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: 10,
  },
};

interface Props {
  isDesktop: boolean;
}

export const Nav: React.FC<Props> = ({ isDesktop }) => {
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

  const handleNavClick = () => {
    setShowNav(false);
  };

  return (
    <>
      <Controls>
        <IconButton onClick={handleButtonClick} active={open}>
          <Burger active={open} />
        </IconButton>
      </Controls>
      <Panel
        direction={isDesktop ? "rtl" : "btt"}
        show={open}
        durationIn="0.3s"
        durationOut="0.3s"
        lockScroll
        onAnimationEnd={handlePanelAnimationEnd}
        maxWidth={isDesktop ? "800px" : undefined}
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
              {PRIMARY_NAV_LINKS.map((item) => {
                return (
                  <motion.li variants={item.variants} key={item.name}>
                    <PrimaryNavLink
                      to={item.link}
                      partiallyActive
                      onClick={handleNavClick}
                    >
                      {item.label}
                    </PrimaryNavLink>
                  </motion.li>
                );
              })}
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
