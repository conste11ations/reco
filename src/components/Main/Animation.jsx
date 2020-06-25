import * as React from "react";
import { motion } from "framer-motion";

export const Animation = (props) => {
  return (
    <motion.div
    initial={{ opacity: 0.1 }} 
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"],
        opacity: 0.1
      }}
      transition={{
        duration: props.duration,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
  );
};
