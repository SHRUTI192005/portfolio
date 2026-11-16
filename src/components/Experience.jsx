import React from 'react';
import { experienceData } from '../data/portfolioData';
import { 
  Briefcase, 
  MapPin, 
  Calendar, 
  ChevronRight,
  Factory,
  Shield
} from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
          05 // EXPERIENCE & TRAINING
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
          Industrial Training & Leadership
        </h2>
        <p className="text-xs sm:text-sm text-carbon-400 mt-1">
          Practical exposure at NTPC Dadri power generation units and disciplined operational training in the NCC.
        </p>
      </div>

      {/* Chronological Timeline */}
      <div className="space-y-6">
        {experienceData.map((exp, idx) => (
          <div 
            key={idx}
            className="card-technical p-6 border-carbon-800 hover:border-carbon-700 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 mb-4 border-b border-carbon-800">
              <div>
                <span className="text-[10px] font-mono text-carbon-400 bg-carbon-800 px-2 py-0.5 rounded border border-carbon-700 mb-2 inline-block">
                  {exp.type}
                </span>
                <h3 className="text-lg font-bold text-carbon-100">
                  {exp.organization}
                </h3>
                <p className="text-xs font-mono text-tech-blue">
                  {exp.role} {exp.department && `&bull; ${exp.department}`}
                </p>
              </div>

              <div className="flex sm:flex-col items-start sm:items-end gap-1 text-xs font-mono text-carbon-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1 text-carbon-500">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed mb-4 text-justify sm:text-left">
              {exp.description}
            </p>

            {/* Bullets */}
            <ul className="space-y-2 mb-4">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2 text-xs text-carbon-300 leading-normal">
                  <span className="text-carbon-500 font-mono mt-0.5">&bull;</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Skills / Domain pills */}
            <div className="pt-3 border-t border-carbon-850 flex flex-wrap gap-1.5">
              {exp.skillsLearned.map((skill) => (
                <span
                  key={skill}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-carbon-850 text-carbon-400 border border-carbon-800"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
