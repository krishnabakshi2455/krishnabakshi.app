"use client"

import AboutHero from '@/components/About/about-hero'
import React from 'react'
import UsingCanvaHook from '@/animations/canvahook/UsingCanvaHook'
import ExperienceShowcaseList from '@/components/experience/experience-showcase-list'
const page = () => {

  return (
    <>

      <AboutHero />
      {/* <ExperienceShowcaseList title="Experience"  />
      <ExperienceShowcaseList title="Education"  /> */}


      <UsingCanvaHook />
    </>
  )
}

export default page