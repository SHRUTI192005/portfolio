import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Cpu, 
  Layers, 
  Microchip, 
  Radio, 
  Code2, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Activity,
  Award,
  BookOpen
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            01. Engineering Profile
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Architecting <span className="text-gradient-cyan">Intelligent Hardware</span> & Firmware
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
            Passionate about transforming complex physical sensor signals into deterministic, connected embedded systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Narrative Card */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all">
            <div>
              <div className="flex items-center gap-3 text-cyan-400 mb-6">
                <Cpu className="w-6 h-6" />
                <h3 className="text-xl font-bold text-white tracking-wide">
                  Electronics & Communication Engineering Undergrad
                </h3>
              </div>

              <div className="space-y-4 text-slate-300 text-base leading-relaxed">
                <p>
                  I am a pre-final year <span className="text-white font-semibold">B.Tech Electronics & Communication Engineering (ECE)</span> student at <span className="text-cyan-300 font-medium">{personalInfo.college}</span>, graduating in 2027. My technical foundation lies at the intersection of low-level microcontroller programming, printed circuit board (PCB) design, and real-time IoT architecture.
                </p>

                <p>
                  In 2025, I served as the <span className="text-amber-300 font-semibold">Hardware Design & System Architecture Lead</span> for our team at the <span className="text-amber-200 font-semibold">Smart India Hackathon (Hardware Edition)</span>, where we won <span className="text-white font-bold">1st Place nationally out of 1,000+ teams</span> for developing Bharat Vision—an automated Legal Metrology inspection system that has been patented and published in <span className="text-cyan-300 italic">Pattern Recognition Letters</span>.
                </p>

                <p>
                  My engineering philosophy focuses on practical, deterministic problem-solving: writing register-conscious <span className="text-white font-medium">Embedded C</span>, optimizing interrupt-driven sensor interfaces, routing clean noise-isolated PCBs in <span className="text-white font-medium">KiCad</span>, and designing reliable wireless telemetry over MQTT, BLE, and Wi-Fi.
                </p>
              </div>
            </div>

            {/* Core Values / Competencies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 mt-8 border-t border-slate-800/80">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-cyan-400 font-mono text-xs mb-1">HARDWARE</div>
                <div className="text-sm font-semibold text-white">KiCad & Circuitry</div>
                <div className="text-xs text-slate-400 mt-1">Multi-layer routing, DRC & sensor conditioning</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-indigo-400 font-mono text-xs mb-1">FIRMWARE</div>
                <div className="text-sm font-semibold text-white">Embedded C & ESP32</div>
                <div className="text-xs text-slate-400 mt-1">ISRs, low-power states & serial protocols</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-emerald-400 font-mono text-xs mb-1">COMMUNICATION</div>
                <div className="text-sm font-semibold text-white">IoT & Telemetry</div>
                <div className="text-xs text-slate-400 mt-1">MQTT, I2C, SPI, UART, BLE & Wi-Fi</div>
              </div>
            </div>
          </div>

          {/* Interactive Hardware Specification & Status Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Terminal-Style Real-time Spec Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-cyan-500/20 relative overflow-hidden flex-1 flex flex-col justify-between shadow-xl shadow-cyan-950/20">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-xs font-mono text-slate-400 ml-2">sys_diagnostics.h</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  OPERATIONAL
                </span>
              </div>

              <div className="space-y-4 py-5 font-mono text-xs text-slate-300">
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Core Focus:</span>
                  <span className="text-cyan-300 font-medium">Embedded & IoT Systems</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Undergraduate Degree:</span>
                  <span className="text-white">B.Tech ECE (2023–2027)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Institution:</span>
                  <span className="text-slate-200">AKGEC, Ghaziabad</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Top National Honor:</span>
                  <span className="text-amber-300 font-bold">SIH 2025 Winner (Hardware)</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Scientific Output:</span>
                  <span className="text-cyan-400">Pattern Recognition Letters</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-800/40">
                  <span className="text-slate-400">Intellectual Property:</span>
                  <span className="text-indigo-300 font-semibold">1 Hardware System Patent</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-400">Industrial Training:</span>
                  <span className="text-slate-200">NTPC Dadri (PSU) - C&I</span>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-dark-950/80 border border-white/5 font-mono text-[11px] text-cyan-400/90 flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Ready to engineer firmware & hardware for next-gen embedded challenges.</span>
              </div>
            </div>

            {/* Quick Badge Highlight */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Smart India Hackathon 2025</h4>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  1st Place in National Hardware Edition against 1,000+ top engineering teams.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
