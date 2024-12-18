"use client";
import { useState, useEffect, useRef } from 'react';
import Link from "./custom-link";
import { usePathname } from "next/navigation";
import MobileNav from './mobile-nav';
import AnimatedLogo from "@/animations/animationlogo/animated-logo";
import { motion } from "framer-motion";

const Header: React.FC = () => {
    const pathname = usePathname();

function classNames(
  ...classes: Array<string | boolean | false | undefined | null>
): string {
  return classes.filter(Boolean).join(" ");
}

    const linkspath = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Blogs", href: "/blogs" },
    ];


    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
                // setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }, // Adjust this for sensitivity
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

    console.log(isVisible);
    


    return (
        <div className=" h-10 z-10">
            <div className="
             md:flex
             md:justify-around
             md:gap-80
             md:items-center
             md:w-full
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
             kb1:z-[55]
             
             ">
               
                {/* Logo Section */}

                <Link
                    href="/"
                    className="drop-shadow-teralight flex items-center justify-center"
                    aria-label="Return to home page"
                >
                    <div className="relative h-12 w-12 sm:h-14 sm:w-14" >
                        <AnimatedLogo/>
                    </div>
                </Link>

       

                {/* Header Links Section */}
                <div
                    className={``}

                >
                    <div className="mx-auto flex items-center justify-between lg:max-w-7xl">
                        <nav className="hidden items-center gap-2 rounded-full px-2 py-2 shadow-md ring-1 ring-zinc-200 backdrop-blur-md dark:ring-accent/50 md:flex">
                            <ul className="flex gap-2 text-sm font-medium">
                                {linkspath.map((_link, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="my-3 transition-transform duration-100 hover:scale-[1.1]"
                                        >
                                            <Link
                                                href={_link.href}
                                                className={classNames(
                                                    pathname === _link.href
                                                        ? "font-semibold text-background dark:hover:text-foreground"
                                                        : "text-foreground",
                                                    "group relative mx-3 rounded-full px-3 py-2 transition-colors duration-200",
                                                )}
                                            >
                                                {_link.href === pathname && (
                                                    <motion.span
                                                        layoutId="tab-pill"
                                                        animate={{
                                                            transition: {
                                                                x: {
                                                                    type: "spring",
                                                                    stiffness: 300,
                                                                    damping: 30,
                                                                },
                                                            },
                                                        }}
                                                        className="absolute inset-0 -z-10 rounded-full bg-primary group-hover:bg-primary"
                                                    ></motion.span>
                                                )}
                                                {_link.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>



                    {/*  mobile menu icon start  */}
                    <div className="block md:hidden text-primary bg-transparent">
                        <MobileNav  />
                    </div>

                    {/* mobile menu links */}

                    


                </div>
            </div>
        </div>
    );
};

export default Header;
