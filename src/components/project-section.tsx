"use client";
import React from "react";
import SelectedProjects from "./card-stacking";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


export function Projects() {
    return (
        <div className="w-full py-4 h-fit">
            <SelectedProjects />
        </div>
    );
}
