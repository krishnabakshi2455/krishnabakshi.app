"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Header.css'
import { IoMenuOutline } from "react-icons/io5";

const header: React.FC = () => {
    const pathname = usePathname();
    

    const isActive = (path: string) => pathname === path;
    console.log(pathname);
    
    return (
        <>
            <div className='fixed top-10 h-10 w-screen z-10'>
                <div className='header-container-main flex justify-around gap-96  items-center  w-full '>

                    <div className='header-logo-container-container bg-white rounded-full'>
                        <motion.button
                            className="button text-lg bg-[#32CD32] w-10 h-9 rounded-full text-white"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >K</motion.button>
                    </div>


                    {/* Header Links start */}

                    <div className=' flex gap-7 border-solid justify-center border-2 shadow-gray-300 p-5 rounded-full shadow-lg bg-white w-96'>
                        <motion.button
                            className="button p-1"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link href='/' className={pathname === '/' ? 'active' : 'p-2 header-links-container'}>Home</Link>
                        </motion.button>

                        <motion.button
                            className="button p-1 "
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link href="/about" className={isActive('/about') ? 'active' : 'p-2 header-links-container'}>About</Link>
                        </motion.button>

                        <motion.button
                            className="button p-1"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link href="/projects" className={isActive('/projects') ? 'active' : 'p-2 header-links-container'}>Projects</Link>
                        </motion.button>

                        <motion.button
                            className="button p-1"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link href="/blogs" className={isActive('/blogs') ? 'active' : 'p-2 header-links-container' }>Blogs</Link>
                        </motion.button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default header