"use client";

import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="absolute inset-0 bg-gray-950"></div>
      
      <div className="absolute inset-0">
        <Image 
          src="/about-image.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-60" 
          priority
        />
        <div className="absolute inset-0 bg-gray-950/50 backdrop-blur-[60px]"></div>
      </div>
    </div>
  );
}
