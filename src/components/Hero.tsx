import React from 'react';
import { Download, Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">Professional Portfolio</h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Hassan Ahmed Bahathiq
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 font-medium">
              Cybersecurity Graduate | GRC | IAM | Security Operations
            </p>
            <p className="text-lg text-gray-400 max-w-xl">
              Experienced in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), Security Operations, Strategic Planning, and PMO initiatives.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="/resume.pdf" download className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <Download size={20} />
              Download Resume
            </a>
            <a href="#contact" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium border border-gray-700 transition-colors">
              <Mail size={20} />
              Contact Me
            </a>
          </div>

          <div className="flex gap-4 pt-4">
            <a href="https://linkedin.com/in/bahathiq" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Hassandld" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800/50 rounded-full hover:bg-emerald-500/20 hover:text-emerald-400">
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 bg-emerald-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
            {/* Placeholder for professional image */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500 text-sm p-8 text-center">
              Professional Photo Placeholder<br/><br/>(Please replace with your actual image)
            </div>
            {/* <Image src="/profile.jpg" alt="Hassan Bahathiq" layout="fill" objectFit="cover" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
