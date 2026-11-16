import React from 'react';
import { skillsData } from '../data/portfolioData';
import { 
  Cpu, 
  Layers, 
  Radio, 
  Terminal, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
          02 // TECHNICAL MATRIX
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
          Core Engineering Competencies
        </h2>
        <p className="text-xs sm:text-sm text-carbon-400 mt-1">
          Strictly verified skills across embedded firmware, hardware schematic capture, PCB layout, and industrial telemetry.
        </p>
      </div>

      {/* Structured Category Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {skillsData.map((category) => (
          <div 
            key={category.category} 
            className="card-technical p-5 flex flex-col justify-between"
          >
            <div>
              <div className="pb-3 mb-4 border-b border-carbon-800">
                <h3 className="text-sm font-semibold text-carbon-100 flex items-center justify-between">
                  <span>{category.category}</span>
                  <span className="text-[10px] font-mono text-carbon-400">
                    {category.skills.length} verified
                  </span>
                </h3>
                <p className="text-[11px] text-carbon-400 mt-0.5">
                  {category.description}
                </p>
              </div>

              <ul className="space-y-2.5">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="text-xs">
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-medium text-carbon-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] text-carbon-500 bg-carbon-800/80 px-1.5 py-0.5 rounded">
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-[11px] text-carbon-400 mt-0.5 leading-snug">
                      {skill.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>

      {/* Engineering Rigor Callout */}
      <div className="mt-8 p-4 rounded card-technical border-carbon-800 text-xs font-mono text-carbon-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-tech-emerald"></span>
          <span>HARDWARE SPEC: Noise-isolated routing, calibrated ADC inputs, hardware ISRs, zero bloat.</span>
        </div>
        <span className="text-carbon-500 text-[11px]">PCB EDA: KiCad 8.x &bull; MCU: ESP32 / RPi / AVR</span>
      </div>

    </section>
  );
};

export default Skills;
