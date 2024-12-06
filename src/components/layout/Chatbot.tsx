"use client";
import { RefreshCcw, X, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

function Loader() {
    return (
        <div className="my-2 flex gap-2">
            <img
                src="/image/mainimg.jpg"
                className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary"
            />
            <div className="p-2 bg-secondary rounded-lg flex items-center gap-1">
                <div className="w-2 h-2 rounded-lg bg-primary animate-bounce"></div>
                <div className="w-2 h-2 rounded-lg bg-primary animate-bounce delay-100"></div>
                <div className="w-2 h-2 rounded-lg bg-primary animate-bounce delay-200"></div>
            </div>
        </div>
    );
}

function Welcome() {
    return (
        <div className="flex gap-2 my-2">
            <img
                src="/image/mainimg.jpg"
                className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary"
            />
            <div className="p-2 bg-secondary rounded-lg">Have Questions? Contact Me!</div>
        </div>
    );
}

function EmailOption() {
    return (
        <div className="flex gap-2 my-2">
            <img
                src="/image/mainimg.jpg"
                className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary"
            />

            <div className="flex gap-2 my-2">
                <div>
                    <div className="p-2 bg-secondary rounded-lg rounded-b-none">Get in Touch via Email.</div>
                    <Button variant='outline' className="w-full rounded-t-none  gap-1" asChild>
                        <a href='mailto:krishnabakshi2455@gmail.com' className="text-blue-800 underline text-xsm"
                            target="_blank"
                            rel="noopener noreferrer">
                             krishnabakshi2455@
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function ChatOption() {
    return (
        <div className="flex gap-2 my-2">
            <img
                src="/image/mainimg.jpg"
                className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary"
            />

            <div className="flex gap-2 my-2">
                <div>
                    <div className="p-2 bg-secondary rounded-lg rounded-b-none">Drop Me a Message on WhatsApp.</div>
                    <Button variant='outline' className="w-full rounded-t-none gap-1" asChild>
                        <a href={`https://wa.me/918743809657?text=hi`} target="_blank">
                            <MessageCircle /> Chat Now
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}

function PhoneOption() {
    return (
        <div className="flex gap-2 my-2">
            <img
                src="/image/mainimg.jpg"
                className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary"
            />

            <div className="flex gap-2 my-2">
                <div>
                    <div className="p-2 bg-secondary rounded-lg rounded-b-none">Speak to Me Over the Phone.</div>
                    <Button variant='outline' className="w-full rounded-t-none gap-1" >
                        <a href="tel:+918743809657" rel="noopener noreferrer">
                            Call Me <span className="text-blue-800">+91-8743809657</span>
                        </a> 
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default function Chatbot() {
    const scrollViewportRef = useRef<HTMLDivElement | null>(null);
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<React.ReactNode[]>([]);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true); // Open the chatbot
        }, 3000);
    }, []);


    useEffect(() => {
        if (reloadKey !== 0) {
            setMessages([]);
            setReloadKey(0);
            return;
        }

        setMessages([<Loader key="1" />]);
        setTimeout(() => {
            setMessages((prev) => [...prev.slice(0, -1), <Welcome key="2" />, <Loader key="3" />]);
        }, 4000);
        setTimeout(() => {
            setMessages((prev) => [...prev.slice(0, -1), <EmailOption key="4" />, <Loader key="5" />]);
        }, 5000); // Show EmailOption after 2 seconds

        setTimeout(() => {
            setMessages((prev) => [...prev.slice(0, -1), <ChatOption key="6" />, <Loader key="7" />]);
        }, 6000); // Show ChatOption after 3 seconds

        setTimeout(() => {
            setMessages((prev) => [...prev.slice(0, -1), <PhoneOption key="8" />]);
        }, 7000);
    }, [reloadKey]);

    useEffect(() => {
        const viewport = scrollViewportRef.current;
        if (viewport) {
            viewport.scrollTo({ top: viewport.scrollHeight, behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div key={reloadKey} className="fixed bottom-5 right-5 sm:bottom-10 sm:right-10 z-40">
            <div className="relative">
                <button className="flex items-center gap-4" onClick={() => setOpen(true)}>
                    <div className="bg-white p-2 shadow-[0px_0px_16px_0px_#0000004d] rounded-xl rounded-br-none">Get In Touch</div>
                    <img
                        src="/image/mainimg.jpg"
                        className="w-14 h-14 rounded-full border border-primary"
                        alt="Chatbot avatar"
                    />
                </button>
                {open && (
                    <Card
                        className={cn(
                            "absolute -right-3 bottom-0 h-[75vh] w-[300px] sm:w-96 rounded-xl p-3 flex flex-col duration-300",
                            open && "animate-in zoom-in slide-in-from-bottom slide-in-from-right"
                        )}
                    >
                        <div className="bg-primary text-primary-foreground h-12 w-full rounded-xl flex justify-between p-2 px-3">
                            <div className="flex gap-3 items-center">
                                <img src="/image/mainimg.jpg" className="w-8 h-8 rounded-full" />
                                Krishna Bakshi
                            </div>
                            <div className="flex gap-2">
                                <button
                                    className="hover:bg-white hover:text-primary rounded-lg duration-300 p-1"
                                    onClick={() => setReloadKey((key) => key + 1)}
                                >
                                    <RefreshCcw />
                                </button>
                                <button
                                    className="hover:bg-white hover:text-primary rounded-lg duration-300 p-1"
                                    onClick={() => setOpen(false)}
                                >
                                    <X />
                                </button>
                            </div>
                        </div>
                        <ScrollArea ref={scrollViewportRef} className="flex-grow py-2 px-3">
                            {messages.map((m, index) => (
                                <div key={index}>{m}</div>
                            ))}
                        </ScrollArea>
                    </Card>
                )}
            </div>
        </div>
    );
}
