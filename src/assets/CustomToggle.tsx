import React, { useState } from "react";
import "../styles/assets/customtoggle.css";
import { motion } from "framer-motion";
import Svg from "./Svg";
import { moon, sun } from "../Constants/svgs";

export default function CustomToggle() {
  const [toggled, setToggled] = useState(false);
  return (
    <motion.div
      className="togglecontainer"
      onClick={() => setToggled(!toggled)}
      animate={{
        backgroundColor: toggled ? "#f2e2ab" : "#092d3e",
      }}
    >
      <motion.div
        className="togglecontainer__toggle"
        animate={{
          left: toggled ? "50%" : "5%",
          //   backgroundColor: toggled ? "#777" : "#eee",
          opacity: toggled ? [0, 0.5, 1] : 1,
        }}
      >
        <Svg
          path={toggled ? sun : moon}
          classlist="toggleicon"
          view="0 0 23 23"
          style={{
            fill: "#eee",
            backgroundColor: !toggled ? "var(--primary-dark)" : "#ebbb40",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
