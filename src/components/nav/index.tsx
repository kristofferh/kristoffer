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

const mainNavVariants = {
  enter: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.15,
      duration: 0.15,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
};

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleButtonClick = () => {
    setOpen(!open);
  };
  const handleAnimationEnd = () => {
    setShowNav(open);
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
        onAnimationEnd={handleAnimationEnd}
      >
        <AnimatePresence>
          <NavContainer>
            <div
              style={{
                background: "red",
                width: 80,
                height: 80,
                flexShrink: 0,
              }}
            >
              Logo
            </div>
            {showNav ? (
              <>
                <MainNavContainer>
                  <MainNav>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      About
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Work
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Resume
                    </motion.li>
                  </MainNav>
                </MainNavContainer>
                <UtilityNavContainer>
                  <UtilityNav>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Codepen
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Github
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Tumblr
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      Twitter
                    </motion.li>
                  </UtilityNav>
                </UtilityNavContainer>
              </>
            ) : null}
          </NavContainer>
        </AnimatePresence>
      </Panel>
    </>
  );
};
