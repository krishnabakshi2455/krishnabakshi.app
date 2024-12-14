"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

 function ProjectHero() {
    return (
        <div className="h-full w-full grid md:grid-cols-3 gap-20 mt-28 mb-20">
            <PinContainer
                title="/ui.aceternity.com"
                href="https://github.com/krishnabakshi2455/PortFolio_6/blob/main/src/components/ui/3d-pin.tsx"
            >
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
                    <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                        Aceternity UI
                    </h3>
                    <div className="text-base !m-0 !p-0 font-normal">
                        <span className="text-slate-500">
                            Customizable Tailwind CSS and Framer Motion Components.
                        </span>
                    </div>
                    <div className="flex flex-1 w-full rounded-lg mt-4 from-violet-500 via-purple-500 to-blue-500">
                        <img src="/image/mainimg.jpg" alt="image/mainimg.png" />
                    </div>
                </div>
            </PinContainer>


         
        </div>
    );
}
export default ProjectHero