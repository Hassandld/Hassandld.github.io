"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Background() {
  return (
    <div 
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-slate-950 select-none" 
      aria-hidden="true"
    >
      {/* Ambient Glowing Gradient Orbs */}
      <motion.div
        className="absolute -top-[15%] -left-[10%] w-[500px] h-[500px] md:w-[750px] md:h-[750px] rounded-full opacity-60 blur-[120px] will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, rgba(5, 150, 105, 0.08) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-[35%] -right-[15%] w-[450px] h-[450px] md:w-[650px] md:h-[650px] rounded-full opacity-55 blur-[120px] will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.20) 0%, rgba(8, 145, 178, 0.06) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, -50, 25, 0],
          y: [0, 40, -30, 0],
          scale: [1.05, 0.92, 1.1, 1.05],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-[10%] left-[25%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-45 blur-[110px] will-change-transform"
        style={{
          background: "radial-gradient(circle, rgba(20, 184, 166, 0.18) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, -35, 0],
          y: [0, -40, 20, 0],
          scale: [0.95, 1.08, 0.98, 0.95],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle Dot Grid Overlay */}
      <div 
        className="absolute inset-0 bg-dot-grid opacity-25 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" 
      />

      {/* Top & Bottom Depth Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80" />
    </div>
  );
}
