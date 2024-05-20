"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { api } from "~/trpc/react";

type Project = {
  order: number;
  title: String;
  desc: String;
  img: String;
  link: String;
};
const project: Project[] = [
  {
    order: 1,
    title: "E-commerce",
    desc: "An E-commerce Site Build with Reactjs Nodejs Express.js Tailwindcss Passport.js",
    img: "https://res.cloudinary.com/dbj5s9roc/image/upload/v1716139621/hif5npxnbj18bncf3zrz.png",
    link: "https://github.com/gincode18/react-js-ecommerce",
  },
  {
    order: 2,
    title: "IntelliNote",
    desc: "A Notes Taking App build with Nextjs Typescipt Tailwindcss firestore OpenAI-API for auto complete and image generation  ",
    img: "https://res.cloudinary.com/dbj5s9roc/image/upload/v1716139300/r1vxogeebemcrihmtbxx.png",
    link: "https://github.com/gincode18/AI_NOTES",
  },
  {
    order: 3,
    title: "PaperProphet",
    desc: "A dynamic document communication platform fueled by Next.js and OpenAI API. Engineered to streamline collaboration within PDFs, PaperProphet integrates cutting-edge web technologies for enhanced functionality. Leveraging the power of Tailwind CSS for efficient UI",
    img: "https://res.cloudinary.com/dbj5s9roc/image/upload/v1716138936/frexhhwpfrbam19txwkc.png",
    link: "https://github.com/gincode18/AI_PDF_READER",
  },
  {
    order: 4,
    title: "FormWave",
    desc: "An advanced form builder application built on Next.js 13 and Dnd-kit technologies. FormWave simplifies form creation with its intuitive drag-and-drop interface and responsive design. Leveraging TypeScript for robustness and Tailwind CSS for a sleek UI, FormWave streamlines data collection and submission processes.",
    img: "https://res.cloudinary.com/dbj5s9roc/image/upload/v1716138527/trlvorgg7ue7rrpmxvyr.png",
    link: "https://github.com/gincode18/FormWave",
  },
  {
    order: 5,
    title: "Next Chat",
    desc: "A cutting-edge messaging and collaboration platform powered by Next.js for efficient server-sordere rendering and Tailwind CSS for a sleek UI. With TypeScript ensuring reliability and Socket.io enabling real-time messaging, Next Chat delivers seamless user interactions.",
    img: "https://res.cloudinary.com/dbj5s9roc/image/upload/v1716138268/ar5o9exiakjluuozgzsk.png",
    link: "https://github.com/gincode18/NextChat",
  },
  {
    order: 6,
    title: "NextTube",
    desc: "A full-stack video streaming application utilizing the T3 Stack, delivering seamless video streaming. Features include Next.js for efficient rendering, Typescript for robustness, with TRPC , Next Auth for secure authentication, Prisma for database operations, and Tailwind CSS for a visually appealing UI.",
    img: "https://res.cloudinary.com/dbj5s9roc/image/upload/v1716122607/qcevt0un63a9wcengujk.png",
    link: "https://github.com/gincode18/NextTube",
  },
];

const PortfolioPage = () => {
  project.sort((a: Project, b: Project) => b.order - a.order);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="relative h-[600vh]" ref={ref}>
        <div className="flex h-[calc(100vh-6rem)] w-screen items-center justify-center text-center text-8xl text-primary">
          My Works
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={100}
            height={100}
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
        <div className="sticky top-0 flex h-screen items-center gap-4 overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-secondary/30 to-primary/30" />
            {project.map((item) => (
              <div
                className={`flex h-screen w-screen items-center justify-center bg-gradient-to-r from-secondary/40  to-primary/40 `}
                key={item.order.toString()}
              >
                <div className="flex flex-col gap-8 ">
                  <h1 className="text-xl font-bold text-primary md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative h-56 w-80 md:h-64 md:w-96 lg:h-[350px] lg:w-[500px] xl:h-[420px] xl:w-[600px]">
                    <Image src={item.img.toString()} alt="" fill />
                  </div>
                  <p className="md:w96 w-80 font-bold lg:w-[500px] lg:text-lg xl:w-[600px] ">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link.toString()}
                    className="flex justify-end"
                  >
                    <button className="btn btn-secondary hover:bg-accent ">
                      See Github & Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
            <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-secondary/30 to-primary/30" />
          </motion.div>
        </div>
      </div>
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-16 text-center">
        <h1 className="text-8xl  font-bold text-primary">
          Do you have a project?
        </h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="h-64 w-64 md:h-[500px] md:w-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text className=" fill-secondary">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="btn btn-primary absolute bottom-0 left-0 right-0 top-0 m-auto flex h-16 w-16 items-center  justify-center rounded-full hover:bg-secondary  md:h-28 md:w-28"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
