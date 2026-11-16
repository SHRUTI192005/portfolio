import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

const EducationCertifications = () => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
          07 // ACADEMICS & CREDENTIALS
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
          Education & Certifications
        </h2>
        <p className="text-xs sm:text-sm text-carbon-400 mt-1">
          Formal engineering foundation supplemented by industry-recognized training in LabVIEW and KiCad PCB design.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Education Card */}
        <div className="lg:col-span-6 card-technical p-6 border-carbon-800">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-carbon-800">
            <GraduationCap className="w-5 h-5 text-tech-blue" />
            <h3 className="text-base font-bold text-carbon-100">
              Formal Education
            </h3>
          </div>

          {educationData.map((edu, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <span className="text-base font-bold text-carbon-100">
                  {edu.degree}
                </span>
                <span className="text-xs font-mono text-tech-blue bg-carbon-800 px-2 py-0.5 rounded border border-carbon-700 w-fit">
                  {edu.status}
                </span>
              </div>

              <div className="text-sm text-carbon-200 font-medium">
                {edu.institution}
              </div>
              <div className="text-xs font-mono text-carbon-400">
                {edu.affiliation}
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-carbon-500 py-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {edu.duration}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  Ghaziabad, UP, India
                </span>
              </div>

              <div className="p-3 rounded bg-carbon-950 border border-carbon-800 text-xs text-carbon-300 leading-relaxed">
                <span className="font-semibold text-carbon-100 block mb-0.5">Focus Areas:</span>
                {edu.focus}
              </div>

              <div className="pt-2">
                <span className="text-[11px] font-mono text-carbon-400 block mb-1.5 uppercase font-semibold">
                  Highlights:
                </span>
                <ul className="space-y-1.5">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-carbon-300">
                      <span className="text-carbon-500 font-mono mt-0.5">&bull;</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Card */}
        <div className="lg:col-span-6 space-y-4">
          <div className="flex items-center gap-2 mb-2 pb-1 text-carbon-400 text-xs font-mono">
            <Award className="w-4 h-4 text-tech-blue" />
            <span>INDUSTRY CERTIFICATIONS</span>
          </div>

          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="card-technical p-5 border-carbon-800 hover:border-carbon-700 transition-colors"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-bold text-carbon-100">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-tech-blue">
                    {cert.issuer}
                  </p>
                </div>
                <span className="text-[10px] font-mono bg-carbon-800 text-carbon-400 px-2 py-0.5 rounded border border-carbon-700">
                  {cert.domain}
                </span>
              </div>

              <p className="text-xs text-carbon-300 leading-relaxed mb-3">
                {cert.description}
              </p>

              <div className="flex items-center justify-between text-[11px] font-mono text-carbon-500 pt-2 border-t border-carbon-850">
                <span className="flex items-center gap-1 text-tech-emerald">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Coursework
                </span>
                <span>Resume Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default EducationCertifications;
