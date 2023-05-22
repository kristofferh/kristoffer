import React, { useState, useEffect } from "react";
import {
  Controls,
  NavContainer,
  MainNavContainer,
  MainNav,
  UtilityNavContainer,
  UtilityNav,
  PrimaryNavLink,
  TempLogo,
  TextSpin,
} from "./styles";
import { IconButton } from "../icon-button";
import { Burger } from "../burger";
import { Panel } from "../panel";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollData } from "../../utils/hooks";

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

const SOCIAL_NAV_LINKS = [
  {
    name: "codepen",
    link: "https://codepen.io/kristofferh/",
    label: "Codepen",
  },
  {
    name: "github",
    link: "https://github.com/kristofferh",
    label: "Github",
  },
  {
    name: "tumblr",
    link: "http://kris.tumblr.com/",
    label: "Tumblr",
  },
  {
    name: "twitter",
    link: "https://twitter.com/_kris",
    label: "Twitter",
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
  const { speed, direction } = useScrollData();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowNav(false);
    }
  };

  useEffect(() => {
    if (showNav) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showNav]);

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

  const rotation = speed.y * (direction.y === "up" ? -1 : 1) * 0.05;
  return (
    <>
      <Controls>
        <IconButton onClick={handleButtonClick} active={open} size={64}>
          <AnimatePresence>
            {open ? (
              <Burger active={open} size={32} />
            ) : (
              <TextSpin
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                Menu
              </TextSpin>
            )}
          </AnimatePresence>
        </IconButton>
      </Controls>
      <Panel
        direction={isDesktop ? "rtl" : "btt"}
        show={open}
        durationIn="0.3s"
        durationOut="0.2s"
        lockScroll
        onAnimationEnd={handlePanelAnimationEnd}
        maxWidth={isDesktop ? "768px" : undefined}
      >
        <NavContainer>
          <TempLogo />
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
              {SOCIAL_NAV_LINKS.map((link) => (
                <motion.li variants={utilNavItem} key={link.name}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </UtilityNav>
          </UtilityNavContainer>
        </NavContainer>
      </Panel>
    </>
  );
};
