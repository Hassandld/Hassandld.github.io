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

  // Calculate blur amount based on scroll position (max 10px blur)
  const blurAmount = Math.min(scrollY / 30, 10);

  return (
    <div className="fixed inset-0 -z-50 bg-gray-900">
      <div 
        className="absolute inset-0"
        style={{ filter: `blur(${blurAmount}px)`, transition: 'filter 0.1s ease-out' }}
      >
        <Image 
          src="/about-image.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-20 md:opacity-30" 
          priority
        />
      </div>
      {/* Dark overlay to ensure text remains highly readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-900"></div>
    </div>
  );
}
