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
  SlidersHorizontal,
  Activity,
  Zap,
  Sparkles
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filterOptions = ["All", "SIH Winner", "Medical IoT", "Power / BMS", "Agriculture"];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "SIH Winner") return project.id === "bharat-vision";
    if (activeFilter === "Medical IoT") return project.id === "glucospectra";
    if (activeFilter === "Power / BMS") return project.id === "ev-battery-bms";
    if (activeFilter === "Agriculture") return project.id === "krishinetra";
    return true;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              03. Hardware & Firmware Deployments
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Featured <span className="text-gradient-cyan">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-base max-w-2xl">
              Real-world embedded systems, patented hardware architectures, custom KiCad PCB designs, and optical sensor pipelines developed from the ground up.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? 'bg-cyan-500 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-dark-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-950/30"
            >
              <div>
                {/* Card Top Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900 text-cyan-400 border border-slate-800">
                    {project.category}
                  </span>

                  {project.id === "bharat-vision" && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1.5 shadow-sm shadow-amber-500/10">
                      <Trophy className="w-3.5 h-3.5 text-amber-400" />
                      SIH '25 1st Place National
                    </span>
                  )}

                  {project.id === "glucospectra" && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-cyan-400" />
                      Paper Under Submission
                    </span>
                  )}

                  {project.id === "ev-battery-bms" && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                      Custom KiCad PCB
                    </span>
                  )}

                  {project.id === "krishinetra" && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-emerald-400" />
                      Automated Sprinkling
                    </span>
                  )}
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  {project.subtitle}
                </p>

                {/* Project Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {project.summary}
                </p>

                {/* Architecture Signal Path Preview */}
                <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800/80 mb-6 font-mono text-xs">
                  <div className="text-[10px] uppercase text-cyan-400 tracking-wider mb-2 flex items-center justify-between">
                    <span>SYSTEM SIGNAL FLOW</span>
                    <span className="text-slate-500">I/O PIPELINE</span>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400 font-bold">IN:</span>
                      <span className="truncate">{project.architecture.inputStage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-400 font-bold">PROC:</span>
                      <span className="truncate">{project.architecture.processingUnit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">OUT:</span>
                      <span className="truncate">{project.architecture.outputStage}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/80">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 group/btn"
                >
                  <span>Inspect System Specs</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

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
