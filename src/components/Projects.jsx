import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  Cpu, 
  ExternalLink, 
  Github, 
  Trophy, 
  FileCheck, 
  ArrowUpRight, 
  Layers,
  ArrowRight
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
            03 // HARDWARE & EMBEDDED PROJECTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
            Engineered Systems & Case Studies
          </h2>
          <p className="text-xs sm:text-sm text-carbon-400 mt-1">
            Full-stack embedded hardware: schematic capture, PCB layout in KiCad, real-time firmware in Embedded C, and sensor pipelines.
          </p>
        </div>

        <span className="text-xs font-mono text-carbon-500 self-start sm:self-auto">
          4 PRODUCTION IMPLEMENTATIONS
        </span>
      </div>

      {/* Projects Grid: Clean Technical Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="card-technical p-6 flex flex-col justify-between border-carbon-800 hover:border-carbon-700 transition-colors"
          >
            <div>
              {/* Badges / Status */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-[10px] font-mono text-carbon-400 bg-carbon-800 px-2 py-0.5 rounded border border-carbon-700">
                  {project.category}
                </span>

                {project.id === "bharat-vision" && (
                  <span className="text-[10px] font-mono font-semibold text-amber-400 bg-amber-950/40 border border-amber-800/80 px-2 py-0.5 rounded flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    SIH '25 National Winner (#1 / 1,000+)
                  </span>
                )}

                {project.id === "glucospectra" && (
                  <span className="text-[10px] font-mono text-carbon-300 bg-carbon-800/80 border border-carbon-700 px-2 py-0.5 rounded flex items-center gap-1">
                    <FileCheck className="w-3 h-3 text-tech-blue" />
                    Paper Under Submission
                  </span>
                )}

                {project.id === "ev-battery-bms" && (
                  <span className="text-[10px] font-mono text-carbon-300 bg-carbon-800/80 border border-carbon-700 px-2 py-0.5 rounded flex items-center gap-1">
                    <Cpu className="w-3 h-3 text-amber-500" />
                    Custom KiCad PCB
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg sm:text-xl font-bold text-carbon-50 tracking-tight mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-carbon-400 mb-3">
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-carbon-300 leading-relaxed mb-4 text-justify sm:text-left">
                {project.summary}
              </p>

              {/* Hardware Signal Flow Schematic Block */}
              <div className="p-3 rounded bg-carbon-950 border border-carbon-800 font-mono text-[11px] mb-4 space-y-1.5">
                <div className="text-[10px] uppercase text-carbon-500 tracking-wider font-semibold border-b border-carbon-900 pb-1 mb-1.5 flex items-center justify-between">
                  <span>SIGNAL & HARDWARE ARCHITECTURE</span>
                  <span>I/O FLOW</span>
                </div>
                <div className="text-carbon-400 flex items-start gap-2">
                  <span className="text-carbon-200 font-bold w-12 shrink-0">SENSOR:</span>
                  <span className="text-carbon-300">{project.architecture.inputStage}</span>
                </div>
                <div className="text-carbon-400 flex items-start gap-2">
                  <span className="text-tech-blue font-bold w-12 shrink-0">MCU:</span>
                  <span className="text-carbon-200">{project.architecture.processingUnit}</span>
                </div>
                <div className="text-carbon-400 flex items-start gap-2">
                  <span className="text-carbon-400 font-bold w-12 shrink-0">OUTPUT:</span>
                  <span className="text-carbon-300">{project.architecture.outputStage}</span>
                </div>
              </div>

              {/* Hardware & Software BOM Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-carbon-850 text-carbon-400 border border-carbon-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-carbon-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex items-center gap-1.5 text-xs font-mono font-medium text-carbon-200 hover:text-white transition-colors group"
              >
                <span>Inspect System Specs</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="p-1.5 rounded border border-carbon-800 text-carbon-400 hover:text-white hover:bg-carbon-800 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-2.5 py-1 rounded bg-carbon-800 hover:bg-carbon-700 text-carbon-200 text-xs font-mono transition-colors border border-carbon-700"
                >
                  Details
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </section>
  );
};

export default Projects;
