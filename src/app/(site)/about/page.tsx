"use client"
import AboutHero from '@/components/About/about-hero'
import React from 'react'
import UsingCanvaHook from '@/animations/canvahook/UsingCanvaHook'
import { fetchedEducationAtom, fetchedExperienceAtom } from "@/components/jotai/AtomStore";
import { useAtomValue } from "jotai";
import ExperienceShowcaseList from '@/components/experience/experience-showcase-list';
const page = () => {
  const education = useAtomValue(fetchedEducationAtom)
  const experience = useAtomValue(fetchedExperienceAtom)
  
  return (
    <>

      <AboutHero />
      <div className='grid grid-cols-1 gap-3'>
        <ExperienceShowcaseList title="Experience" details={experience} />
        <ExperienceShowcaseList title="Education" details={education} />
      </div>


      <UsingCanvaHook />
    </>
  )
}

export default page