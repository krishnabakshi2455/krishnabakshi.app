import HomeHero from '@/components/Home/HomeHero'  
import HomeSkills from "@/components/Home/HomeSkills";
import UsingCanvaHook from '@/animations/canvahook/UsingCanvaHook'


export default function Home() {
  return (
    <>

     
     <div className={
      `md:mt-60
      kb1:mt-12
      `
     }>

      <div className={`
        md:flex
        md:flex-col
        md:gap-56

        kb1:flex
        kb1:flex-col
        kb1:gap-24
        `}>
          <HomeHero />
          <HomeSkills />
      </div>
     </div>
      
      <UsingCanvaHook />


    </>
  );
}
