'use client'

import { BottomNavbar } from "@/components/bottom-navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="home" >
        <div className="max-w-4xl mx-auto px-4 py-12 pb-24">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black mb-4">HOME</h1>
              <p className="text-slate-400">Scroll down to see the sticky bottom navigation in action</p>
            </div>

            {/* Demo sections */}
            {[1, 2, 3, 4, 5].map((section) => (
              <div key={section} className="bg-slate-800/50 rounded-lg p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Section {section}</h2>
                <p className="text-slate-400 leading-relaxed">
                  This is a demo section. The bottom navigation bar will stick to the bottom of the screen as you scroll.
                  Try scrolling up and down to see the smooth animations and transitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" >
        <div className="max-w-4xl mx-auto px-4 py-12 pb-24">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black mb-4">About</h1>
              <p className="text-slate-400">Scroll down to see the sticky bottom navigation in action</p>
            </div>

            {/* Demo sections */}
            {[1, 2, 3, 4, 5].map((section) => (
              <div key={section} className="bg-slate-800/50 rounded-lg p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Section {section}</h2>
                <p className="text-slate-400 leading-relaxed">
                  This is a demo section. The bottom navigation bar will stick to the bottom of the screen as you scroll.
                  Try scrolling up and down to see the smooth animations and transitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="work" >
        <div className="max-w-4xl mx-auto px-4 py-12 pb-24">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black mb-4">Work</h1>
              <p className="text-slate-400">Scroll down to see the sticky bottom navigation in action</p>
            </div>

            {/* Demo sections */}
            {[1, 2, 3, 4, 5].map((section) => (
              <div key={section} className="bg-slate-800/50 rounded-lg p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Section {section}</h2>
                <p className="text-slate-400 leading-relaxed">
                  This is a demo section. The bottom navigation bar will stick to the bottom of the screen as you scroll.
                  Try scrolling up and down to see the smooth animations and transitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" >
        <div className="max-w-4xl mx-auto px-4 py-12 pb-24">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-black mb-4">Contact</h1>
              <p className="text-slate-400">Scroll down to see the sticky bottom navigation in action</p>
            </div>

            {/* Demo sections */}
            {[1, 2, 3, 4, 5].map((section) => (
              <div key={section} className="bg-slate-800/50 rounded-lg p-8 border border-slate-700/50">
                <h2 className="text-2xl font-bold text-white mb-4">Section {section}</h2>
                <p className="text-slate-400 leading-relaxed">
                  This is a demo section. The bottom navigation bar will stick to the bottom of the screen as you scroll.
                  Try scrolling up and down to see the smooth animations and transitions.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BottomNavbar />
    </>
  );
}
