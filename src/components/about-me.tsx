"use client"

import React from "react"
import { ButtonCta } from "./ui/button-shiny"

export default function AboutMe() {
    return (
        <section className="relative w-full flex justify-center items-center py-16 bg-black text-white">
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-10 bg-gradient-to-br from-[#0a0f1f] via-[#0f1b33] to-[#0a0f1f] rounded-3xl border border-white/10 shadow-2xl p-10 md:p-16 relative overflow-hidden">
                {/* Left Side — Photo Placeholder */}
                <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/30 overflow-hidden">
                    <img
                        src="https://55es74p0qv.ufs.sh/f/DLSrgoPikScAmAkQaJ7SOD975sUMJNfEXktmc4K0eabALFn6"
                        alt="Profile"
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Right Side — Content */}
                <div className="flex-1 space-y-6">
                    {/* About Me Tag */}
                    <div className="inline-flex items-center gap-2  px-4 py-1.5 rounded-full text-sm font-medium shadow-md">
                        <ButtonCta label="About me" className="w-fit" />
                    </div>

                    {/* Bio */}
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        I’m a passionate <span className="font-semibold text-white">Software Engineer</span> focused on building{" "}
                        <span className="font-semibold text-white">scalable, intelligent systems</span> that merge{" "}
                        <span className="font-semibold text-white">AI</span>,{" "}
                        <span className="font-semibold text-white">Web3</span>, and{" "}
                        <span className="font-semibold text-white">modern full-stack development</span>. Currently at{" "}
                        <span className="font-semibold text-white">Eli Lilly</span>, I bridge{" "}
                        <span className="font-semibold text-white">business and technology</span> to deliver impactful{" "}
                        <span className="font-semibold text-white">automation and digital solutions</span>. With multiple{" "}
                        <span className="font-semibold text-white">hackathon wins</span> and hands-on experience in{" "}
                        <span className="font-semibold text-white">AI-driven</span> and{" "}
                        <span className="font-semibold text-white">blockchain projects</span>, I thrive on turning{" "}
                        <span className="font-semibold text-white">complex ideas</span> into{" "}
                        <span className="font-semibold text-white">elegant, high-performing systems</span>.
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">
                        {[
                            "Full-Stack Development",
                            "AI Engineering",
                            "Web3 & Blockchain",
                            "Next.js",
                            "React",
                            "TypeScript",
                            "Node.js",
                            "Solana",
                            "Docker",
                            "PostgreSQL",
                            "Power Automate",
                            "Hackathon Winner",
                            "Problem Solving",
                            "Automation",
                            "System Design",
                            "Team Collaboration",
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>


                    {/* Experience Section */}
                    <div className="pt-6 border-t border-white/10 text-gray-300">
                        <div className="flex justify-between py-2">
                            <span>Eli Lilly</span>
                            <span className="text-gray-400">July 2025 – Present</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Brunel University</span>
                            <span className="text-gray-400">Oct 2024 – Apr 2025</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span>Websprint</span>
                            <span className="text-gray-400">Jan 2024 – Nov 2024</span>
                        </div>
                    </div>
                </div>

                {/* Optional gradient glow */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-blue-600/5 via-transparent to-purple-600/5 rounded-3xl" />
            </div>
        </section>
    )
}
