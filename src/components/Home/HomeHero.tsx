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
        justify-center

        md:w-full
        md:h-[30vh]
        md:border-solid
        md:-z-20
        md:p-16
        
        kb1:w-screen
        kb1:p-5
        kb1:h-[30vh]
        kb1:z-20
        kb1:flex
        kb1:flex-col
        
        ${isVisible ?' animate-in slide-in-from-bottom  duration-500':'animate-out fade-out duration-1000'}

        `} ref={ref}>
        {/* heading start */}
        <div className={`
          flex-col
          md:flex
          md:mt-0
          md:text-left
          md:gap-3

          kb1:flex
          kb1:mt-20
          kb1:text-center
          kb1:gap-5

          `}
          >
          <h1 className={`
            md:text-5xl
            md:font-semibold

            kb1:text-3xl
            kb1:font-semibold
            kb1:mt-7
            text-primary

            `}>Krishna Bakshi</h1>
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
        </div>

        {/* heading paragraph */}

        <p className={`
          md:text-lg
          md:font-bold
          md:w-[50vw]

          kb1:text-lg
          `}>
          Passionate FullStack Developer | Transforming Ideas Into Seamless And Visually Stunning Web Solution Skilled in ReactJS, NextJS, and an expert in JavaScript, TypeScript, HTML and CSS
        </p>
      </div>




    </>
  )
}

export default Home