import React from "react";
import "../styles/components/navbar.css";
import { motion } from "framer-motion";

import Svg from "../assets/Svg";
import {
  bookmark,
  game,
  home,
  question,
  settings,
  user,
} from "../Constants/svgs";
import CustomToggle from "../assets/CustomToggle";

export default function NavBar() {
  return (
    <div className="navbar">
      <motion.div
        initial={{ x: -550, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2 }}
        className="navbarcontainer"
      >
        <div className="logo">
          <Svg path={game} classlist="logo__icon" view="-2 0 23 20" />
        </div>
        <div className="navbarlist">
          <div className="navbarlist__item">
            <Svg
              path={home}
              classlist="navbarlist__item__icon"
              view="0 0 32 32"
            />
          </div>
          <div className="navbarlist__item">
            <Svg
              path={user}
              classlist="navbarlist__item__icon"
              view="0 0 20 20"
            />
          </div>
          <div className="navbarlist__item ">
            <Svg
              path={bookmark}
              classlist="navbarlist__item__icon"
              view="0 0 18 18"
            />
          </div>
          <div className="navbarlist__item ">
            <Svg
              path={settings}
              classlist="navbarlist__item__icon"
              view="0 0 25 25"
            />
          </div>
          <div className="navbarlist__item">
            <Svg
              path={question}
              classlist="navbarlist__item__icon"
              view="-1 -1 22 22"
            />
          </div>
        </div>
        <div className="navbarlist__item">
          <CustomToggle />
        </div>
      </motion.div>
    </div>
  );
}
