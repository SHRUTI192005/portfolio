import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { 
  Trophy, 
  Award, 
  FileCheck, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            06. Recognitions & Honors
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Achievements & <span className="text-gradient-gold">National Awards</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Validated excellence in national-level engineering hackathons, patent development, and peer-reviewed scientific contributions.
          </p>
        </div>

        {/* Featured Main Trophy Card - SIH 2025 Hardware Edition */}
        <div className="mb-12 relative overflow-hidden rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-amber-500/10 via-dark-900/90 to-dark-950 border border-amber-500/40 shadow-2xl shadow-amber-500/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold mb-4">
                <Trophy className="w-4 h-4 text-amber-400" />
                NATIONAL 1ST PLACE WINNER
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
                Smart India Hackathon (SIH) 2025 – Hardware Edition
              </h3>

              <div className="text-xs font-mono text-amber-300/90 mb-4 flex flex-wrap items-center gap-3">
                <span>Organized by: Ministry of Education & AICTE, Govt. of India</span>
                <span>•</span>
                <span className="text-white font-semibold">Scale: 1,000+ Competing Engineering Teams</span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Served as the lead hardware designer and system architect for an automated embedded compliance monitoring system (Bharat Vision). Conceptualized and engineered the physical sensor pipeline, Raspberry Pi edge controller, and optical inspection interface that secured <span className="text-amber-200 font-bold">1st Place nationally</span> against premier engineering institutions across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-dark-950/80 border border-amber-500/20">
                  <div className="text-amber-400 text-[10px] uppercase">ROLE</div>
                  <div className="text-white font-semibold mt-0.5">Hardware Lead & Architect</div>
                </div>
                <div className="p-3 rounded-xl bg-dark-950/80 border border-amber-500/20">
                  <div className="text-amber-400 text-[10px] uppercase">OUTCOME</div>
                  <div className="text-white font-semibold mt-0.5">Patent & Published Paper</div>
                </div>
                <div className="p-3 rounded-xl bg-dark-950/80 border border-amber-500/20">
                  <div className="text-amber-400 text-[10px] uppercase">IMPACT</div>
                  <div className="text-white font-semibold mt-0.5">Automated Legal Metrology</div>
                </div>
              </div>
            </div>

            {/* Visual Trophy Badge */}
            <div className="lg:shrink-0 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-dark-950 shadow-xl shadow-amber-500/20 mb-3">
                <Trophy className="w-10 h-10" />
              </div>
              <div className="text-2xl font-black text-amber-300 tracking-tight">RANK 1</div>
              <div className="text-xs font-mono text-slate-300 mt-1">SIH 2025 Hardware</div>
              <div className="text-[10px] font-mono text-amber-400/80 mt-0.5">National Level</div>
            </div>
          </div>
        </div>

        {/* Secondary Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementsData.slice(1).map((ach, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-400">
                    {ach.level}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {ach.rank}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  {ach.title}
                </h4>
                <div className="text-xs font-mono text-cyan-300 mb-4">
                  {ach.issuer}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {ach.highlight}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {ach.details}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center text-xs font-mono text-cyan-400">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>Verified Resume Credential</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
