import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Cybersecurity Engineer Intern",
    company: "SALLA E-Commerce",
    date: "Jun 2025 - Aug 2025",
    location: "Makkah - Jeddah, Saudi Arabia",
    description: [
      "Conducted NCA-aligned risk assessments and developed security policies, IR procedures, and BCP documentation.",
      "Deployed Wazuh SIEM and implemented Cloudflare WAF controls to strengthen security monitoring and web protection.",
      "Supported secure coding reviews and security awareness initiatives."
    ]
  },
  {
    role: "Cyber Threat Hunter - COOP",
    company: "Makkah Municipality",
    date: "Mar 2025 - Jul 2025",
    location: "Makkah, Saudi Arabia",
    description: [
      "Conducted threat hunting and security monitoring using SIEM solutions.",
      "Investigated phishing incidents and supported incident response activities.",
      "Assisted in risk assessments and awareness programs aligned with NCA requirements."
    ]
  },
  {
    role: "Planning & PMO Specialist",
    company: "Rehlat W manafe - Ashraqat",
    date: "Apr 2025 - Jul 2025 & Mar 2026 - Jun 2026",
    location: "Makkah, Saudi Arabia",
    description: [
      "Supported risk management and compliance initiatives aligned with organizational and regulatory requirements.",
      "Developed and monitored operational KPIs during the Hajj season to measure performance and service effectiveness.",
      "Built dynamic Power BI dashboards and executive reports to support strategic planning and data-driven decision-making."
    ]
  },
  {
    role: "Associate Project Manager (Scrum Master)",
    company: "Alborhan Association",
    date: "Apr 2025 - Nov 2025",
    location: "Remote, Riyadh",
    description: [
      "Facilitated Agile workflows and project lifecycles for technology initiatives, improving team coordination.",
      "Conducted business analysis to identify operational bottlenecks and implement continuous improvement strategies."
    ]
  },
  {
    role: "President",
    company: "UQU Computing Club",
    date: "Jan 2024 - Dec 2025",
    location: "College of Computing, Makkah",
    description: [
      "Led governance and strategic initiatives for the university's largest student organization.",
      "Organized flagship technology events including TechProTalk and Entrepreneurship Week.",
      "Managed multidisciplinary teams and initiatives reaching 500+ students, fostering technical growth."
    ]
  },
  {
    role: "Head of Technology Community",
    company: "KEPTAR - Awontech",
    date: "Jan 2024 - Dec 2026",
    location: "Makkah, Saudi Arabia",
    description: [
      "Led community-driven technology initiatives aligned with Saudi Vision 2030, driving digital awareness.",
      "Organized technical programs and content campaigns highlighting Saudi technology, innovation, and entrepreneurship."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Experience</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-gray-900 bg-emerald-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ml-0 md:ml-0 z-10">
                <Briefcase size={16} />
              </div>
              
              {/* Content Box */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-emerald-500/50 transition-colors shadow-lg ml-6 md:ml-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="text-emerald-400 font-medium">{exp.company}</div>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 whitespace-nowrap bg-gray-900 px-3 py-1 rounded-full">
                    <Calendar size={14} className="mr-1.5" />
                    {exp.date}
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-4">{exp.location}</div>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm md:text-base leading-relaxed">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
