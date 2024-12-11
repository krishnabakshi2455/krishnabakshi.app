"use client"
import { useState, useEffect, useRef } from 'react';

import { useAtom } from 'jotai'
import { fetchedBackendSkillsAtom, fetchedDatabaseSkillsAtom, fetchedLanguagesSkillsAtom, fetchedLibrariesFrameworksSkillsAtom, fetchedToolsSkillsAtom } from '../jotai/AtomStore'
import FadeRight from '@/animations/faderight/FadeRight';
import { useInView } from "framer-motion";


const HomeSkills = () => {



    const [languages] = useAtom(fetchedLanguagesSkillsAtom)
    const [librariesframeworks] = useAtom(fetchedLibrariesFrameworksSkillsAtom)
    const [backend] = useAtom(fetchedBackendSkillsAtom)
    const [database] = useAtom(fetchedDatabaseSkillsAtom)
    const [tools] = useAtom(fetchedToolsSkillsAtom)







    const [, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // setIsVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger animation
                }
            },
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const languagesRef = useRef<HTMLDivElement | null>(null);
    const isLanguagesInView = useInView(languagesRef, { once: true });

    return (
        <>
            {/* skill div */}
            <div className={`
                md:w-full
                md:-z-20
                md:p-10


                kb1:w-screen
                kb1:z-20
                kb1:p-5
                `}>

                {/* heading */}
                <div>
                    <h1 className={`
                        md:text-[40px]
                        md:font-semibold

                        kb1:text-[25px]
                        kb1:font-bold

                        text-primary
                        `}>
                        Skills
                    </h1>
                </div>

                {/* languages */}



                <div className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
          

                    
                    `}>
                    <h2 className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
                        text-primary
                        `}>
                        Languages
                    </h2>

                    <div className={`
                        md:grid
                        md:grid-cols-4
                        md:gap-4
                        md:w-full

                        kb1:grid
                        kb1:grid-cols-2
                        kb1:gap-2
                        kb1:w-full
                        `}>

                        {languages.map((pill, index) => {
                            return (

                                <div key={index} ref={languagesRef}>
                                    <FadeRight
                                        key={`lang-${index}`}
                                        duration={0.4}
                                        delay={0.1 + index * 0.1}
                                        whileInView={isLanguagesInView}
                                        className="-z-20 flex items-center justify-around "
                                    >
                                        <div className='
                                        w-full
                                        md:flex
                                        md:gap-5
                                        md:border
                                        md:border-gray-300 
                                        md:p-2 
                                        md:items-center 
                                        md:rounded-lg

                                        kb1:flex
                                        kb1:gap-2
                                        kb1:border
                                        kb1:border-gray-300
                                        kb1:p-1
                                        kb1:items-center
                                        kb1:rounded-lg'>
                                            <img
                                                src={pill.thumbnail}
                                                alt="no-image"
                                                className={`
                                            md:w-10
                                            md:h-10
                                            md:object-contain

                                            kb1:w-7
                                            kb1:h-7
                                            kb1:object-contain
                                            `}
                                            />
                                            <p className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}>{pill.title}</p>
                                        </div>
                                    </FadeRight>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Libraries and Frameworks */}

                <div
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                    
                    `}
                >
                    <h2
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
                        text-primary
                        `}
                    >
                        Libraries and Frameworks
                    </h2>

                    <div
                        className={`
                        md:grid
                        md:grid-cols-4
                        md:gap-4
                        md:w-full

                        kb1:grid
                        kb1:grid-cols-2
                        kb1:gap-2
                        kb1:w-full
                        `}
                    >
                        {librariesframeworks.map((pill, index) => {
                            return (

                                <div key={index} ref={languagesRef}>
                                    <FadeRight
                                        key={`lang-${index}`}
                                        duration={0.4}
                                        delay={0.1 + index * 0.1}
                                        whileInView={isLanguagesInView}
                                        className="-z-20 flex items-center justify-around "
                                    >
                                        <div className='
                                        w-full
                                        md:flex
                                        md:gap-5
                                        md:border
                                        md:border-gray-300 
                                        md:p-2 
                                        md:items-center 
                                        md:rounded-lg

                                        kb1:flex
                                        kb1:gap-2
                                        kb1:border
                                        kb1:border-gray-300
                                        kb1:p-1
                                        kb1:items-center
                                        kb1:rounded-lg'>
                                            <img
                                                src={pill.thumbnail}
                                                alt="no-image"
                                                className={`
                                            md:w-10
                                            md:h-10
                                            md:object-contain

                                            kb1:w-7
                                            kb1:h-7
                                            kb1:object-contain
                                            `}
                                            />
                                            <p className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}>{pill.title}</p>
                                        </div>
                                    </FadeRight>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Backend */}

                <div
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                   
                    `}
                >
                    <h2
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
                        text-primary
                        `}
                    >
                        Backend
                    </h2>

                    <div
                        className={`
                        md:grid
                        md:grid-cols-4
                        md:gap-4
                        md:w-full

                        kb1:grid
                        kb1:grid-cols-2
                        kb1:gap-2
                        kb1:w-full
                        `}
                    >

                        {backend.map((pill, index) => {
                            return (

                                <div key={index} ref={languagesRef}>
                                    <FadeRight
                                        key={`lang-${index}`}
                                        duration={0.4}
                                        delay={0.1 + index * 0.1}
                                        whileInView={isLanguagesInView}
                                        className="-z-20 flex items-center justify-around "
                                    >
                                        <div className='
                                        w-full
                                        md:flex
                                        md:gap-5
                                        md:border
                                        md:border-gray-300 
                                        md:p-2 
                                        md:items-center 
                                        md:rounded-lg

                                        kb1:flex
                                        kb1:gap-2
                                        kb1:border
                                        kb1:border-gray-300
                                        kb1:p-1
                                        kb1:items-center
                                        kb1:rounded-lg'>
                                            <img
                                                src={pill.thumbnail}
                                                alt="no-image"
                                                className={`
                                            md:w-10
                                            md:h-10
                                            md:object-contain

                                            kb1:w-7
                                            kb1:h-7
                                            kb1:object-contain
                                            `}
                                            />
                                            <p className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}>{pill.title}</p>
                                        </div>
                                    </FadeRight>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Databases */}

                <div
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                   
                    `}
                >
                    <h2
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold

                        text-primary
                        `}
                    >
                        Databases
                    </h2>

                    <div
                        className={`
                        md:grid
                        md:grid-cols-4
                        md:gap-4
                        md:w-full

                        kb1:grid
                        kb1:grid-cols-2
                        kb1:gap-2
                        kb1:w-full
                        `}
                    >
                        {database.map((pill, index) => {
                            return (

                                <div key={index} ref={languagesRef}>
                                    <FadeRight
                                        key={`lang-${index}`}
                                        duration={0.4}
                                        delay={0.1 + index * 0.1}
                                        whileInView={isLanguagesInView}
                                        className="-z-20 flex items-center justify-around "
                                    >
                                        <div className='
                                        w-full
                                        md:flex
                                        md:gap-5
                                        md:border
                                        md:border-gray-300 
                                        md:p-2 
                                        md:items-center 
                                        md:rounded-lg

                                        kb1:flex
                                        kb1:gap-2
                                        kb1:border
                                        kb1:border-gray-300
                                        kb1:p-1
                                        kb1:items-center
                                        kb1:rounded-lg'>
                                            <img
                                                src={pill.thumbnail}
                                                alt="no-image"
                                                className={`
                                            md:w-10
                                            md:h-10
                                            md:object-contain

                                            kb1:w-7
                                            kb1:h-7
                                            kb1:object-contain
                                            `}
                                            />
                                            <p className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}>{pill.title}</p>
                                        </div>
                                    </FadeRight>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Tools and Technologies */}

                <div
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                   
                    `}
                >
                    <h2
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold

                        text-primary
                        `}
                    >
                        Tools and Technologies
                    </h2>

                    <div

                        className={`
                        md:grid
                        md:grid-cols-4
                        md:gap-4
                        md:w-full

                        kb1:grid
                        kb1:grid-cols-2
                        kb1:gap-2
                        kb1:w-full
                        `}
                    >

                        {tools.map((pill, index) => {
                            return (

                                <div key={index} ref={languagesRef}>
                                    <FadeRight
                                        key={`lang-${index}`}
                                        duration={0.4}
                                        delay={0.1 + index * 0.1}
                                        whileInView={isLanguagesInView}
                                        className="-z-20 flex items-center justify-around "
                                    >
                                        <div className='
                                        w-full
                                        md:flex
                                        md:gap-5
                                        md:border
                                        md:border-gray-300 
                                        md:p-2 
                                        md:items-center 
                                        md:rounded-lg

                                        kb1:flex
                                        kb1:gap-2
                                        kb1:border
                                        kb1:border-gray-300
                                        kb1:p-1
                                        kb1:items-center
                                        kb1:rounded-lg'>
                                            <img
                                                src={pill.thumbnail}
                                                alt="no-image"
                                                className={`
                                            md:w-10
                                            md:h-10
                                            md:object-contain

                                            kb1:w-7
                                            kb1:h-7
                                            kb1:object-contain
                                            `}
                                            />
                                            <p className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}>{pill.title}</p>
                                        </div>
                                    </FadeRight>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomeSkills