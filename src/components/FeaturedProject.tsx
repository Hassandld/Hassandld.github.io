import React from 'react';
import { ShieldCheck, Users, Lock, Database, ArrowRight } from 'lucide-react';

const FeaturedProject = () => {
  return (
    <section id="projects" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center">Featured Project</h2>
        <div className="w-16 h-1 bg-emerald-500 rounded mx-auto mb-16"></div>

        <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wide w-fit">
              Graduation Project
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Muwahhad</h3>
            <h4 className="text-xl text-gray-300 mb-6">Unified Identity Governance & Access Platform</h4>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              Led the end-to-end planning and development of a centralized IAM platform using Keycloak. The project aligned technical capabilities with business and governance needs, implementing comprehensive identity governance workflows and access management.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center text-gray-300">
                <Lock className="text-emerald-500 mr-3" size={20} />
                <span>SSO & MFA</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Users className="text-emerald-500 mr-3" size={20} />
                <span>RBAC</span>
              </div>
              <div className="flex items-center text-gray-300">
                <ShieldCheck className="text-emerald-500 mr-3" size={20} />
                <span>Identity Governance</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Database className="text-emerald-500 mr-3" size={20} />
                <span>Lifecycle Management</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Keycloak', 'STRIDE Threat Modeling', 'Salla Partnership', 'Provisioning', 'Compliance Audits'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-gray-900 border border-gray-700 rounded text-xs text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-gray-900 p-8 relative flex items-center justify-center min-h-[300px]">
             {/* Abstract tech representation since we don't have a specific project image */}
             <div className="relative w-full max-w-md aspect-video bg-gray-800 rounded-lg border border-gray-700 shadow-inner overflow-hidden flex flex-col">
                <div className="h-8 bg-gray-900 border-b border-gray-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-center relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 blur-3xl rounded-full"></div>
                  <div className="flex justify-between items-center z-10 mb-8">
                    <div className="w-16 h-16 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <Users size={32} className="text-blue-400" />
                    </div>
                    <ArrowRight className="text-gray-500" />
                    <div className="w-20 h-20 rounded-xl bg-emerald-500/20 border border-emerald-500 flex items-center justify-center">
                      <Lock size={40} className="text-emerald-400" />
                    </div>
                    <ArrowRight className="text-gray-500" />
                    <div className="w-16 h-16 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <Database size={32} className="text-purple-400" />
                    </div>
                  </div>
                  <div className="text-center z-10">
                    <div className="text-emerald-400 font-mono text-sm">Secure Authentication Flow</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
