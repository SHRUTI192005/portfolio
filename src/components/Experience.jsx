import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Briefcase, 
  Building2, 
  Shield, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  ChevronRight,
  Factory,
  Zap
} from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            05. Professional Experience & Training
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Industrial & <span className="text-gradient-cyan">Leadership Experience</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Real-world training in India's leading power generation PSU and disciplined leadership development through the National Cadet Corps.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 space-y-12">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-dark-900 border-2 border-cyan-500/60 group-hover:border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-500/20 transition-all">
                {idx === 0 ? (
                  <Factory className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                )}
              </div>

              {/* Card Container */}
              <div className="glass-panel rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 mb-2 inline-block">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.organization}
                    </h3>
                    <p className="text-sm font-mono text-cyan-300/90 font-medium">
                      {exp.role} {exp.department && `• ${exp.department}`}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2.5 mb-6">
                  {exp.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Acquired */}
                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Competencies & Systems Studied:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsLearned.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
