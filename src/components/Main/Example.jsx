import * as React from "react";
import { motion } from "framer-motion";

export const Example = () => {
  return (
    <motion.div
      animate={{
        scale: [1, 4, 4, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["50%", "50%", "50%", "50%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1
      }}
    />
  );
};
