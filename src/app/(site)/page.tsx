"use client"
import Image from "next/image";
import useCanvasCursor from '@/animations/canvahook/useCanvasCursor '
import HomeHero from '@/components/Home/HomeHero'  


export default function Home() {
  useCanvasCursor()
  return (
    <>
      <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      />

     
     <div className="m-60">
        <HomeHero />
     </div>
      


    </>
  );
}
