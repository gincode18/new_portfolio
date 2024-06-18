"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedBars() {
  return (
    <div className="flex w-auto items-end overflow-hidden">
      <motion.span
        className="mr-[3px] h-2 w-1 bg-primary opacity-75 "
        animate={{
          transform: [
            "scaleY(1.0) translateY(0rem)",
            "scaleY(1.5) translateY(-0.082rem)",
            "scaleY(1.0) translateY(0rem)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <motion.span
        animate={{
          transform: [
            "scaleY(1.0) translateY(0rem)",
            "scaleY(3) translateY(-0.083rem)",
            "scaleY(1.0) translateY(0rem)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="mr-[3px] h-1 w-1  bg-secondary"
      />
      <motion.span
        animate={{
          transform: [
            "scaleY(1.0)  translateY(0rem)",
            "scaleY(0.5) translateY(0.37rem)",
            "scaleY(1.0)  translateY(0rem)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="h-3 w-1 bg-accent opacity-80 "
      />
    </div>
  );
}
