"use client"

import AboutHero from '@/components/About/AboutHero'
import React from 'react'
import useCanvasCursor from '@/animations/canvahook/useCanvasCursor '
const page = () => {
  useCanvasCursor()
  return (
    <>
      <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      />
      <AboutHero />
    </>
  )
}

export default page