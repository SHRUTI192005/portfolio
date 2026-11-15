import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Cpu, 
  Layers, 
  Radio, 
  Code2, 
  Wrench, 
  Search, 
  CheckCircle,
  Sliders,
  Terminal,
  Activity
} from 'lucide-react';

const categoryIcons = {
  "Hardware & PCB Design": Cpu,
  "Firmware & Embedded Platforms": Layers,
  "Protocols & Interfaces": Radio,
  "Software & Engineering Tools": Code2,
  "Industrial & Applied Domains": Wrench
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", ...skillsData.map(c => c.category)];

  // Filter skills based on category and search
  const filteredCategories = skillsData.map(cat => {
    const matchesCategory = selectedCategory === "All" || cat.category === selectedCategory;
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.level.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return {
      ...cat,
      isVisible: matchesCategory && (searchQuery === "" || matchingSkills.length > 0),
      displaySkills: searchQuery === "" ? cat.skills : matchingSkills
    };
  }).filter(cat => cat.isVisible);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-dark-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              02. Technical Arsenal
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
              Core Skills & <span className="text-gradient-cyan">Technologies</span>
            </h2>
            <p className="text-slate-400 text-base max-w-xl">
              Strictly verified competencies across embedded hardware, firmware development, communication protocols, and industrial automation.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill, protocol, tool..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-900/80 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono text-xs"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-dark-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-dark-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12 glass-panel rounded-2xl border border-slate-800">
              <p className="text-slate-300 text-sm font-mono mb-2">No verified skills matching "{searchQuery}"</p>
              <p className="text-slate-500 text-xs mb-4">Try searching for Embedded C, ESP32, KiCad, Raspberry Pi, MQTT, or I2C.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-xl bg-cyan-500 text-dark-950 font-bold text-xs hover:bg-cyan-400 transition-colors"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            filteredCategories.map((group) => {
              const Icon = categoryIcons[group.category] || Cpu;
              return (
                <div 
                  key={group.category}
                  className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800/80 hover:border-slate-700 transition-all"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white tracking-wide">
                          {group.category}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {group.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-cyan-400/80 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
                      {group.displaySkills.length} Verified
                    </span>
                  </div>

                  {/* Skill Items */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.displaySkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/60 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700/60">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Firmware Code Snippet / Protocol Matrix Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/80 via-dark-900/80 to-slate-900/80 border border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Hardware-Software Co-Design Standard</h4>
              <p className="text-xs text-slate-400 mt-1">
                Zero arbitrary libraries. Hardware timer-driven ISRs, calibrated ADC sampling, and noise-isolated PCB layouts.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-cyan-300 bg-cyan-950/60 px-4 py-2 rounded-xl border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Firmware Status: Production Ready</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
