import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Cpu, 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Heart,
  Terminal
} from 'lucide-react';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-dark-950 border-t border-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-slate-400">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-900">
          
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Cpu className="w-4 h-4" />
            </div>
            <div>
              <span className="text-white font-bold text-sm tracking-tight block">
                {personalInfo.name}
              </span>
              <span className="text-xs font-mono text-cyan-400">
                {personalInfo.shortTitle}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#research" className="hover:text-cyan-300 transition-colors">Research</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#achievements" className="hover:text-cyan-300 transition-colors">Achievements</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-cyan-300 transition-colors font-mono">Resume</button>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-300 hover:text-white border border-slate-800 transition-all group"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-500" />
            <span>Built with React, Vite & Tailwind CSS • Designed for Embedded Systems & IoT Rigor</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <span>© {new Date().getFullYear()} {personalInfo.name}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
