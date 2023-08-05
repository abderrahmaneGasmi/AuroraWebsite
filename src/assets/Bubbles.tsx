import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../styles/assets/bubbles.css";

const linearcolor = [
  "linear-gradient(to right top, #36f8e1, #3ed9c3, #40bba7, #3f9d8c, #3b8172)",
  "linear-gradient(to right top, #e9d42e, #f3b90b, #fa9c00, #ff7c0a, #ff5821)",
  // "linear-gradient(to right top, #f02a67, #e32655, #d42443, #c52333, #b62323)",
  " linear-gradient(to right top, #b0ff00, #aefa05, #acf50a, #aaf00f, #a8eb12)",
  "linear-gradient(to right top, #ff00b0, #fa04a8, #f508a0, #f00d98, #eb1291)",
  " linear-gradient(to right top, #00d8ff, #01d6fa, #05d5f5, #0bd3f0, #12d1eb)",
  "linear-gradient(to right top, #9d2af0, #8b29e2, #7928d3, #6926c5, #5823b6)",
];

export default function Bubbles() {
  return (
    <div className="bubblecontainer">
      <div className="glassmorph"></div>
      <Bubble
        style={{
          backgroundImage:
            "linear-gradient(to right top, #9d2af0, #8b29e2, #7928d3, #6926c5, #5823b6)",
          width: "50px",
          height: "170px",
          borderRadius: "50%",
          position: "absolute",
          bottom: "12%",
          left: "5%",
        }}
        num={5}
      />
      <Bubble
        style={{
          backgroundImage:
            "linear-gradient(to right top, #f02a67, #e32655, #d42443, #c52333, #b62323)",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          position: "absolute",
          top: "5%",
          left: "5%",
        }}
        num={10}
      />
      <Bubble
        style={{
          backgroundImage:
            "linear-gradient(to right top, #e9d42e, #f3b90b, #fa9c00, #ff7c0a, #ff5821)",
          width: "70px",
          height: "170px",
          borderRadius: "50%",
          position: "absolute",
          top: "5%",
          right: "5%",
        }}
        num={15}
      />
      <Bubble
        style={{
          backgroundImage:
            "linear-gradient(to right top, #36f8e1, #3ed9c3, #40bba7, #3f9d8c, #3b8172)",
          width: "170px",
          height: "170px",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(45deg)",
        }}
        num={20}
      />
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
        <SmallBubbles
          size={Math.min(Math.random() * 30, 10).toString() + "rem"}
          x={170}
          y={550}
          color={linearcolor[Math.floor(Math.random() * linearcolor.length)]}
        />
      ))}
    </div>
  );
}
const Bubble = ({
  style,
  num,
}: {
  style: React.CSSProperties;
  num: number;
}) => {
  return (
    <motion.div
      style={style}
      animate={{
        scale: [1, 1.2, 1.2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        y: [0, 0, 10, 10, 0],
        x: [0, 0, 40, 0, 0],
      }}
      transition={{
        duration: num,
        ease: "easeInOut",
        repeat: Infinity,
        // delay: num,
        // repeatDelay: num,
      }}
    ></motion.div>
  );
};

const SmallBubbles = ({
  size,
  x,
  y,
  color,
}: {
  size: string;
  x: number;
  y: number;
  color: string;
}) => {
  const [randomX, setRandomX] = useState(x);
  const [randomY, setRandomY] = useState(y);

  useEffect(() => {
    // const updatePosition = () => {
    //   // Calculate a random position for the bubble within the window bounds
    //   const newX = Math.random() * window.innerWidth;
    //   const newY = Math.random() * window.innerHeight;

    //   setRandomX(newX);
    //   setRandomY(newY);
    // };

    // // Animate the bubble's position with a random delay
    // const intervalId = setInterval(updatePosition, Math.random() * 2000);

    // // Clear the interval when the component unmounts
    // return () => {
    //   clearInterval(intervalId);
    // };
    const newX = Math.random() * window.innerWidth;
    const newY = Math.random() * window.innerHeight;

    setRandomX(newX);
    setRandomY(newY);
  }, []);

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundImage: color,
        position: "absolute",
        // top: randomY,
        // left: randomX,
      }}
      animate={{
        scale: [1, 1.4, 1],
        x: [randomX, randomX + 10, randomX],
        y: [randomY, randomY + 50, randomY],
      }}
      transition={{
        duration: Math.max(4, Math.random() * 10 + 1), // Random duration between 1 and 4 seconds
        repeat: Infinity,
        repeatType: "reverse",
      }}
    />
  );
};
