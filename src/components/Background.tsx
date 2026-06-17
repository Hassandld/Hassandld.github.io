"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 30, 15);

  return (
    <div className="fixed inset-0 z-[-1]">
      {/* Base dark layer */}
      <div className="absolute inset-0 bg-gray-950"></div>
      
      {/* Image layer with dynamic blur */}
      <div 
        className="absolute inset-0"
        style={{ filter: `blur(${blurAmount}px)`, transition: 'filter 0.1s ease-out' }}
      >
        <Image 
          src="/about-image.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-40 md:opacity-50" 
          priority
        />
      </div>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gray-900/60"></div>
    </div>
  );
}
