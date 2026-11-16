import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail,
  Cpu
} from 'lucide-react';

const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-carbon-950 py-12 px-4 sm:px-6 text-carbon-400 font-mono text-xs">
      <div className="max-w-6xl mx-auto">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-carbon-800">
          <div>
            <span className="text-sm font-bold text-carbon-100 font-sans block">
              {personalInfo.name}
            </span>
            <span className="text-carbon-500 text-[11px]">
              ECE Undergrad &bull; Embedded Systems &bull; KiCad PCB Design
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a href="#about" className="hover:text-carbon-200 transition-colors">About</a>
            <a href="#projects" className="hover:text-carbon-200 transition-colors">Projects</a>
            <a href="#research" className="hover:text-carbon-200 transition-colors">Research</a>
            <a href="#experience" className="hover:text-carbon-200 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-carbon-200 transition-colors">Skills</a>
            <a href="#education" className="hover:text-carbon-200 transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-carbon-200 transition-colors text-left">Resume</button>
            <a href="#contact" className="hover:text-carbon-200 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-carbon-900 hover:bg-carbon-850 text-carbon-300 hover:text-white border border-carbon-800 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3 text-carbon-400" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-carbon-500">
          <div>
            &copy; {new Date().getFullYear()} {personalInfo.name}. Ajay Kumar Garg Engineering College (AKGEC).
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-carbon-300 transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-tech-blue transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-carbon-300 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
