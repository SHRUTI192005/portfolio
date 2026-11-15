import React, { useEffect } from 'react';
import { 
  X, 
  Cpu, 
  Layers, 
  Radio, 
  ExternalLink, 
  Github, 
  Trophy, 
  FileCheck, 
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                {project.badge}
              </span>
            )}
            {project.patentStatus && (
              <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-purple-950/60 border border-purple-500/30 text-purple-300 flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-purple-400" />
                {project.patentStatus}
              </span>
            )}
          </div>

          <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-mono text-cyan-300/90 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Full Description */}
        <div className="mb-6 text-sm sm:text-base text-slate-300 leading-relaxed bg-dark-950/60 p-4 sm:p-5 rounded-xl border border-white/5">
          {project.description}
        </div>

        {/* System Architecture Block Diagram */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
            <Layers className="w-4 h-4" />
            System Architecture & Signal Pipeline
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block mb-1">01. SENSOR / TRANSDUCER STAGE</span>
              <span className="text-slate-200 font-medium">{project.architecture.inputStage}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block mb-1">02. EMBEDDED CONTROLLER</span>
              <span className="text-cyan-300 font-medium">{project.architecture.processingUnit}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block mb-1">03. PROTOCOLS & INTERFACES</span>
              <span className="text-indigo-300 font-medium">{project.architecture.protocols}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-slate-400 block mb-1">04. OUTPUT & TELEMETRY</span>
              <span className="text-emerald-300 font-medium">{project.architecture.outputStage}</span>
            </div>
          </div>
        </div>

        {/* Key Engineering Contributions */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Key Engineering Contributions
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Hardware & Software Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800">
          <div className="text-xs font-mono text-slate-400">
            Impact: <span className="text-white font-semibold">{project.impactMetric}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-dark-950 font-bold text-xs transition-colors"
            >
              Close Spec
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
