import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Cpu, 
  Layers, 
  Radio, 
  Terminal, 
  CheckCircle2, 
  Award,
  Factory
} from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
          01 // PROFILE & BACKGROUND
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
          Electronics & Embedded Hardware Engineering
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Main Narrative */}
        <div className="lg:col-span-8 space-y-4 text-sm sm:text-base text-carbon-300 leading-relaxed text-justify sm:text-left">
          <p>
            I am a B.Tech Electronics & Communication Engineering (ECE) student at <span className="text-carbon-100 font-medium">Ajay Kumar Garg Engineering College (AKGEC)</span>, affiliated with AKTU, Ghaziabad (Expected 2027). My technical focus is centered on low-level firmware development, custom PCB design, and robust sensor-to-cloud integration.
          </p>

          <p>
            In the national <span className="text-carbon-100 font-medium">Smart India Hackathon 2025 (Hardware Edition)</span>, I led the hardware design and system architecture of <span className="text-carbon-100 font-medium">Bharat Vision</span>—an automated embedded compliance monitoring system for Legal Metrology. Our team secured <span className="text-carbon-100 font-semibold">1st Place nationally out of 1,000+ teams</span>, resulting in a hardware patent and an accepted research paper published in <span className="text-carbon-100 italic">Pattern Recognition Letters</span>.
          </p>

          <p>
            My engineering work emphasizes rigorous fundamentals: writing deterministic <span className="text-carbon-100 font-medium">Embedded C</span> with hardware timer-driven ISRs, routing clean PCBs in <span className="text-carbon-100 font-medium">KiCad</span> with strict ground-plane isolation, and integrating multi-sensor buses over I2C, SPI, and UART. My practical exposure also includes industrial training in the Control & Instrumentation (C&I) department at <span className="text-carbon-100 font-medium">NTPC Dadri</span> and field discipline through the <span className="text-carbon-100 font-medium">National Cadet Corps (NCC)</span>.
          </p>
        </div>

        {/* Core Competencies Matrix */}
        <div className="lg:col-span-4 space-y-3">
          
          <div className="card-technical p-4">
            <div className="flex items-center gap-2 mb-1.5 text-carbon-100 font-medium text-xs font-mono">
              <Cpu className="w-4 h-4 text-tech-blue" />
              <span>PCB DESIGN & EDA</span>
            </div>
            <p className="text-xs text-carbon-400 leading-normal">
              KiCad schematic capture, component footprints, 2-layer routing, ground planes, DRC, and manufacturing Gerber generation.
            </p>
          </div>

          <div className="card-technical p-4">
            <div className="flex items-center gap-2 mb-1.5 text-carbon-100 font-medium text-xs font-mono">
              <Terminal className="w-4 h-4 text-tech-blue" />
              <span>EMBEDDED FIRMWARE</span>
            </div>
            <p className="text-xs text-carbon-400 leading-normal">
              Embedded C on ESP32, Raspberry Pi, and Arduino. Interrupt-driven control, ADC sampling, and low-power state management.
            </p>
          </div>

          <div className="card-technical p-4">
            <div className="flex items-center gap-2 mb-1.5 text-carbon-100 font-medium text-xs font-mono">
              <Radio className="w-4 h-4 text-tech-blue" />
              <span>SENSORS & PROTOCOLS</span>
            </div>
            <p className="text-xs text-carbon-400 leading-normal">
              INA226 current/voltage monitoring, NTC thermistors, optical sensor arrays, UART, SPI, I2C, MQTT, and Wi-Fi telemetry.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
