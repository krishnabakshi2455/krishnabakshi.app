"use client"

import AboutHero from '@/components/About/AboutHero'
import React from 'react'
// import useCanvasCursor from '@/animations/canvahook/useCanvasCursor '
import UsingCanvaHook from '@/animations/canvahook/UsingCanvaHook'
const page = () => {
  // useCanvasCursor()
  return (
    <>
      {/* <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      /> */}
      <AboutHero />


      <UsingCanvaHook />
    </>
  )
}

export default page