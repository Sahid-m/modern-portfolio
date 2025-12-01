

import AboutMe from "@/components/about-me";
import { BottomNavbar } from "@/components/bottom-navbar";
import HeroSection from "@/components/HeroSection";
import { Projects } from "@/components/project-section";
import { ModeToggle } from "@/components/theme-change-button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TweetCard } from "@/components/ui/tweet-card";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const HackathonImageUrls = [
    {
      imageUrl:
        "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAFpJLYmh2vl8BQwTuf9hZIHRMJeb1CsY4Kiaj",
    },
    {
      imageUrl:
        "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAYt3Gv3RUfxhbsj9LSNtniR0aTZrG7dcOV4DX",
    },
    {
      imageUrl:
        "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAKJkgMAEfBqSlAnQsT8E0bUMOIYvDx2y4ui9R",
    },
    {
      imageUrl: "https://55es74p0qv.ufs.sh/f/DLSrgoPikScARBxUiFbIh59SdGOyB4AiJZLCMPvNojbHD2cl"
    },
    {
      imageUrl: "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAACFRxis8iwKTujxD49qM0Lb1YaSEhczIofUm"
    },
  ];

  const tweets = [
    {
      tweetId: "1668408059125702661"
    },
    {
      tweetId: "1912883631967834447",
    },
    {
      tweetId: "1761089422701773128"
    }, {
      tweetId: "1957166541222334560"
    }
  ]

  const links = [
    { name: "LinkedIN", href: "https://www.linkedin.com/in/sahidm/" },
    { name: "Instagram", href: "https://www.instagram.com/defnot.sahid/" },
    { name: "Github", href: "https://github.com/Sahid-m/" },
    { name: "Resume", href: "https://55es74p0qv.ufs.sh/f/DLSrgoPikScAEFCmG5HIFLBnq8kYRpSMmNWArVCdE3cybtXv" },
  ];

  return (
    <>
      <section id="home" >
        <HeroSection />
      </section>
      <section>
        <div className="flex justify-center">

          <h1 className="text-md md:text-3xl">
            Hackathons I've Won(8+):
          </h1>
        </div>
        <>
          <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={HackathonImageUrls}
              direction="right"
              speed="slow"
            />
          </div>
        </>
      </section>
      <section id="work" className="h-full bg-black">
        <Projects />
      </section>
      <section id="about" >
        <AboutMe />
      </section>
      {/* <section id="POF" className="columns-1 md:columns-2 lg:columns-3 gap-4 p-4">


        {tweets.map((tw) => (

          <TweetCard id={tw.tweetId} key={tw.tweetId} />

        ))}
      </section> */}

      <section id="contact" className="mb-20" >
        <footer className="w-full bg-black text-white pt-8 pb-6">
          {/* Decorative line */}
          <div className="flex justify-center">
            <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
          </div>

          {/* Footer content */}
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 mt-6">
            {/* Left side - initials or logo */}
            <div className="text-cyan-400 text-lg font-semibold mb-4 md:mb-0">
              SM
            </div>

            {/* Right side - footer links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-neutral-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </section>
      <BottomNavbar />
    </>
  );
}
