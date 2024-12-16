"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";
import { fetchedProjectsAtom } from "../jotai/AtomStore";
import { useAtomValue } from "jotai";
import { Github } from "lucide-react";
import Link from "next/link";

 function ProjectHero() {
    const Projects = useAtomValue(fetchedProjectsAtom);
     console.log("this is fetchedprojects", Projects);
    
    return (
        <div className="h-full w-full grid md:grid-cols-3 grid-cols-1 md:gap-20 gap-56 mt-28 mb-28">
            {
                Projects.map((projects,index)=>{
                    return(
                        <PinContainer
                            title="Live Link"
                            href={projects.livelink}
                            key={index}
                        >
                            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-full ">
                                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-primary">
                                   {projects.title}
                                </h3>
                                <div className="text-base !m-0 !p-0 font-normal">
                                    <span className="text-slate-500">
                                        {
                                            projects.description
                                        }
                                    </span>
                                </div>
                                <div className="flex flex-1 w-full rounded-lg mt-4 from-violet-500 via-purple-500 to-blue-500">
                                    <img src={projects.thumbnail} alt="image/mainimg.png" className="h-[10rem] w-full object-contain" />
                                </div>

                                <div className="flex gap-2">
                                    <Github className="text-primary" />
                                  <Link
                                  href={projects.sourcecodelink}
                                  className="underline text-primary"
                                  >Source Code Link</Link>
                                </div>
                            </div>
                        </PinContainer>
                    )
                })
            }


         
        </div>
    );
}
export default ProjectHero