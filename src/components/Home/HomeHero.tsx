import React, { useEffect, useRef } from 'react'
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

      <div data-aos="fade-down-right"  className='w-full '>
        {/* heading start */}
        <div className='flex flex-col'>
          <h1 className='text-[80px] font-semibold'>Krishna Bakshi</h1>
          <h2 className='text-[50px]'>Full Stack Developer</h2>
        </div>

        {/* heading paragraph */}

        <p className='text-[20px]'>
          Passionate FullStack Developer | Transforming Ideas Into Seamless And Visually Stunning Web Solution Skilled in ReactJS, NextJS, and an expert in JavaScript, TypeScript, HTML and CSS
        </p>
      </div>




    </>
  )
}

export default Home