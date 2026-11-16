import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Menu, 
  X, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail,
  Cpu
} from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['about', 'projects', 'research', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-carbon-950/95 border-b border-carbon-800 py-3' 
          : 'bg-carbon-950 border-b border-carbon-900 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo & Technical Subtitle */}
          <a 
            href="#hero" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded border border-carbon-700 bg-carbon-900 flex items-center justify-center text-carbon-200 font-mono text-xs font-bold">
              ST
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-carbon-50 group-hover:text-tech-blue transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-mono text-carbon-400">
                ECE &bull; Embedded Systems &bull; PCB
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded transition-colors ${
                    isActive 
                      ? 'text-carbon-50 bg-carbon-800 font-semibold' 
                      : 'text-carbon-400 hover:text-carbon-100 hover:bg-carbon-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 text-carbon-400 hover:text-carbon-100 hover:bg-carbon-900 rounded border border-carbon-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 text-carbon-400 hover:text-tech-blue hover:bg-carbon-900 rounded border border-carbon-800 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-carbon-100 text-carbon-950 hover:bg-white transition-colors ml-1 font-mono"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Drawer Trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs font-semibold rounded bg-carbon-100 text-carbon-950 font-mono"
            >
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-carbon-300 hover:text-white rounded bg-carbon-900 border border-carbon-800"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-carbon-950 border-b border-carbon-800 px-6 py-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-medium text-carbon-300 hover:text-white py-1.5 border-b border-carbon-900 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-carbon-600 font-mono text-[10px]">&rarr;</span>
              </a>
            ))}
            <div className="flex items-center gap-4 pt-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-carbon-400 hover:text-white"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-carbon-400 hover:text-tech-blue"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-xs text-carbon-400 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
