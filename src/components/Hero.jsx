import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Trophy, 
  ArrowRight, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin,
  Cpu,
  Layers,
  Award
} from 'lucide-react';

const Hero = ({ onOpenResume }) => {
  return (
    <section id="hero" className="pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left Column: Portrait & Direct Positioning */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Profile Picture & Winner Pill */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
              <img 
                src={personalInfo.profileImage}
                alt="Shruti Tyagi" 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-carbon-700 bg-carbon-900 shadow-sm"
              />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-tech-emerald rounded-full border-2 border-carbon-950" title="Active & Open to Opportunities"></span>
            </div>

            <div className="flex flex-col">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-carbon-900 text-carbon-300 border border-carbon-700 mb-1 w-fit">
                <Trophy className="w-3 h-3 text-amber-500" />
                SIH '25 Hardware Edition Winner
              </span>
              <span className="text-xs text-carbon-400 font-mono">
                1st Place Nationally &bull; 1,000+ Teams
              </span>
            </div>
          </div>

          {/* Name & Academic Identity */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-carbon-50 mb-3">
            {personalInfo.name}
          </h1>

          <p className="text-base sm:text-lg font-mono text-tech-blue mb-4">
            Electronics Engineer &bull; Embedded Systems &bull; PCB Design &bull; IoT
          </p>

          <p className="text-sm sm:text-base text-carbon-400 leading-relaxed mb-6 max-w-xl text-justify sm:text-left">
            B.Tech Electronics & Communication Engineering undergraduate at AKGEC (Expected 2027). 
            Hands-on experience in register-level Embedded C, ESP32 firmware, KiCad PCB layout, 
            and multi-sensor hardware pipelines. Co-author of an accepted research paper in 
            <span className="text-carbon-200 italic"> Pattern Recognition Letters</span> and lead hardware architect 
            for an SIH-winning, patented metrology verification system.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="#projects"
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-tech-blue hover:bg-blue-600 text-white font-medium text-xs font-mono transition-colors"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-carbon-900 hover:bg-carbon-800 text-carbon-200 border border-carbon-700 font-medium text-xs font-mono transition-colors"
            >
              <FileDown className="w-3.5 h-3.5 text-carbon-400" />
              <span>Download Resume (PDF)</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3 py-2.5 rounded bg-transparent hover:bg-carbon-900 text-carbon-400 hover:text-carbon-200 border border-carbon-800 text-xs font-mono transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* External Social Profiles Strip */}
          <div className="flex items-center gap-4 text-xs font-mono text-carbon-400">
            <a 
              href={personalInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>github.com/SHRUTI192005</span>
            </a>
            <span>&bull;</span>
            <a 
              href={personalInfo.linkedIn} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1.5 hover:text-tech-blue transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

        </div>

        {/* Right Column: Clean Technical Specifications Card */}
        <div className="lg:col-span-5">
          <div className="card-technical p-5 font-mono text-xs text-carbon-300">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-carbon-800 text-carbon-400 text-[11px]">
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-tech-blue" />
                SYSTEM_SPECIFICATIONS.txt
              </span>
              <span className="text-tech-emerald">STATUS: ACTIVE</span>
            </div>

            <div className="space-y-2.5 text-[11px]">
              <div className="flex justify-between py-1 border-b border-carbon-800/60">
                <span className="text-carbon-500">Degree:</span>
                <span className="text-carbon-200">B.Tech ECE (2023–2027)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-carbon-800/60">
                <span className="text-carbon-500">Institution:</span>
                <span className="text-carbon-200">AKGEC, Ghaziabad (AKTU)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-carbon-800/60">
                <span className="text-carbon-500">National Award:</span>
                <span className="text-amber-400 font-semibold">1st Place &bull; SIH 2025 Hardware</span>
              </div>
              <div className="flex justify-between py-1 border-b border-carbon-800/60">
                <span className="text-carbon-500">Publication:</span>
                <span className="text-carbon-200">Pattern Recognition Letters</span>
              </div>
              <div className="flex justify-between py-1 border-b border-carbon-800/60">
                <span className="text-carbon-500">IP:</span>
                <span className="text-carbon-200">1 Hardware System Patent</span>
              </div>
              <div className="flex justify-between py-1 border-b border-carbon-800/60">
                <span className="text-carbon-500">Microcontrollers:</span>
                <span className="text-carbon-200">ESP32, Raspberry Pi, Arduino</span>
              </div>
              <div className="flex justify-between py-1 border-b border-carbon-800/60">
                <span className="text-carbon-500">PCB / EDA:</span>
                <span className="text-carbon-200">KiCad (Schematic & Layout)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-carbon-500">Industrial Training:</span>
                <span className="text-carbon-200">NTPC Dadri (PSU) &bull; C&I Dept</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-carbon-800 flex items-center justify-between text-[10px] text-carbon-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                Ghaziabad / Greater Delhi, India
              </span>
              <span>shrutityagi613@gmail.com</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
