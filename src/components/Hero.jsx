import React from 'react';
import { personalInfo } from '../data/portfolioData';
import HeroCanvas from './HeroCanvas';
import { 
  Trophy, 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Sparkles,
  Layers,
  Cpu,
  ChevronDown,
  Terminal,
  Activity
} from 'lucide-react';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Interactive Circuit Canvas */}
      <HeroCanvas />

      {/* Subtle radial ambient gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center flex flex-col items-center">
        
        {/* National Award Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-lg shadow-amber-500/5 hover:border-amber-400 transition-all cursor-default">
          <Trophy className="w-4 h-4 text-amber-400 animate-bounce" />
          <span className="font-semibold text-amber-200">Winner</span>
          <span className="text-amber-400/60">•</span>
          <span>Smart India Hackathon 2025 – Hardware Edition</span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-amber-500/20 text-[11px] text-amber-300 font-mono">
            1st Place Nationally (1,000+ Teams)
          </span>
        </div>

        {/* Name Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
          Hi, I'm <span className="text-gradient-cyan">Shruti Tyagi</span>.
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl font-mono text-cyan-300/90 font-medium max-w-3xl mb-6 tracking-wide">
          {personalInfo.title}
        </p>

        {/* Compelling Introduction */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-10 font-normal">
          Electronics & Communication Engineering undergraduate at AKGEC, specialized in bridging 
          <span className="text-white font-medium"> physical hardware with real-time firmware</span>. 
          From architecting multi-sensor industrial pipelines and non-invasive optical medical devices 
          to routing custom KiCad PCBs and developing Embedded C systems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-dark-950 font-bold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-100 transition-all group"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 font-semibold text-sm backdrop-blur-md transition-all shadow-lg hover:shadow-cyan-500/10 group"
          >
            <FileDown className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
            <span>Download Resume</span>
          </button>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-medium transition-all"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Social Icons Strip */}
        <div className="flex items-center gap-4 mb-16">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all shadow-md group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={personalInfo.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all shadow-md group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email Contact"
            className="p-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all shadow-md group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-slate-800/60">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl bg-dark-900/40 border border-white/5 backdrop-blur-md text-left hover:border-cyan-500/30 transition-all group"
            >
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span>{stat.label}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400 transition-colors"></span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 font-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll down indicator */}
        <a 
          href="#about"
          aria-label="Scroll down"
          className="mt-14 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce p-2"
        >
          <ChevronDown className="w-5 h-5" />
        </a>

      </div>
    </section>
  );
};

export default Hero;
