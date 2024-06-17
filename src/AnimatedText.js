import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className }) => {
// splitting text into letters
  const letters = Array.from(text);

// Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (index = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.2 * index },
    }),
  };

// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
    
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
    
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
    //   style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
    
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block" >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;