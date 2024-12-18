"use client"
import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";



import Typewriter from 'typewriter-effect';
import FadeUp from "@/animations/fadeup/fade-up";


const homedata = {
  roles: [
    "Full Stack Developer",
    "Programmer",
    "Problem Solver",
  ],
}
const Home = () => {

  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.section
        animate={{
          transform: `translateY(${progress * 20}vh)`,
        }}
        transition={{ type: "spring", stiffness: 100 }}
        ref={ref}
        className="pointer-events-none flex max-h-[1000px] min-h-[calc(100vh-200px)] items-center px-6 sm:px-14 md:h-[calc(100vh-200px)] md:min-h-max md:px-20"
      >
        <div className="w-full">
          <div className="mx-auto max-w-7xl">
            <AnimatePresence>
              <FadeUp key="title-main" duration={0.6}>
                <h1 className="bg-clip-text py-2 text-5xl font-bold text-primary sm:text-6xl md:text-7xl xl:text-8xl">
                  Krishna Bakshi
                </h1>
                <h2 className={`
                  md:text-[50px]

                  kb1:text-[20px]
                  flex
                  gap-2
            `}>
                  I am a <span className='text-primary'>
                    <Typewriter
                      options={{
                        strings: homedata.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </h2>
              </FadeUp>
              <FadeUp key="description" duration={0.6} delay={0.2}>
                <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-xl">
                  I am a software developer specializing in building
                  high-performance, user-focused web applications. Skilled in{" "}
                  <span className="font-semibold text-accent">ReactJS</span>,{" "}
                  <span className="font-semibold text-accent">NextJS</span>,{" "}
                  <span className="font-semibold text-accent">SolidJS</span>, and
                  an expert in{" "}
                  <span className="font-semibold text-accent">JavaScript</span>,{" "}
                  <span className="font-semibold text-accent">HTML</span> and{" "}
                  <span className="font-semibold text-accent">CSS</span>
                </div>
              </FadeUp>
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

   




    </>
  )
}

export default Home