"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Header.css";
import AOS from 'aos'
import 'aos/dist/aos.css';


const Header: React.FC = () => {
    const pathname = usePathname();
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number }>({
        left: 0,
        width: 0,
    });

    const linkspath = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Blogs", path: "/blogs" },
    ];

    const isActive = (path: string) => pathname === path;

    // Update the indicator position and size when pathname changes
    useEffect(() => {
        const activeLink = linkRefs.current[pathname];
        if (activeLink) {
            const rect = activeLink.getBoundingClientRect();
            setIndicatorStyle({
                left: activeLink.offsetLeft,
                width: rect.width,
            });
        }
    }, [pathname]);

    return (
        <div className="fixed top-10 h-10 w-screen z-10">
            <div className="header-container-main flex justify-around gap-96 items-center w-full">
                {/* Logo Section */}
                <div className="header-logo-container-container bg-white rounded-full">
                    <motion.button
                        className="button text-lg bg-[#32CD32] w-10 h-9 rounded-full text-white"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        K
                    </motion.button>
                </div>

                {/* Header Links Section */}
                <div className="flex gap-7 border-solid justify-center border-2 shadow-gray-300 p-5 rounded-full shadow-lg bg-white w-96 relative" data-aos="fade-up">
                    {/* Active Background Indicator */}
                    <motion.div
                        // className="absolute top-0 h-full bg-[#32CD32] rounded-full -z-10"
                        // animate={{
                        //     left: `${indicatorStyle.left}px`,  // Animate left position
                        //     width: `${indicatorStyle.width}px`, // Animate width
                        // }}
                        // transition={{
                        //     duration: 0.3, // Transition time for smooth sliding
                        //     ease: "easeInOut",
                        // }}
                    />
                    {/* Links */}
                    {linkspath.map((link) => (
                        <motion.div
                            key={link.path}
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link
                                href={link.path}
                                passHref
                                ref={(el) => {
                                    linkRefs.current[link.path] = el as HTMLAnchorElement;
                                }}
                                className={`p-2 header-links-container ${isActive(link.path) ? "text-white bg-[#32CD32] rounded-full" : "text-black"}`}
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Header;
