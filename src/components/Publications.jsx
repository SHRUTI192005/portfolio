import React from 'react';
import { researchPublications } from '../data/portfolioData';
import { 
  BookOpen, 
  FileText, 
  Award, 
  CheckCircle2
} from 'lucide-react';

const Publications = () => {
  return (
    <section id="research" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
          04 // RESEARCH & PATENTS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
          Peer-Reviewed Research & Intellectual Property
        </h2>
        <p className="text-xs sm:text-sm text-carbon-400 mt-1">
          Academic publications and patented hardware architectures developed from physical prototypes.
        </p>
      </div>

      {/* Publications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {researchPublications.map((pub, idx) => (
          <div
            key={idx}
            className="card-technical p-6 flex flex-col justify-between border-carbon-800 hover:border-carbon-700 transition-colors"
          >
            <div>
              {/* Publication Status & Venue Badge */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                  pub.status.includes('Published') || pub.status.includes('Patented')
                    ? 'text-amber-400 bg-amber-950/40 border-amber-800'
                    : 'text-carbon-300 bg-carbon-800 border-carbon-700'
                }`}>
                  {pub.status}
                </span>
                <span className="text-[10px] font-mono text-carbon-400 bg-carbon-900 px-2 py-0.5 rounded border border-carbon-800">
                  {pub.publisher}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-carbon-100 mb-2 leading-snug">
                {pub.title}
              </h3>

              {/* Journal / Venue */}
              <div className="text-xs font-mono text-tech-blue mb-2">
                {pub.venue}
              </div>

              {/* Authors */}
              <div className="text-xs font-mono text-carbon-400 mb-4">
                <span className="text-carbon-500">Authors:</span> {pub.authors}
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed mb-5 text-justify sm:text-left">
                {pub.description}
              </p>
            </div>

            {/* Keyword Tags */}
            <div className="pt-4 border-t border-carbon-800 flex flex-wrap gap-1.5">
              {pub.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono px-2 py-0.5 rounded bg-carbon-850 text-carbon-400 border border-carbon-800"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Publications;
