"use client"

import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { FollowerPointerCard } from "./ui/following-pointer"

const projectsData = [
    {
        id: 1,
        title: "Lana AI: Cursor for Smart Contracts on Solana",
        description:
            "LANA AI - A Platform to Build, Debug, and Deploy Smart Contracts on Solana Using Natural Language in Browser",
        tags: ["AI/ML", "Next.js", "Kubernetis", "IDE Development", "Vs-code extension",
            "Solana", "Smart Contract Development", "Anchor"
        ],
        image: "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAqh7HEYNeA6w21sROXcCIvlzVgxBEbZQdPMKJ",
        github: "https://github.com/Sahid-m/Lana-Ai/",
        live: "https://lana-ai.vercel.app/",
    },
    {
        id: 2,
        title: "Hack the Wallet",
        description:
            "Hack the Wallet is an immersive blockchain-based game built on Starknet, blending conversational AI with retro pixel-art aesthetics. Challenge Joe, a cunning AI, to reclaim borrowed crypto through witty dialogue. With a Star Wars-inspired crawl, voice interaction, and a free 100-token airdrop, this game makes DeFi fun and accessible. Ready to outsmart the wallet? ",
        tags: ["Next.js", "Web3 Gaming", "Starknet", "Pixel Art", "AI/ML"],
        image: "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAY3jHQjRUfxhbsj9LSNtniR0aTZrG7dcOV4DX",
        github: "https://github.com/Sahid-m/HackTheWallet",
        live: "https://hack-the-wallet.vercel.app/",
    },
    {
        id: 3,
        title: "Xarbi",
        description:
            "Xarbi is an AI SaaS platform that enables developers to monetize their APIs using the x402 payment protocol. Built on Arbitrum Sepolia, Xarbi handles payment verification, resource access control, and blockchain transaction management seamlessly.",
        tags: ["SaaS", "TypeScript", "FinTech", "x402", "npm package", "Arbitrum", "Best DX"],
        image: "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAYecvYDqRUfxhbsj9LSNtniR0aTZrG7dcOV4D",
        github: "https://github.com/Sahid-m/xarbi-full",
        live: "https://mobile-banking-demo.vercel.app/",
    },
]

interface ProjectCardProps {
    project: (typeof projectsData)[0]
    index: number
    offset: number
}

const TitleComponent = ({
    title,
}: {
    title: string;
}) => (
    <div className="flex items-center space-x-2">

        <p>{title}</p>
    </div>
);

function ProjectCard({ project, index, offset }: ProjectCardProps) {
    const raw = offset - index
    const progress = Math.max(0, Math.min(raw, 1))
    const translateY = progress * 80
    const zIndex = index + 1

    const handleCardClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement
        if (target.closest("a")) return
        window.open(project.live || project.github, "_blank", "noopener,noreferrer")
    }

    // ✨ Unique gradient backgrounds per project
    const gradientPresets = [
        "from-[#1e3c72] via-[#2a5298] to-[#243B55]", // blue / indigo
        "from-[#42275a] via-[#734b6d] to-[#2b1331]", // purple / rose
        "from-[#0f2027] via-[#203a43] to-[#2c5364]", // teal / blue
    ]
    const gradient = gradientPresets[index % gradientPresets.length]

    return (
        <div
            className="flex items-center justify-center px-4 sm:px-6 lg:px-8 sticky top-0"
            style={{
                transform: `translateY(${translateY}px)`,
                transition: "transform 150ms ease-out",
                zIndex,
            }}
        >
            <div
                onClick={handleCardClick}
                onKeyDown={(e) => e.key === "Enter" && handleCardClick(e as any)}
                role="button"
                tabIndex={0}
                className={`group relative max-w-6xl w-full overflow-hidden rounded-3xl 
                    bg-gradient-to-br ${gradient} 
                    p-8 shadow-2xl border border-white/10 cursor-none 
                    transition-all duration-500 
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.01]`}
            >
                {/* ✨ Animated shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-white/20 via-transparent to-white/20 animate-gradientMove pointer-events-none" />

                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 items-center relative z-10">
                    {/* Left: Text */}
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-md">
                                {project.title}
                            </h3>
                            <p className="text-gray-200 text-base lg:text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-white/10 text-gray-100 text-sm rounded-full border border-white/20 
                                    transition-all duration-300 hover:bg-white/20 hover:text-white hover:shadow-md"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4 mt-6">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                                >
                                    <Github size={18} /> <span>GitHub</span>
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={18} /> <span>Live Demo</span>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden group">
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent z-10" />

                        {/* Image */}
                        <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}



export default function SelectedProjects() {
    const [scrollOffset, setScrollOffset] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return
            const sectionTop = sectionRef.current.offsetTop
            const sectionHeight = sectionRef.current.offsetHeight
            const windowHeight = window.innerHeight
            const scrollPos = window.scrollY

            const scrollStart = sectionTop + windowHeight
            const scrollEnd = sectionTop + sectionHeight - windowHeight
            const scrollRange = scrollEnd - scrollStart

            if (scrollPos < scrollStart) {
                setScrollOffset(0)
            } else if (scrollPos > scrollEnd) {
                setScrollOffset(projectsData.length)
            } else {
                const progress = (scrollPos - scrollStart) / scrollRange
                setScrollOffset(progress * projectsData.length)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section ref={sectionRef} className="relative w-full bg-black">
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-white text-center mb-4">
                    Selected Projects
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto" />
            </div>

            <div className="flex gap-10 flex-col">
                {projectsData.map((project, index) => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        offset={scrollOffset}
                    />

                ))}
            </div>

            <div className="h-96 bg-black" />
        </section>
    )
}
