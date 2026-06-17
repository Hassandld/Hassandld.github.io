import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="md:w-1/3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">About Me</h2>
            <div className="w-16 h-1 bg-emerald-500 rounded"></div>
          </div>
          <div className="md:w-2/3 space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a results-driven Cybersecurity graduate with a strong foundation in Governance, Risk & Compliance (GRC), Identity & Access Management (IAM), and Security Operations. My passion lies in aligning technical security capabilities with broader business and governance needs.
            </p>
            <p>
              Through roles ranging from a Cybersecurity Engineer Intern at <strong>Salla E-Commerce</strong> to a Cyber Threat Hunter at the <strong>Makkah Municipality</strong>, I've developed hands-on expertise in conducting NCA-aligned risk assessments, developing security policies, and deploying SIEM solutions. My graduation project, the <strong>Muwahhad IAM Platform</strong>, demonstrated my ability to architect centralized identity governance and lifecycle management solutions.
            </p>
            <p>
              Beyond technical cybersecurity skills, I bring extensive leadership and strategic PMO experience. As the President of the <strong>UQU Computing Club</strong> and a Planning & PMO Specialist, I've orchestrated large-scale technology events, developed operational KPIs, and managed multidisciplinary teams to drive digital transformation initiatives aligned with Saudi Vision 2030.
            </p>
            <p>
              Recognized with the <strong>Jahiziyah Excellence Badge</strong> (2026) and as a <strong>BlackHat MEA CTF Finalist</strong>, I combine analytical rigor with strategic vision to deliver robust, secure, and resilient technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
