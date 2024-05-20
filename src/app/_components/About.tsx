"use client";
import Brain from "../_components/Brain_Animation";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Sign from "../_components/Sign";
type Experience = {
  id: string;
  position: string;
  order: number;
  description: string;
  time: string;
  company: string;
};
type Skills = { id: string; skill: string };
type Props = {
  experience: Experience[];
  skills: Skills[];
};

const AboutPage: React.FC<Props> = ({ experience, skills }) => {
  const EXPERIENCE: Experience[] = experience;
  const SKILLS: Skills[] = skills;

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef<HTMLDivElement>(null);
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef<HTMLDivElement>(null);
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:gap-32 md:p-12 lg:w-2/3 lg:gap-48 lg:p-20 lg:pr-0 xl:w-1/2 xl:gap-64 xl:p-48">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.jpeg"
              alt=""
              width={112}
              height={112}
              className="h-28 w-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-2xl font-bold text-primary">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg  font-bold ">
              Hello! I'm Vishal, a passionate software engineer specializing in
              full-stack development . Currently, I'm pursuing my B.Tech in
              Computer Science Engineering at VIT Vellore, I have honed my
              technical skills in a variety of programming languages, including
              C, C++, Java, JavaScript, and TypeScript. I'm well-versed in
              frameworks and tools such as React.js, Node.js, Express.js,
              MongoDB, Next.js, Prisma, Git, GitHub Actions, Docker
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic text-accent">
              When I'm not coding,I watch Anime
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <Sign></Sign>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                className=" stroke-primary"
                strokeWidth="1"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                strokeWidth="1"
                className=" stroke-primary"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
                className=" stroke-primary"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col justify-center gap-12" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              {SKILLS.map((skill) => {
                return (
                  <div className="cursor-pointer  rounded bg-secondary p-2 text-sm  hover:bg-accent hover:text-secondary">
                    {skill.skill}
                  </div>
                );
              })}
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
                className=" stroke-primary"
              ></path>
              <path
                d="M12 6V14"
                stroke="#000000"
                className=" stroke-primary"
                strokeWidth="1"
              ></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
                className=" stroke-primary"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col justify-center gap-12 pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-primary"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {EXPERIENCE.map((EXPERIENCE): any => {
                return (
                  <div className="flex justify-between gap-6">
                    {/* LEFT */}
                    <div className=" flex flex-col  items-center justify-between ">
                      {/* JOB TITLE */}
                      <div className="rounded-b-lg rounded-s-lg bg-secondary p-3 font-semibold">
                        {EXPERIENCE.position}
                      </div>
                      {/* JOB DESC */}
                      <div className="p-3 text-sm italic">
                        {EXPERIENCE.description}{" "}
                      </div>
                      {/* JOB DATE */}
                      <div className=" text-sm font-semibold text-red-400">
                        {EXPERIENCE.time}
                      </div>
                      {/* JOB COMPANY */}
                      <div className=" mb-3 rounded bg-secondary p-1 text-sm font-semibold">
                        {EXPERIENCE.company}
                      </div>
                    </div>
                    <div className="flex w-1/6 justify-center">
                      {/* LINE */}
                      <div className="relative h-full w-1 rounded bg-accent">
                        {/* LINE CIRCLE */}
                        <div className="absolute -left-2 h-5 w-5 rounded-full bg-secondary ring-4 ring-primary"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="sticky top-0  z-30 hidden w-1/3 lg:block xl:w-2/3">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
