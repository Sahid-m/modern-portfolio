"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { HeroHighlight } from "./ui/hero-highlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function HeroSection() {
    const words = [
        { text: "I" },
        { text: "Build" },
        { text: "Products", className: "text-blue-500 dark:text-blue-500" },
        { text: "and Sometimes" },
        { text: "Cool", className: "text-blue-500 dark:text-blue-500" },
        { text: "Stuff." },
    ];



    return (
        <>
            <HeroHighlight className="max-h-[80vh]">
                <div className="flex flex-col items-center justify-center h-[80vh]  space-y-6">
                    <h1 className="text-3xl px-4 md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 max-w-4xl text-center">
                        Hi, I am Sahid Munjavar
                    </h1>

                    <TypewriterEffectSmooth words={words} />

                    <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <Link href="#work"
                            scroll={false}
                            onClick={(e) => {
                                e.preventDefault()
                                const el = document.getElementById("work")
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="w-40 h-10 rounded-xl bg-black text-white border border-transparent"
                            >
                                View Projects
                            </motion.button>
                        </Link>

                        <Link href="https://55es74p0qv.ufs.sh/f/DLSrgoPikScAEFCmG5HIFLBnq8kYRpSMmNWArVCdE3cybtXv" target="_blank"
                            rel="noopener noreferrer"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                className="w-40 h-10 rounded-xl bg-white text-black border border-black"
                            >
                                View CV
                            </motion.button>
                        </Link>
                    </div>
                </div>

            </HeroHighlight>
        </>
    );
}
