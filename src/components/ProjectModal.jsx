import React, { useEffect } from 'react';
import { 
  X, 
  Cpu, 
  Layers, 
  Radio, 
  Github, 
  Trophy, 
  FileCheck, 
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-carbon-900 border border-carbon-700 rounded-lg shadow-2xl p-6 sm:p-8 text-carbon-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-1.5 rounded bg-carbon-800 hover:bg-carbon-700 text-carbon-400 hover:text-white transition-colors border border-carbon-700"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-carbon-800 border border-carbon-700 text-carbon-300">
              {project.category}
            </span>
            {project.badge && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/40 border border-amber-800 text-amber-400 flex items-center gap-1">
                <Trophy className="w-3 h-3" />
                {project.badge}
              </span>
            )}
            {project.patentStatus && (
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-carbon-800 border border-carbon-700 text-carbon-300 flex items-center gap-1">
                <FileCheck className="w-3 h-3 text-tech-blue" />
                {project.patentStatus}
              </span>
            )}
          </div>

          <h3 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-carbon-50 tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-carbon-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Full System Overview */}
        <div className="mb-6 text-xs sm:text-sm text-carbon-300 leading-relaxed bg-carbon-950 p-4 rounded border border-carbon-800 text-justify sm:text-left">
          {project.description}
        </div>

        {/* System Architecture Block Diagram */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-carbon-400 mb-2.5 flex items-center gap-1.5 font-semibold">
            <Layers className="w-3.5 h-3.5 text-tech-blue" />
            Hardware & Signal Architecture
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
            <div className="p-3 rounded bg-carbon-950 border border-carbon-800">
              <span className="text-carbon-500 text-[10px] block mb-0.5">01 // SENSOR / TRANSDUCER STAGE</span>
              <span className="text-carbon-200">{project.architecture.inputStage}</span>
            </div>
            <div className="p-3 rounded bg-carbon-950 border border-carbon-800">
              <span className="text-carbon-500 text-[10px] block mb-0.5">02 // EMBEDDED CONTROLLER</span>
              <span className="text-carbon-200">{project.architecture.processingUnit}</span>
            </div>
            <div className="p-3 rounded bg-carbon-950 border border-carbon-800">
              <span className="text-carbon-500 text-[10px] block mb-0.5">03 // PROTOCOLS & INTERFACES</span>
              <span className="text-carbon-200">{project.architecture.protocols}</span>
            </div>
            <div className="p-3 rounded bg-carbon-950 border border-carbon-800">
              <span className="text-carbon-500 text-[10px] block mb-0.5">04 // OUTPUT & TELEMETRY</span>
              <span className="text-carbon-200">{project.architecture.outputStage}</span>
            </div>
          </div>
        </div>

        {/* Key Engineering Deliverables */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-carbon-400 mb-2.5 flex items-center gap-1.5 font-semibold">
            <Zap className="w-3.5 h-3.5 text-amber-500" />
            Key Deliverables & Firmware Logic
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-carbon-300 leading-normal">
                <span className="text-carbon-500 font-mono mt-0.5">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hardware & Software BOM */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-carbon-400 mb-2 font-semibold">
            BOM Components & Tools
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-carbon-800 text-carbon-300 border border-carbon-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-carbon-800 text-xs font-mono">
          <div className="text-carbon-400">
            Impact: <span className="text-carbon-100 font-medium">{project.impactMetric}</span>
          </div>

          <div className="flex items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-carbon-800 hover:bg-carbon-700 text-carbon-200 font-medium transition-colors border border-carbon-700"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded bg-carbon-100 hover:bg-white text-carbon-950 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectModal;
