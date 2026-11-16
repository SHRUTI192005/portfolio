import React from 'react';
import { achievementsData } from '../data/portfolioData';
import { 
  Trophy, 
  Award, 
  FileCheck, 
  CheckCircle2
} from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
          06 // HONORS & RECOGNITION
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
          National Awards & Technical Milestones
        </h2>
        <p className="text-xs sm:text-sm text-carbon-400 mt-1">
          Competitive achievements, patents, and hardware leadership validated by national authorities.
        </p>
      </div>

      {/* Main Trophy Card: SIH 2025 Hardware Edition Winner */}
      <div className="card-technical p-6 sm:p-8 mb-6 border-carbon-700 bg-carbon-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono bg-amber-950/40 border border-amber-800 text-amber-400 font-semibold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              1ST PLACE NATIONALLY &bull; WINNER
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-carbon-50 tracking-tight mb-2">
              Smart India Hackathon (SIH) 2025 – Hardware Edition
            </h3>

            <p className="text-xs font-mono text-carbon-400 mb-3">
              Organized by Ministry of Education & AICTE &bull; 1,000+ Competing Engineering Teams
            </p>

            <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed mb-4 text-justify sm:text-left">
              Led the hardware design and system architecture of an automated embedded compliance monitoring system (Bharat Vision). Developed the multi-sensor pipeline (Raspberry Pi, DHT11, load cells, computer vision) to verify Legal Metrology packaging compliance in real time. The solution resulted in a Patent and an accepted paper in <span className="italic text-carbon-200">Pattern Recognition Letters</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
              <div className="p-2.5 rounded bg-carbon-950 border border-carbon-800">
                <span className="text-carbon-500 text-[10px] block">ROLE</span>
                <span className="text-carbon-200 font-medium">Hardware Lead & Architect</span>
              </div>
              <div className="p-2.5 rounded bg-carbon-950 border border-carbon-800">
                <span className="text-carbon-500 text-[10px] block">OUTCOME</span>
                <span className="text-carbon-200 font-medium">Patent + Elsevier Paper</span>
              </div>
              <div className="p-2.5 rounded bg-carbon-950 border border-carbon-800">
                <span className="text-carbon-500 text-[10px] block">SCOPE</span>
                <span className="text-carbon-200 font-medium">National Level &bull; 1,000+ Teams</span>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-center justify-center p-6 rounded bg-carbon-950 border border-carbon-800 text-center min-w-[160px]">
            <Trophy className="w-10 h-10 text-amber-500 mb-2" />
            <div className="text-2xl font-bold text-carbon-100 font-mono">RANK #1</div>
            <div className="text-[11px] font-mono text-carbon-400">SIH 2025 Hardware</div>
            <div className="text-[10px] font-mono text-amber-500/90 mt-1">AICTE & MoE Govt. of India</div>
          </div>
        </div>
      </div>

      {/* Secondary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievementsData.slice(1).map((ach, idx) => (
          <div
            key={idx}
            className="card-technical p-5 flex flex-col justify-between border-carbon-800 hover:border-carbon-700 transition-colors"
          >
            <div>
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-carbon-800 text-xs font-mono">
                <span className="text-carbon-400">{ach.level}</span>
                <span className="text-tech-blue">{ach.rank}</span>
              </div>

              <h4 className="text-base font-bold text-carbon-100 mb-1">
                {ach.title}
              </h4>
              <p className="text-xs font-mono text-carbon-400 mb-3">
                {ach.issuer}
              </p>
              <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed mb-3">
                {ach.highlight}
              </p>
              <p className="text-xs text-carbon-400 leading-normal">
                {ach.details}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-carbon-850 flex items-center text-[11px] font-mono text-carbon-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-tech-emerald mr-1.5" />
              <span>Verified Credential</span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Achievements;
