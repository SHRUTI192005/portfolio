import React from 'react';
import { researchPublications } from '../data/portfolioData';
import { 
  BookOpen, 
  FileText, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Bookmark
} from 'lucide-react';

const Publications = () => {
  return (
    <section id="research" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            04. Academic & Intellectual Property
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Research & <span className="text-gradient-cyan">Publications</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Bridging hands-on embedded circuit design with scientific research, peer-reviewed publications, and patented intellectual property.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {researchPublications.map((pub, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Status Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold ${
                    pub.status.includes('Published') || pub.status.includes('Patented')
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                      : 'bg-cyan-950/80 border border-cyan-500/30 text-cyan-300'
                  }`}>
                    {pub.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                    {pub.publisher}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                  {pub.title}
                </h3>

                {/* Journal / Venue */}
                <div className="text-xs font-mono text-cyan-400 mb-4 flex items-center gap-2">
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>{pub.venue}</span>
                </div>

                {/* Authors */}
                <div className="text-xs text-slate-400 mb-4 font-mono">
                  <span className="text-slate-500">Authors:</span> {pub.authors}
                </div>

                {/* Abstract Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {pub.description}
                </p>
              </div>

              {/* Tags Strip */}
              <div className="pt-6 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/80 text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* IP & Academic Rigor Summary Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/30 via-dark-900/60 to-purple-950/30 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Patented Legal Metrology Innovation</h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Multi-modal embedded verification architecture developed during SIH 2025 has yielded both a Patent and an accepted paper in Pattern Recognition Letters.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              Elsevier Accepted
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-300 font-semibold">
              Patent Protected
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Publications;
