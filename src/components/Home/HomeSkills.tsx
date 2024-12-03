
// import { useState, useEffect, useRef } from 'react';
import { getlanguages, getlibrariesframeworks, getbackend, getdatabase, gettools } from '@/lib/sanity/utils'

const HomeSkills = async () => {
   
    const languages = await getlanguages()
    const librariesframeworks = await getlibrariesframeworks()
    const backend = await getbackend()
    const database = await getdatabase()
    const tools = await gettools()
    
    

    
    
    // const [isVisible, setIsVisible] = useState(false);
    // const ref = useRef<any>();

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             setIsVisible(entry.isIntersecting);
    //         },
    //         { threshold: 0.1 }, // Adjust this for sensitivity
    //     );

    //     if (ref.current) {
    //         observer.observe(ref.current);
    //     }

    //     return () => {
    //         if (ref.current) {
    //             observer.unobserve(ref.current);
    //         }
    //     };
    // }, []);

    return (
        <>
            {/* skill div */}
            <div className={`
                md:w-full
                md:-z-20

                kb1:w-screen
                kb1:z-20
                `}>

                {/* heading */}
                <div>
                    <h1 className={`
                        md:text-[40px]
                        md:font-semibold

                        kb1:text-[25px]
                        kb1:font-bold
                        kb1:ml-5
                        `}>
                        Skills
                    </h1>
                </div>

                {/* languages */}

                <div className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                    kb1:ml-5
                    `}>
                    <h2 className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
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
                        {languages.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className={`
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
                                        kb1:rounded-lg
                                        `}
                                >
                                    <img
                                        src={item.thumbnail}
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
                                        `}>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Libraries and Frameworks */}

                <div
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                    kb1:ml-5
                    `}
                >
                    <h2
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
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
                        {librariesframeworks.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                   
                                    className={`
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
                                        kb1:rounded-lg
                                        `}
                                >
                                    <img
                                        src={item.thumbnail}
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
                                    <p
                                        className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}
                                    >{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Backend */}

                <div 
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                    kb1:ml-5
                    `}
                >
                    <h2 
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
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
                        {backend.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                   
                                    className={`
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
                                        kb1:rounded-lg
                                        `}
                                >
                                    <img
                                        src={item.thumbnail}
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
                                    <p 
                                        className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}
                                    >{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Databases */}

                <div 
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                    kb1:ml-5
                    `}
                >
                    <h2 
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
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
                        {database.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className={`
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
                                        kb1:rounded-lg
                                        `}
                                >
                                    <img
                                        src={item.thumbnail}
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
                                    <p 
                                        className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}
                                    >{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tools and Technologies */}

                <div 
                    className={`
                    md:mt-4
                    md:ml-2

                    kb1:mt-5
                    kb1:ml-5
                    `}
                >
                    <h2 
                        className={`
                        md:text-[20px]
                        md:font-semibold

                        kb1:text-[15px]
                        kb1:font-bold
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
                        {tools.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                   
                                    className={`
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
                                        kb1:rounded-lg
                                        `}
                                >
                                    <img
                                        src={item.thumbnail}
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
                                    <p 
                                        className={`
                                        md:text-[18px]
                                        md:font-medium

                                        kb1:text-[12px]
                                        kb1:font-bold
                                        `}
                                    >{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomeSkills