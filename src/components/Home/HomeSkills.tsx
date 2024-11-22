
import React from 'react'
import { getlanguages, getlibrariesframeworks,getbackend,getdatabase,gettools } from '@/lib/sanity/utils'

const HomeSkills = async () => {
    const  languages  = await getlanguages()
    const librariesframeworks = await getlibrariesframeworks()
    const backend = await getbackend()
    const database = await getdatabase()
    const tools = await gettools()

    
    return (
        <>
            {/* skill div */}
            <div className='w-full'>

                {/* heading */}
                <div>
                    <h1 className='text-[40px] font-semibold'>Skills</h1>
                </div>

                {/* languages */}

                <div className='mt-4 ml-2'>
                    <h2 className='text-[20px] font-semibold'>
                        languages
                    </h2>

                    <div className='grid grid-cols-4 gap-4 w-full'>
                        {languages.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className='flex gap-5 border border-gray-300 p-2 items-center rounded-lg'
                                    data-aos="fade-right"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt="no-image"
                                        className='w-10 h-10 object-contain'
                                    />
                                    <p className='text-[18px] font-medium'>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Libraries and Frameworks */}

                <div className='mt-4 ml-2'>
                    <h2 className='text-[20px] font-semibold'>
                        Libraries and Frameworks
                    </h2>

                    <div className='grid grid-cols-4 gap-4 w-full'>
                        {librariesframeworks.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className='flex gap-5 border border-gray-300 p-2 items-center rounded-lg'
                                    data-aos="fade-right"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt="no-image"
                                        className='w-10 h-10 object-contain'
                                    />
                                    <p className='text-[18px] font-medium'>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Backend */}

                <div className='mt-4 ml-2'>
                    <h2 className='text-[20px] font-semibold'>
                        Backend
                    </h2>

                    <div className='grid grid-cols-4 gap-4 w-full'>
                        {backend.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className='flex gap-5 border border-gray-300 p-2 items-center rounded-lg'
                                    data-aos="fade-right"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt="no-image"
                                        className='w-10 h-10 object-contain'
                                    />
                                    <p className='text-[18px] font-medium'>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Databases */}

                <div className='mt-4 ml-2'>
                    <h2 className='text-[20px] font-semibold'>
                        Databases
                    </h2>

                    <div className='grid grid-cols-4 gap-4 w-full'>
                        {database.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className='flex gap-5 border border-gray-300 p-2 items-center rounded-lg'
                                    data-aos="fade-right"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt="no-image"
                                        className='w-10 h-10 object-contain'
                                    />
                                    <p className='text-[18px] font-medium'>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tools and Technologies */}

                <div className='mt-4 ml-2'>
                    <h2 className='text-[20px] font-semibold'>
                        Tools and Technologies
                    </h2>

                    <div className='grid grid-cols-4 gap-4 w-full'>
                        {tools.map((item) => {
                            return (
                                <div
                                    key={item._id}
                                    className='flex gap-5 border border-gray-300 p-2 items-center rounded-lg'
                                    data-aos="fade-right"
                                >
                                    <img
                                        src={item.thumbnail}
                                        alt="no-image"
                                        className='w-10 h-10 object-contain'
                                    />
                                    <p className='text-[18px] font-medium'>{item.title}</p>
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