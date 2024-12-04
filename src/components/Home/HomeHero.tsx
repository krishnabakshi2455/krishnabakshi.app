"use client"
import { useState, useEffect, useRef } from 'react';


import Typewriter from 'typewriter-effect';


const homedata = {
  
  roles: [
    "Full Stack Developer",
    "Programmer",
    "Problem Solver",
  ],
}
const Home = () => {

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }, // Adjust this for sensitivity
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  return (
    <>

      <div  className={`
        md:w-full
        md:h-[30vh]
        md:border-solid
        md:-z-20

        kb1:w-screen
        kb1:h-[30vh]
        kb1:z-20
        kb1:flex
        kb1:flex-col
        kb1:justify-center
        kb1:items-center

        ${isVisible?' animate-in fade-in duration-1000':'animate-out fade-out duration-1000'}

        `} ref={ref}>
        {/* heading start */}
        <div className={`
          md:flex
          md:flex-col
          md:mt-0

          kb1:flex
          kb1:flex-col
          kb1:items-center
          kb1:mt-20

          `}
          >
          <h1 className={`
            md:text-[80px]
            md:font-semibold

            kb1:text-[40px]
            kb1:font-semibold
            kb1:mt-7

            `}>Krishna Bakshi</h1>
          <h2 className={`
            md:text-[50px]

            kb1:text-[20px]
            flex
            gap-2
            `}> 
            I am a <span>
              <Typewriter
                options={{
                  strings: homedata.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>
        </div>

        {/* heading paragraph */}

        <p className={`
          md:text-[20px]
          md:w-[50vw]

          kb1:text-[15px]
          kb1:ml-5
          `}>
          Passionate FullStack Developer | Transforming Ideas Into Seamless And Visually Stunning Web Solution Skilled in ReactJS, NextJS, and an expert in JavaScript, TypeScript, HTML and CSS
        </p>
      </div>




    </>
  )
}

export default Home