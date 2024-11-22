"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { IoMdMenu } from "react-icons/io";


const Header: React.FC = () => {
    const pathname = usePathname();


    const linkspath = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
    ];

    const isActive = (path: string) => pathname === path;



    return (
        <div className="fixed top-10 h-10 w-screen z-10">
            <div className=" flex justify-around gap-96 items-center w-full">
                {/* Logo Section */}
                <div 
                className=" text-white bg-[#32CD32] px-3 py-1 rounded-full hover:scale-125 ease-in-out duration-300 cursor-pointer">
                        K
                </div>

                {/* Header Links Section */}
                <div 
                className="md:flex md:gap-7 border-solid justify-center border-2 shadow-gray-300 p-5 rounded-full shadow-lg
                
                bg-white w-96 relative " 
                data-aos="fade-up"
                >
                
                    {/* Links */}
                    {linkspath.map((link,index) => (
                        <div key={index} className="">
                            <Link
                                href={link.path}                               
                                className={`p-2 ${isActive(link.path) ? " md:text-white md:bg-[#32CD32] md:rounded-full kb1:hidden md:block" : "kb1:hidden text-black hover:text-[#32CD32] ease-in-out duration-300 md:block"}
                                `}
                            >
                                {link.name}
                            </Link>
                        </div >
                    ))}
                    {/* this is mobile menu */}
                    <div className=" kb1:block md:hidden kb1:text-[20px] w-5">
                        <IoMdMenu />
                    </div>

                    
                </div>
            </div>
        </div>
    );
};

export default Header;
