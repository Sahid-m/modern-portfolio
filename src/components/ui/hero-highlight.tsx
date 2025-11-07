"use client";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [isActive, setIsActive] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [touchStart, setTouchStart] = React.useState<{ x: number; y: number } | null>(null);

  const dotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' cx='10' cy='10' r='2.5' /%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' cx='10' cy='10' r='2.5' /%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' cx='10' cy='10' r='2.5' /%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' cx='10' cy='10' r='2.5' /%3E%3C/svg%3E")`,
    },
  };

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;
    setIsActive(true);
    setTouchStart({ x: touch.clientX, y: touch.clientY });

    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(touch.clientX - left);
    mouseY.set(touch.clientY - top);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (!touch) return;

    // detect scroll direction
    if (touchStart) {
      const dy = Math.abs(touch.clientY - touchStart.y);
      const dx = Math.abs(touch.clientX - touchStart.x);

      // if it's a vertical scroll, allow scrolling normally
      if (dy > dx) return;
    }

    // if mostly horizontal or stationary movement → update effect
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(touch.clientX - left);
    mouseY.set(touch.clientY - top);
  };

  const handleTouchEnd = () => setIsActive(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const overlayVisible = isHovered || isActive;

  return (
    <div
      className={cn(
        "relative flex max-h-screen w-full items-center justify-center bg-white dark:bg-black overflow-hidden",
        containerClassName,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Default dots */}
      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{ backgroundImage: dotPatterns.light.default }}
      />
      <div
        className="pointer-events-none absolute opacity-30 inset-0 hidden dark:block"
        style={{ backgroundImage: dotPatterns.dark.default }}
      />

      {/* Hover/touch overlay */}
      <motion.div
        animate={{ opacity: overlayVisible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <motion.div
        animate={{ opacity: overlayVisible ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              160px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Content */}
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};
