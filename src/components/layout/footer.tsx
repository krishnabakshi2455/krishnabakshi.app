"use client"
import { useState, useEffect, useRef } from 'react';
import ContactButton from "@/components/contact-form/contact-button";

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);
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

    return (
        <footer className={`
        flex w-full flex-col items-center gap-20  px-6 py-8 sm:px-14 md:px-20
         ${isVisible ? ' animate-in slide-in-from-bottom delay-150 duration-500' : ''}
        `} ref={ref}>
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 bg-primary rounded-2xl p-8 text-background sm:p-12 md:gap-12 lg:p-20">
                <div className="text-center">
                    <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-primary md:text-sm lg:text-base">
                        Get in touch
                    </span>
                </div>
                <a
                    href={`mailto:krishnabakshi2455@gmail.com`}
                    target="_blank"
                    className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
                >
                    <span>krishnabakshi2455@</span>
                    <br />
                    <span>gmail.com</span>
                </a>
                <div className="flex justify-center">
                    <ContactButton />
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
                <span className="text-primary">©2024 Krishna Bakshi</span>
            </div>
        </footer>
    );
}
