import React, { useState } from "react";
import { Controls } from "./styles";
import { IconButton } from "../icon-button";
import { Burger } from "../burger";
import { Panel } from "../panel";
import { motion, AnimatePresence } from "framer-motion";

export const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const handleButtonClick = () => {
    console.log("click");
    setOpen(!open);
  };
  const handleAnimationEnd = () => {
    console.log("done");
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
          {showNav ? (
            <nav>
              <ul>
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
                  About
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Resume
                </motion.li>
              </ul>
            </nav>
          ) : null}
        </AnimatePresence>
      </Panel>
    </>
  );
};
