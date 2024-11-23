"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Home = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation in milliseconds
      easing: 'ease-in-out',  // Easing function for the animation
      once: true,  // Animation happens only once
    });
  }, []);
  return (
    <>

      <div data-aos="fade-down-right" className={`
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

        `}>
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
            `}>Full Stack Developer
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