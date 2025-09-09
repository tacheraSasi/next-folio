"use client"
import { motion, useScroll, useSpring } from "motion/react";
import React from "react";

const TopScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-600 transform-origin-0 z-50"
      style={{ scaleX }}
    />
  );
};

export default TopScrollIndicator;
