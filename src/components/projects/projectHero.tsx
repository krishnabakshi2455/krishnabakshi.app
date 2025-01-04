"use client";
import { PinContainer } from "../ui/3d-pin";
import { fetchedProjectsAtom } from "../jotai/AtomStore";
import { useAtomValue } from "jotai";
import { Github } from "lucide-react";
import Link from "next/link";

function ProjectHero() {
    const Projects = useAtomValue(fetchedProjectsAtom);
    console.log("this is fetchedprojects", Projects);
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-24 gap-72  mb-28 place-content-center mt-[28%] md:mt-0 place-items-center lg:p-20 md:p-10 p-5">
            {
                Projects.map((projects, index) => {
                    return (
                            <PinContainer
                                title="Live Link"
                                href={projects.livelink}
                                key={index}
                                className=""
                            >
                                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 md:w-[40vw] w-[80vw] md:h-full ">
                                    <div className="flex flex-1 w-full rounded-lg mt-4 from-primary/25 via-primary/15 to-primary/5">
                                        <img src={projects.thumbnail} alt="image/mainimg.png" className="h-[10rem] w-full md:object-cover object-contain" />
                                    </div>
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