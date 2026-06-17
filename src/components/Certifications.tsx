import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certs = [
  { name: "eJPT", desc: "Penetration Testing, Vulnerability Assessment & Ethical Hacking", issuer: "eLearnSecurity" },
  { name: "ISC2 CC", desc: "Security Architecture, GRC, Identity Management", issuer: "ISC2" },
  { name: "ISC2 Cybersecurity Specialization", desc: "Access Control, Network & Cloud Security, Cryptography & Incident Response", issuer: "ISC2 / Coursera" },
  { name: "NCA-KAUST Cybersecurity Program", desc: "Advanced Cybersecurity Training", issuer: "NCA / KAUST" },
  { name: "Kaspersky Cybersecurity Program", desc: "Cyber Defense, Threat Analysis & Security Practices", issuer: "Kaspersky" },
  { name: "Misk Skills", desc: "Cybersecurity Incident Response & Nonprofit Project Management", issuer: "Misk Foundation" },
  { name: "McKinsey Forward Program", desc: "Leadership, Problem Solving & Strategic Thinking", issuer: "McKinsey & Company" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Certifications</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <div key={index} className="bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-emerald-500/50 rounded-xl p-6 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
                {/* Placeholder for future links */}
                <a href="#" className="text-gray-500 hover:text-emerald-400 transition-colors">
                  <ExternalLink size={16} />
                </a>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
              <p className="text-sm text-emerald-400 mb-3">{cert.issuer}</p>
              <p className="text-sm text-gray-400">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
