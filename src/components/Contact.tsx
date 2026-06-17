import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 sm:px-12 lg:px-24 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Let's Work Together</h2>
        <p className="text-gray-400 mb-10 text-lg">
          I'm currently open for new opportunities in Cybersecurity, GRC, IAM, Security Operations, and PMO roles within government and semi-government sectors.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="mailto:hassan2030b@gmail.com" className="flex items-center gap-3 px-6 py-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-emerald-500 hover:bg-gray-800/80 transition-all group">
            <Mail className="text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">hassan2030b@gmail.com</span>
          </a>
          
          <a href="/resume.pdf" download className="flex items-center gap-3 px-6 py-4 bg-gray-800 rounded-xl border border-gray-700 hover:border-emerald-500 hover:bg-gray-800/80 transition-all group">
            <FileText className="text-emerald-500 group-hover:scale-110 transition-transform" />
            <span className="text-white font-medium">Download Resume</span>
          </a>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <a href="https://linkedin.com/in/bahathiq" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors">
            <FaLinkedin size={28} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="https://github.com/Hassandld" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-emerald-400 transition-colors">
            <FaGithub size={28} />
            <span className="sr-only">GitHub</span>
          </a>
        </div>

        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Hassan Ahmed Bahathiq. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
