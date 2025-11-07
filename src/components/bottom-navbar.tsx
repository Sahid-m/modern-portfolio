"use client"

import { motion } from "framer-motion"
import { Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { useEffect, useState } from "react"

interface NavItem {
    id: string
    label: string
    href: string
    icon: React.ReactNode
    gradient: string
}

const NAV_ITEMS: NavItem[] = [
    {
        id: "home",
        label: "Home",
        href: "home",
        gradient: "from-blue-400 via-purple-500 to-pink-500",
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
        ),
    },
    {
        id: "work",
        label: "Work",
        href: "work",
        gradient: "from-pink-400 via-red-500 to-yellow-500",
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 6h-2.18c.11-.89.47-1.76 1.08-2.55A2.84 2.84 0 0 0 15.77 0a2.806 2.806 0 0 0-5.77 0c-.63.84-.97 1.66-1.08 2.55H4c-2.13 0-4 1.86-4 4v10c0 2.13 1.87 4 4 4h16c2.13 0 4-1.87 4-4V10c0-2.14-1.87-4-4-4z" />
            </svg>
        ),
    },
    {
        id: "about",
        label: "About",
        href: "about",
        gradient: "from-green-400 via-emerald-500 to-teal-500",
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        ),
    },
    {
        id: "recommendation",
        label: "Recommendation",
        href: "recommendation",
        gradient: "from-cyan-400 via-sky-500 to-blue-500",
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        ),
    },
    {
        id: "contact",
        label: "Contact",
        href: "contact",
        gradient: "from-indigo-400 via-purple-500 to-pink-500",
        icon: (
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
    },
]

export function BottomNavbar() {
    const pathname = usePathname()
    const [active, setActive] = useState("home")

    // Detect section in view
    useEffect(() => {
        const updateActive = () => {
            let current = active
            NAV_ITEMS.forEach((item) => {
                const el = document.getElementById(item.href)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
                        current = item.id
                    }
                }
            })
            setActive(current)
        }

        window.addEventListener("scroll", updateActive)
        window.addEventListener("resize", updateActive)
        updateActive() // run initially

        return () => {
            window.removeEventListener("scroll", updateActive)
            window.removeEventListener("resize", updateActive)
        }
    }, [])


    return (
        <nav className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
            {/* MOBILE-first: default classes apply to phones (sm = >=640px) */}
            <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800/40 rounded-full
                            px-2 py-1 flex items-center gap-1 shadow-lg
                            scale-75 sm:scale-90 md:scale-125
                            transition-transform duration-300">
                {NAV_ITEMS.map((item) => {
                    const isActive = active === item.id
                    return (
                        <Link
                            key={item.id}
                            href={`#${item.href}`}
                            scroll={false}
                            onClick={(e) => {
                                e.preventDefault()
                                const el = document.getElementById(item.href)
                                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.06 }}
                                whileTap={{ scale: 0.96 }}
                                animate={{
                                    backgroundColor: isActive ? "rgba(37,99,235,0.12)" : "transparent",
                                    scale: isActive ? 1.03 : 1,
                                }}
                                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                                className={`relative flex flex-col items-center justify-center px-2 sm:px-3 sm:py-2 py-1 rounded-full cursor-pointer transition-all duration-200`}
                            >
                                <span
                                    className={`text-sm sm:text-md text-white font-medium bg-clip-text`}
                                >
                                    {item.label === "Home" ? <Home /> : item.label}
                                    {/* {item.label} */}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-full bg-linear-to-t from-slate-900 to-blue-800/30 -z-10 border-amber-50/20 border  drop-shadow-black"
                                        transition={{ type: "spring", stiffness: 250, damping: 25 }}
                                    >
                                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-white to-transparent" />
                                    </motion.div>
                                )}
                            </motion.div>
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}
