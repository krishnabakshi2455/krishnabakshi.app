import Image from "next/image";
import HomeHero from '@/components/Home/HomeHero'  
import HomeSkills from "@/components/Home/HomeSkills";
import UsingCanvaHook from '@/animations/canvahook/UsingCanvaHook'


export default function Home() {
  return (
    <>

     
     <div className="m-60">

      <div className="flex flex-col gap-56">
          <HomeHero />
          <HomeSkills />
      </div>
     </div>
      
      <UsingCanvaHook />


    </>
  );
}
