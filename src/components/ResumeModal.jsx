import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  X, 
  ExternalLink, 
  FileCheck,
  CheckCircle,
  Download
} from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState('pdf');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl h-[92vh] bg-carbon-900 border border-carbon-700 rounded-lg shadow-2xl flex flex-col overflow-hidden text-carbon-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-carbon-800 bg-carbon-950">
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-4 h-4 text-tech-blue" />
            <div>
              <h3 id="resume-modal-title" className="text-xs font-bold text-carbon-100 font-mono flex items-center gap-2">
                <span>Shruti_Tyagi_Resume.pdf</span>
                <span className="hidden sm:inline-block px-1.5 py-0.2 rounded text-[10px] font-mono bg-carbon-800 text-carbon-400 border border-carbon-700">
                  ATS Verified
                </span>
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs">
            {/* View Mode Switch */}
            <div className="flex items-center bg-carbon-900 p-0.5 rounded border border-carbon-800">
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded transition-colors text-[11px] ${
                  viewMode === 'pdf' 
                    ? 'bg-carbon-100 text-carbon-950 font-bold' 
                    : 'text-carbon-400 hover:text-white'
                }`}
              >
                PDF View
              </button>
              <button
                onClick={() => setViewMode('document')}
                className={`px-2.5 py-1 rounded transition-colors text-[11px] ${
                  viewMode === 'document' 
                    ? 'bg-carbon-100 text-carbon-950 font-bold' 
                    : 'text-carbon-400 hover:text-white'
                }`}
              >
                Text View
              </button>
            </div>

            <a
              href={personalInfo.resumeUrl}
              download="Shruti_Tyagi_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-carbon-100 hover:bg-white text-carbon-950 font-medium transition-colors text-[11px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded bg-carbon-850 hover:bg-carbon-800 text-carbon-400 hover:text-white transition-colors border border-carbon-700"
              title="Open in new window"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded bg-carbon-850 hover:bg-carbon-800 text-carbon-400 hover:text-white transition-colors border border-carbon-700"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* View Mode Container */}
        <div className="flex-1 w-full bg-carbon-950 relative overflow-y-auto">
          {viewMode === 'pdf' ? (
            <iframe
              src={`${personalInfo.resumeUrl}#toolbar=0&navpanes=0`}
              title="Shruti Tyagi Official Resume"
              className="w-full h-full border-0 min-h-[500px]"
            />
          ) : (
            /* Structured ATS-Exact Document View */
            <div className="max-w-3xl mx-auto my-6 p-6 sm:p-10 bg-white text-slate-900 rounded shadow-xl font-sans text-xs leading-normal">
              {/* Header */}
              <div className="text-center pb-3 border-b border-blue-900">
                <h1 className="text-2xl font-bold text-blue-900 tracking-tight">Shruti Tyagi</h1>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-1 text-[11px] text-slate-700 font-medium">
                  <span>+91-8595804053</span>
                  <span>|</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-700 hover:underline">
                    {personalInfo.email}
                  </a>
                  <span>|</span>
                  <a href={personalInfo.linkedIn} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    LinkedIn
                  </a>
                  <span>|</span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">
                    GitHub
                  </a>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Professional Summary
                </h2>
                <p className="text-slate-800 text-justify text-[11px] leading-relaxed">
                  B.Tech Electronics Communication Engineering (ECE) undergraduate and Smart India Hackathon (SIH) 2025 Hardware Edition Winner with hands-on experience in embedded systems, IoT, hardware-software integration, and PCB design. Skilled in Embedded C, Python, Arduino Uno, ESP32, Raspberry Pi, and KiCad. Co-author of an accepted research paper in Pattern Recognition Letters. Eager to apply embedded systems knowledge to develop innovative hardware solutions. Expected Graduation: 2027.
                </p>
              </div>

              {/* Education */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Education
                </h2>
                <div className="flex justify-between items-baseline text-[11px]">
                  <div>
                    <span className="font-bold text-slate-900">AKTU, Ghaziabad (Ajay Kumar Garg Engineering College)</span>
                    <div className="italic text-slate-700">B.Tech – Electronics & Communication Engineering</div>
                  </div>
                  <span className="font-semibold text-slate-800">Expected: 2027</span>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Technical Skills
                </h2>
                <div className="space-y-1 text-[11px] text-slate-800">
                  <div>
                    <span className="font-bold">Core Skills: </span>
                    PCB Designing, Embedded & IoT Architecture
                  </div>
                  <div>
                    <span className="font-bold">Protocols & Interfaces: </span>
                    UART, SPI, I2C, Wi-Fi (802.11), Bluetooth/BLE, MQTT, HTTP, REST API
                  </div>
                  <div>
                    <span className="font-bold">Firmware & IoT: </span>
                    Embedded C, real-time firmware development, sensor interfacing, interrupt-driven control, hardware-software codesign, IoT system integration
                  </div>
                  <div>
                    <span className="font-bold">Software & Tools: </span>
                    Arduino IDE, KiCAD, VS Code, Thonny, Raspberry Pi OS (Linux), Git, NI LabVIEW
                  </div>
                </div>
              </div>

              {/* Achievements & Awards */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Achievements & Awards
                </h2>
                <div className="text-[11px]">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>Winner – Smart India Hackathon 2025, Hardware Edition</span>
                    <span>National Level – 1,000+ Teams</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-800 mt-0.5">
                    <li>Led hardware design and system architecture of an automated embedded compliance monitoring system, securing 1st place nationally against 1,000+ teams.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Projects
                </h2>
                <div className="space-y-2.5 text-[11px]">
                  <div>
                    <div className="font-bold text-slate-900">
                      BHARAT VISION – Automated Compliance Checker for E-Commerce Platforms
                    </div>
                    <div className="italic text-slate-700 text-[10px]">SIH 2025 Winning Project</div>
                    <ul className="list-disc list-inside text-slate-800">
                      <li>Developed a Raspberry Pi–based embedded system for Legal Metrology, automated product manual inspection integrated with multi-sensor pipeline.</li>
                      <li>Recognized as the winning solution at Smart India Hackathon (SIH) 2025 – Hardware Edition, resulting in a patent and a published research paper.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      KRISHINETRA – Smart Pesticide Sprinkling System
                    </div>
                    <div className="italic text-slate-700 text-[10px]">Embedded C — ESP32 — IoT — Agriculture</div>
                    <ul className="list-disc list-inside text-slate-800">
                      <li>Designed and developed an ESP32-based embedded system with sensor interfacing, GPIO control, and automated pesticide spraying using Embedded C.</li>
                      <li>Enabled wireless monitoring and cloud integration for real-time data transmission and remote operation.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      GLUCOSPECTRA – Non-Invasive Blood Glucose Monitoring System
                    </div>
                    <div className="italic text-slate-700 text-[10px]">Embedded Systems — IoT</div>
                    <ul className="list-disc list-inside text-slate-800">
                      <li>Developed a prototype non-invasive blood glucose monitoring system aimed at enabling blood glucose estimation without conventional finger-prick methods.</li>
                      <li>Designed the embedded hardware and software architecture for sensor-based data acquisition, signal processing, and real-time glucose monitoring.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      EV BATTERY MONITORING SYSTEM – Smart Battery Management
                    </div>
                    <div className="italic text-slate-700 text-[10px]">Embedded C — ESP32 — KiCad — INA226 — NTC Sensors</div>
                    <ul className="list-disc list-inside text-slate-800">
                      <li>Designed and developed a battery monitoring system for real-time voltage, current, and temperature measurement.</li>
                      <li>Integrated sensor interfacing and battery protection circuits to enhance battery safety and performance.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Research & Publications */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Research & Publications
                </h2>
                <div className="space-y-2 text-[11px]">
                  <div>
                    <div className="font-bold text-slate-900">
                      BHARAT VISION – Automated Compliance Checker for E-Commerce Platforms
                    </div>
                    <ul className="list-disc list-inside text-slate-800">
                      <li>Co-authored research on an automated compliance verification system integrating Raspberry Pi, DHT11, weight sensors, and computer vision for real-time multi-modal data acquisition and regulatory compliance checking on e-commerce platforms. Patented; paper published.</li>
                    </ul>
                  </div>

                  <div>
                    <div className="font-bold text-slate-900">
                      GLUCOSPECTRA – Non-Invasive Blood Glucose Monitoring System
                    </div>
                    <div className="italic text-slate-700 text-[10px]">Embedded C — ESP32 — IoT — Optical Sensing</div>
                    <ul className="list-disc list-inside text-slate-800">
                      <li>Developed a non-invasive glucose monitoring prototype using multi-wavelength optical sensing and photodiode-based data acquisition.</li>
                      <li>Research Paper Under Submission.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Internship & Training */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Internship & Training
                </h2>
                <ul className="list-disc list-inside text-[11px] text-slate-800 space-y-0.5">
                  <li><span className="font-bold">NTPC Limited (PSU)</span> – Intern – NTPC Dadri</li>
                  <li><span className="font-bold">National Cadet Corps (NCC)</span> – Cadet</li>
                </ul>
              </div>

              {/* Certifications */}
              <div className="mt-4">
                <h2 className="text-sm font-bold text-blue-900 border-b border-blue-900 pb-0.5 mb-1.5 uppercase tracking-wide">
                  Certifications
                </h2>
                <ul className="list-disc list-inside text-[11px] text-slate-800 space-y-0.5">
                  <li>NI LabVIEW ITTP Program – AKGEC TIFAC CORE</li>
                  <li>Udemy Certificate – PCB Designing</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-4 sm:px-6 py-2 border-t border-carbon-800 bg-carbon-950 flex flex-wrap items-center justify-between text-[11px] font-mono text-carbon-500">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-tech-emerald" />
            <span>Exact 1:1 match with official resume</span>
          </div>
          <div>
            <span>AKGEC Ghaziabad &bull; B.Tech ECE '27</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumeModal;
