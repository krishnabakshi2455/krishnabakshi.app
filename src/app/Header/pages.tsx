"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './page.css'

const pages: React.FC = () => {
    const pathname = usePathname();
    

    const isActive = (path: string) => pathname === path;
    console.log(pathname);
    
    return (
        <>
            <div className='header-container-main flex justify-around gap-96 m-10 items-center  w-full'>

                <div className='header-logo-container-container bg-white rounded-full'>
                    <motion.button
                        className="button text-lg bg-lime-500 w-10 h-9 rounded-full text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >K</motion.button>
                </div>

                <div className='header-links-container flex gap-7 border-solid border-2 shadow-gray-300 p-5 rounded-full shadow-lg bg-white'>
                    <motion.button
                        className="button p-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href='/' className={pathname==='/' ? 'active' : ''}>Home</Link>
                    </motion.button>

                    <motion.button
                        className="button p-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
                    </motion.button>

                    <motion.button
                        className="button p-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href=''>Projects</Link>
                    </motion.button>

                    <motion.button
                        className="button p-1"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link href=''>Blogs</Link>
                    </motion.button>
                </div>
            </div>
        </>
    )
}

export default pages