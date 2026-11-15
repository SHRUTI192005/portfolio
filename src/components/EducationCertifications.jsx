import React from 'react';
import { educationData, certificationsData } from '../data/portfolioData';
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Cpu,
  ExternalLink
} from 'lucide-react';

const EducationCertifications = () => {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            07. Academic Foundation & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
            Education & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Formal technical education in Electronics & Communication Engineering supplemented by specialized industry-standard certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Education Card */}
          <div className="lg:col-span-6 glass-panel rounded-2xl border border-slate-800 p-6 sm:p-8 hover:border-slate-700 transition-all">
            <div className="flex items-center gap-3 text-cyan-400 mb-6 pb-4 border-b border-slate-800">
              <GraduationCap className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white tracking-wide">
                Formal Academic Degree
              </h3>
            </div>

            {educationData.map((edu, idx) => (
              <div key={idx} className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-lg font-bold text-white">
                    {edu.degree}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 w-fit">
                    {edu.status}
                  </span>
                </div>

                <div className="text-sm font-semibold text-slate-300">
                  {edu.institution}
                </div>
                <div className="text-xs font-mono text-slate-400">
                  {edu.affiliation}
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400 py-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {edu.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    Ghaziabad, Uttar Pradesh
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                  <span className="font-semibold text-cyan-300 block mb-1">Curriculum & Domain Focus:</span>
                  {edu.focus}
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Academic & Co-Curricular Highlights:
                  </div>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 text-cyan-400 mb-2">
              <Award className="w-6 h-6" />
              <h3 className="text-xl font-bold text-white tracking-wide">
                Specialized Certifications
              </h3>
            </div>

            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-slate-800 p-6 hover:border-cyan-500/40 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
                    {cert.domain}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Verified Technical Credential
                  </span>
                  <span className="text-slate-500">Official Resume Verified</span>
                </div>
              </div>
            ))}

            {/* Industrial Plant Experience Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-dark-900/90 border border-slate-800 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <span className="font-semibold text-white block">Continuous Technical Mastery</span>
                <span className="text-slate-400 mt-0.5 block">
                  Actively pursuing advanced research in optical non-invasive physiological acquisition and automotive BMS firmware.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EducationCertifications;
