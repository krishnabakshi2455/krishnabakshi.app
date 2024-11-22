"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { IoMdMenu } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";


const Header: React.FC = () => {
    const pathname = usePathname();


    const linkspath = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
    ];

    const isActive = (path: string) => pathname === path;

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenuopen = () => {
        setIsOpen(true);
        console.log(isOpen);
        
    };

    const toggleMenuclose = () => {
        setIsOpen(false);
        console.log(isOpen);

    };



    return (
        <div className=" h-10 z-10">
            <div className="
             md:flex
             md:justify-around
             md:gap-96
             md:items-center
             md:w-screen
             md:fixed
             md:top-10
             
             
             kb1:gap-0
             kb1:flex
             kb1:justify-between
             kb1:items-center
             kb1:p-2
             kb1:top-0
             kb1:fixed
             kb1:w-screen
             kb1:z-50
             
             ">
                {/* Logo Section */}
                <div
                    className=" 
                text-white
                text-[25px]
                bg-[#32CD32]
                px-4 
                py-1
                rounded-full 
                hover:scale-125
                ease-in-out
                duration-3000
                cursor-pointer
                
                ">
                    K
                </div>

                {/* Header Links Section */}
                <div
                    className="
                 md:flex
                 md:gap-7
                 md:justify-center
                 md:border-2
                 md:shadow-gray-300
                 md:p-8
                 md:rounded-full
                 md:shadow-lg
                 md:bg-white
                 md:w-96
                 md:relative

                
                 kb1:w-14
                 kb1:h-14
                 kb1:items-center
                 kb1:p-3
                 kb1:justify-center
                 kb1:flex
                 kb1:shadow-gray-300
                 kb1:bg-[#32CD32]
                 kb1:shadow-lg
                 kb1:rounded-full
                 
                "
                    data-aos="fade-up"
                >

                    {/* Links */}
                    {linkspath.map((link, index) => (
                        <div key={index} className="">
                            <Link
                                href={link.path}
                                className={`p-2 ${isActive(link.path) ? " md:text-white p md:bg-[#32CD32] md:rounded-full kb1:hidden md:block" : "kb1:hidden text-black hover:text-[#32CD32] ease-in-out duration-300 md:block"}
                                `}
                            >
                                {link.name}
                            </Link>
                        </div >
                    ))}

                    {/*  mobile menu icon start  */}
                    <div className=" kb1:block md:hidden kb1:text-[20px]"
                        onClick={toggleMenuopen}
                    >
                        <IoMdMenu className=" 
                        kb1:text-[40px]
                        kb1:text-white"/>
                    </div>

                    {/* mobile menu links */}

                    <div 
                        className={`
                    kb1:bg-white
                    kb1:w-[390px]
                    kb1:flex
                    kb1:flex-col
                    kb1:gap-8
                    kb1:justify-center
                    kb1:items-center
                    kb1:px-10
                    kb1:py-10
                    kb1:shadow-md
                    kb1:fixed
                    ${isOpen ? "kb1:top-0" : "kb1:-top-[400px]"}
                    kb1:right-[0px]
                    kb1:z-50
                    kb1:transition-all
                    kb1:duration-300
                    kb1:ease-in-out
                    kb1:visible
                    kb1:ml-3


                    md:hidden`}
                    
                    >
                       <div className="
                       kb1:flex
                       kb1:flex-col 
                       kb1:gap-7
                       kb1:items-center
                       kb1:justify-center
                       kb1:ml-16
                       ">
                            {linkspath.map((link, index) => (
                                <div key={index} className="" onClick={toggleMenuclose}>
                                    <Link
                                        href={link.path}
                                        className={`p-2 ${isActive(link.path) ? "kb1:bg-[#32CD32] kb1:text-white kb1:rounded-full kb1:text-[22px]" : "text-black hover:text-[#32CD32] ease-in-out duration-300 kb1:text-[22px]"}
                                `}
                                    >
                                        {link.name}
                                    </Link>
                                </div >
                            ))}

                            <div className="
                            kb1:text-[30px]"
                                onClick={toggleMenuclose}
                            >
                                <IoMdCloseCircle />
                            </div>
                       </div>


                    </div>


                </div>
            </div>
        </div>
    );
};

export default Header;
