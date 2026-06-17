import React from 'react';

const skillCategories = [
  {
    title: "Security Operations",
    skills: ["SIEM", "Wazuh", "Splunk", "Threat Hunting", "Incident Response", "Security Monitoring", "MITRE ATT&CK"]
  },
  {
    title: "Governance, Risk & Compliance (GRC)",
    skills: ["Risk Assessment", "NCA ECC", "Security Policies", "Compliance", "Security Awareness", "BCP"]
  },
  {
    title: "Identity & Access Management (IAM)",
    skills: ["Keycloak", "SSO", "MFA", "RBAC", "Identity Governance", "Access Management", "User Lifecycle Management"]
  },
  {
    title: "Security Testing",
    skills: ["Vulnerability Assessment", "Burp Suite", "Metasploit", "OWASP Top 10"]
  },
  {
    title: "Programming",
    skills: ["Python", "Java", "PHP", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    title: "Platforms & Technologies",
    skills: ["Linux", "Docker", "Elasticsearch", "Kibana", "Cloudflare WAF", "Wireshark", "Power BI"]
  },
  {
    title: "Strategy & PMO",
    skills: ["Strategic Planning", "PMO", "KPI Management", "Business Model Development", "Agile & Scrum", "Executive Reporting"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Skills</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors">
              <h3 className="text-xl font-semibold text-emerald-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded-md text-sm text-gray-300 hover:text-white hover:border-emerald-500/30 transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
