"use client";

import Image from "next/image";
import hero from "../../../public/profile.jpeg";
import { motion } from "framer-motion";
import React from "react";
import ThreeDCard from "./3DCARD";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="relative h-1/2 lg:h-full lg:w-1/2">
          <ThreeDCard></ThreeDCard>
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex h-1/2 flex-col items-center justify-center gap-8 lg:h-full lg:w-1/2">
          {/* TITLE */}
          <h1 className="text-4xl font-bold md:text-6xl">
            A passionate{" "}
            <span className=" text-primary hover:text-secondary">
              Full-Stack
            </span>{" "}
            Developer
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Proficient in leveraging modern web technologies including
            JavaScript, TypeScript, Next.js, Node.js, and Express.js for
            end-to-end software development
          </p>
          {/* BUTTONS */}
          <div className="flex w-full gap-4">
            <button className="rounded-lg bg-primary p-4 text-secondary ring-2 ring-accent duration-700 ease-out  hover:bg-accent">
              View My Work
            </button>
            <button className="rounded-lg p-4 ring-2 ring-primary">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
