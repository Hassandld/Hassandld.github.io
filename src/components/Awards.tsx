import React from 'react';
import { Trophy } from 'lucide-react';

const awards = [
  {
    title: "Jahiziyah Excellence Badge",
    org: "ETEC & NCA",
    date: "2026",
    desc: "Awarded for outstanding performance in the Cybersecurity Readiness Assessment."
  },
  {
    title: "CTF Finalist",
    org: "BlackHat MEA",
    date: "2024",
    desc: "Achieved finalist status in the prestigious BlackHat Middle East and Africa Capture The Flag competition."
  },
  {
    title: "Dean's Honor List",
    org: "UQU Computing College",
    date: "Jun 2024",
    desc: "Recognized for Extracurricular Activities & Strategic Leadership."
  },
  {
    title: "4th Place Winner",
    org: "NASA Space Apps Challenge",
    date: "Oct 2023",
    desc: "Project: 'Prediction of Natural Resources Based on Geospatial'."
  }
];

const Awards = () => {
  return (
    <section id="awards" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Awards & Achievements</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="flex bg-gray-800 rounded-xl border border-gray-700 p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="mr-6 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                  <Trophy size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-emerald-400">{award.org}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-sm text-gray-400">{award.date}</span>
                </div>
                <p className="text-gray-400 text-sm">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
