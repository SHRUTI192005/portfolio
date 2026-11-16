// Strictly verified portfolio data based on Shruti Tyagi's resume
export const personalInfo = {
  name: "Shruti Tyagi",
  title: "Electronics Engineer | Embedded Systems | IoT | Hardware Innovation",
  shortTitle: "Embedded Systems & IoT Engineer",
  email: "shrutityagi613@gmail.com",
  phone: "+91-8595804053",
  location: "Ghaziabad, Uttar Pradesh, India",
  college: "Ajay Kumar Garg Engineering College (AKGEC)",
  university: "AKTU, Ghaziabad",
  degree: "B.Tech – Electronics & Communication Engineering",
  graduationYear: "2027",
  graduationStatus: "Expected: 2027",
  linkedIn: "https://www.linkedin.com/in/shruti-tyagi-b705ab285",
  github: "https://github.com/SHRUTI192005",
  resumeUrl: "./Shruti_Tyagi_Resume.pdf",
  profileImage: "./shruti_profile.jpg",
  bio: "B.Tech Electronics & Communication Engineering (ECE) undergraduate and Smart India Hackathon (SIH) 2025 Hardware Edition Winner with hands-on experience in embedded systems, IoT, hardware-software integration, and PCB design. Skilled in Embedded C, Python, Arduino Uno, ESP32, Raspberry Pi, and KiCad. Co-author of an accepted research paper in Pattern Recognition Letters. Eager to apply embedded systems knowledge to develop innovative hardware solutions.",
  stats: [
    { label: "SIH 2025 Rank", value: "#1 Nationally", detail: "Hardware Edition (1,000+ teams)" },
    { label: "Research & IP", value: "1 Paper + 1 Patent", detail: "Pattern Recognition Letters & Patent" },
    { label: "Core Projects", value: "4 Systems", detail: "ESP32, RPi, Optical & Power" },
    { label: "Industrial Training", value: "NTPC Dadri", detail: "Control & Instrumentation (PSU)" }
  ]
};

export const skillsData = [
  {
    category: "Hardware & PCB Design",
    description: "Schematic design, footprint assignment, PCB routing and DRC",
    icon: "Cpu",
    skills: [
      { name: "KiCad", level: "Advanced", desc: "Schematic capture, PCB layout, DRC & Gerber generation" },
      { name: "Circuit Design", level: "Advanced", desc: "Analog/digital schematic synthesis & power rail planning" },
      { name: "PCB Layout & Routing", level: "Proficient", desc: "Component placement, trace clearance, ground planes" },
      { name: "Battery Protection Circuits", level: "Proficient", desc: "Overvoltage, overcurrent, and thermal cutoff interfacing" },
      { name: "Sensor Interfacing", level: "Advanced", desc: "Analog & digital sensor integration (INA226, NTC, DHT11)" },
      { name: "Optical Sensing", level: "Specialized", desc: "Multi-wavelength LED arrays & photodiode acquisition" }
    ]
  },
  {
    category: "Firmware & Embedded Platforms",
    description: "Low-level programming, real-time control, and SoC deployment",
    icon: "Microchip",
    skills: [
      { name: "Embedded C", level: "Advanced", desc: "Firmware programming, registers, memory-conscious code" },
      { name: "ESP32", level: "Advanced", desc: "Dual-core RTOS, Wi-Fi/BLE stacks, low-power sleep modes" },
      { name: "Raspberry Pi", level: "Advanced", desc: "Linux embedded host, camera pipelines, multi-sensor I/O" },
      { name: "Arduino Uno", level: "Proficient", desc: "Prototyping, GPIO management, analog ADC reading" },
      { name: "Real-Time Firmware", level: "Proficient", desc: "Deterministic loop execution and state-machine logic" },
      { name: "Interrupt-Driven Control", level: "Advanced", desc: "Hardware timer ISRs and external interrupt handling" },
      { name: "Hardware-Software Codesign", level: "Advanced", desc: "Bridging physical electronics with high-level software" }
    ]
  },
  {
    category: "Protocols & Interfaces",
    description: "Serial communication, wireless networks, and IoT telemetries",
    icon: "Radio",
    skills: [
      { name: "UART", level: "Advanced", desc: "Asynchronous serial debugging and transceiver links" },
      { name: "SPI", level: "Advanced", desc: "High-speed synchronous peripherals and sensor data buses" },
      { name: "I2C", level: "Advanced", desc: "Two-wire multi-device sensor bus (e.g. INA226 telemetry)" },
      { name: "Wi-Fi (802.11)", level: "Proficient", desc: "WLAN wireless connectivity and packet broadcasting" },
      { name: "Bluetooth / BLE", level: "Proficient", desc: "GATT services and energy-efficient telemetry" },
      { name: "MQTT", level: "Advanced", desc: "Lightweight publish/subscribe telemetry messaging for IoT" },
      { name: "HTTP / REST API", level: "Proficient", desc: "Cloud endpoint data sync and JSON payloads" }
    ]
  },
  {
    category: "Software & Engineering Tools",
    description: "Development environments, Linux OS, and automated tools",
    icon: "Code2",
    skills: [
      { name: "Python", level: "Proficient", desc: "Data processing, CV scripts, sensor pipeline integration" },
      { name: "Arduino IDE", level: "Advanced", desc: "Library management, bootloader flashing, serial monitor" },
      { name: "VS Code", level: "Advanced", desc: "Primary development environment and extension ecosystem" },
      { name: "Thonny", level: "Proficient", desc: "MicroPython and Python embedded environment" },
      { name: "Raspberry Pi OS (Linux)", level: "Proficient", desc: "Bash scripting, systemd daemons, GPIO device trees" },
      { name: "Git & GitHub", level: "Proficient", desc: "Version control, collaboration, code architecture" },
      { name: "NI LabVIEW", level: "Certified", desc: "Virtual instrumentation, data acquisition (AKGEC TIFAC CORE)" }
    ]
  },
  {
    category: "Industrial & Applied Domains",
    description: "Real-world industrial systems, legal metrology, and power",
    icon: "Wrench",
    skills: [
      { name: "Industrial C&I", level: "Field Exposed", desc: "Control & Instrumentation operations observed at NTPC Dadri" },
      { name: "Legal Metrology Automation", level: "Winning Solution", desc: "Automated compliance verification for retail/e-commerce" },
      { name: "Smart Agriculture", level: "Project Built", desc: "Precision spraying automation and remote cloud management" },
      { name: "Medical Instrumentation", level: "Research Active", desc: "Non-invasive optical physiological parameter acquisition" },
      { name: "EV Battery Management (BMS)", level: "Hardware Built", desc: "Current/voltage/temperature measurement & circuit protection" }
    ]
  }
];

export const projectsData = [
  {
    id: "bharat-vision",
    title: "BHARAT VISION",
    subtitle: "Automated Compliance Checker for E-Commerce Platforms",
    badge: "SIH 2025 Winning Project – 1st Place Nationally",
    badgeColor: "amber",
    category: "Industrial IoT & Metrology",
    year: "2025",
    patentStatus: "Patented & Research Paper Published",
    paperVenue: "Pattern Recognition Letters",
    summary: "Raspberry Pi–based automated embedded inspection system for Legal Metrology compliance, integrating multi-sensor pipelines and computer vision for e-commerce product verification.",
    description: "Bharat Vision is an intelligent hardware-software compliance verification system designed to solve the critical bottleneck of Legal Metrology inspection on e-commerce platforms. As the lead hardware and system architect, led the development of a multi-sensor acquisition pipeline running on Raspberry Pi OS. The system synchronizes environmental sensors (DHT11), weight sensors (load cell arrays), and computer vision inspection cameras to automatically verify mandatory declarations, package integrity, and dimensional/weight metrics in real time without human manual latency.",
    highlights: [
      "Led hardware design and system architecture securing 1st Place nationally at Smart India Hackathon 2025 (Hardware Edition) against 1,000+ teams.",
      "Engineered an automated multi-sensor acquisition pipeline integrating Raspberry Pi, DHT11 temperature/humidity sensors, weight load cells, and computer vision cameras.",
      "Co-authored research published in Pattern Recognition Letters and successfully secured a hardware system patent.",
      "Eliminated manual sampling inspection delays with deterministic edge data acquisition and real-time regulatory compliance validation."
    ],
    techStack: [
      "Raspberry Pi",
      "Raspberry Pi OS (Linux)",
      "Multi-Sensor Pipeline",
      "DHT11",
      "Weight Sensors",
      "Computer Vision",
      "Python",
      "Embedded Hardware",
      "Legal Metrology"
    ],
    architecture: {
      inputStage: "Dual Weight Load Cells + DHT11 Ambient Sensors + High-Resolution Image Capture",
      processingUnit: "Raspberry Pi Embedded Controller (Edge Processing & Protocol Bridge)",
      protocols: "I2C / GPIO Digital Bus / Serial / REST API",
      outputStage: "Real-time Legal Metrology Compliance Dashboard & Automated Pass/Fail Alert"
    },
    github: "https://github.com/SHRUTI192005",
    paper: "https://doi.org", // Pattern Recognition Letters
    impactMetric: "1st Place Nationally among 1,000+ Teams"
  },
  {
    id: "glucospectra",
    title: "GLUCOSPECTRA",
    subtitle: "Non-Invasive Blood Glucose Monitoring System",
    badge: "Medical IoT Prototype – Research Under Submission",
    badgeColor: "cyan",
    category: "Medical IoT & Optical Sensing",
    year: "2024–2025",
    patentStatus: "Research Paper Under Submission",
    paperVenue: "Peer-reviewed Journal (Under Submission)",
    summary: "Prototype non-invasive blood glucose monitoring system leveraging multi-wavelength optical sensing and photodiode-based signal acquisition on ESP32 architecture.",
    description: "GlucoSpectra introduces a pain-free, non-invasive methodology for continuous blood glucose estimation, overcoming the drawbacks of conventional finger-prick blood extraction methods. Designed the core embedded hardware and software architecture, incorporating a multi-wavelength LED optical array emitting in targeted absorption bands and high-sensitivity photodiode acquisition stages. Interfaced with an ESP32 microcontroller for analog signal conditioning, filtering, and real-time physiological parameter calculation with cloud sync.",
    highlights: [
      "Designed the embedded hardware architecture for multi-wavelength optical emitter and photodiode detector circuitry.",
      "Implemented signal conditioning and noise suppression on low-amplitude transimpedance optical waveforms.",
      "Developed deterministic Embedded C firmware on ESP32 for high-speed ADC sampling and real-time glucose estimation.",
      "Enabled wireless data transmission for remote medical record logging and doctor-patient telemetry.",
      "Co-authored research paper on multi-wavelength optical sensing and photodiode acquisition, currently under submission."
    ],
    techStack: [
      "Embedded C",
      "ESP32",
      "Multi-Wavelength LEDs",
      "Photodiode Array",
      "Analog Signal Conditioning",
      "Optical Sensing",
      "IoT Cloud",
      "Wi-Fi (802.11)"
    ],
    architecture: {
      inputStage: "Multi-Wavelength Optical Emitter (NIR/IR) + High-Sensitivity Photodiode Stage",
      processingUnit: "ESP32 32-bit Microcontroller (Signal Conditioning, Digital Filtering & Firmware)",
      protocols: "ADC Sampling / Wi-Fi Telemetry / MQTT / REST API",
      outputStage: "Real-time Non-Invasive Glucose Metrics & Cloud Health Log"
    },
    github: "https://github.com/SHRUTI192005",
    paper: "Under Submission",
    impactMetric: "Finger-Prick Free Continuous Optical Sensing"
  },
  {
    id: "ev-battery-bms",
    title: "EV BATTERY MONITORING SYSTEM",
    subtitle: "Smart Battery Management & Protection Hardware",
    badge: "Custom KiCad PCB & Embedded C Firmware",
    badgeColor: "blue",
    category: "Power Electronics & Automotive",
    year: "2024",
    patentStatus: "Hardware Implementation Completed",
    summary: "Real-time electric vehicle battery pack telemetry system measuring voltage, current, and temperature using ESP32, INA226, NTC sensors, and custom KiCad PCB.",
    description: "An advanced embedded hardware and firmware solution for monitoring and safeguarding electric vehicle lithium battery packs. Designed and routed a custom printed circuit board (PCB) using KiCad, incorporating precision sensor interfaces and multi-stage battery protection circuits. Interfaced an INA226 high-side bidirectional current/power monitor over I2C together with precision NTC thermistors for thermal mapping. The ESP32 firmware executes real-time threshold monitoring and safety cutoff routines.",
    highlights: [
      "Engineered custom schematic and routed two-layer PCB layout using KiCad following strict electrical clearance and thermal rules.",
      "Integrated INA226 bidirectional current and voltage sensor over high-speed I2C for millivolt-level cell telemetry.",
      "Calibrated NTC thermistor array for distributed cell thermal profiling to prevent thermal runaway conditions.",
      "Developed Embedded C firmware with interrupt-driven alarms for overvoltage, undervoltage, and overcurrent cutoff protection.",
      "Implemented hardware protection circuits to boost overall battery pack safety, lifecycle, and operational efficiency."
    ],
    techStack: [
      "Embedded C",
      "ESP32",
      "KiCad (PCB Layout & DRC)",
      "INA226 Sensor",
      "NTC Thermistors",
      "I2C Protocol",
      "Protection Circuits",
      "Power Electronics"
    ],
    architecture: {
      inputStage: "INA226 High-Precision Current/Voltage Sensor + NTC Thermal Sensor Array",
      processingUnit: "ESP32 Microcontroller (Custom KiCad PCB Implementation)",
      protocols: "I2C Bus / Hardware Interrupts / Low-Side Cutoff Controls",
      outputStage: "Real-time Cell Voltage/Current/Temp Telemetry & Immediate Fault Cutoff Trigger"
    },
    github: "https://github.com/SHRUTI192005",
    impactMetric: "Microsecond-level Fault Detection & Telemetry"
  },
  {
    id: "krishinetra",
    title: "KRISHINETRA",
    subtitle: "Smart Pesticide Sprinkling System",
    badge: "Agricultural IoT & Automated Spraying",
    badgeColor: "emerald",
    category: "Agricultural IoT & Automation",
    year: "2024",
    patentStatus: "Working Embedded IoT System",
    summary: "Automated ESP32-based pesticide spraying system with GPIO actuator control, sensor interfacing, and cloud-integrated wireless telemetry.",
    description: "KrishiNetra was conceived to tackle excessive chemical usage and hazardous human exposure during pesticide application in agriculture. Designed and developed an ESP32-based embedded system that handles sensor data acquisition, GPIO relay/solenoid actuation, and automated pesticide misting routines. Implemented Embedded C firmware with wireless telemetry and cloud integration for real-time crop parameters and remote operation.",
    highlights: [
      "Designed and deployed ESP32-based embedded controller with robust sensor interfacing and GPIO relay control.",
      "Implemented firmware in Embedded C for automated trigger conditions and timer-based cyclic spray routines.",
      "Integrated wireless communications for real-time cloud data transmission, enabling farmers to monitor and trigger spraying remotely.",
      "Reduced hazardous chemical exposure and optimized pesticide consumption through automated, targeted dispensing."
    ],
    techStack: [
      "Embedded C",
      "ESP32",
      "IoT Architecture",
      "GPIO Control",
      "Relay / Actuators",
      "Sensor Interfacing",
      "Wireless Telemetry",
      "Cloud Integration"
    ],
    architecture: {
      inputStage: "Agricultural Environmental Sensors + Soil Moisture Inputs",
      processingUnit: "ESP32 Embedded SoC running Embedded C Firmware",
      protocols: "GPIO PWM / Wi-Fi / MQTT Cloud Messaging",
      outputStage: "Automated Solenoid Spraying Actuator + Remote Mobile/Web Cloud Dashboard"
    },
    github: "https://github.com/SHRUTI192005",
    impactMetric: "Automated Spraying with Cloud Remote Operation"
  }
];

export const researchPublications = [
  {
    title: "Automated Compliance Verification System for E-Commerce Platforms",
    venue: "Pattern Recognition Letters",
    publisher: "Elsevier",
    status: "Accepted & Published / Patented",
    authors: "Shruti Tyagi (Co-author) et al.",
    description: "Co-authored research on an automated regulatory compliance verification system integrating Raspberry Pi, DHT11 environmental sensors, weight load sensors, and computer vision for real-time multi-modal data acquisition and regulatory Legal Metrology checking on e-commerce platforms. The system was recognized with a Patent and published.",
    tags: ["Pattern Recognition Letters", "Patent Granted/Filed", "Raspberry Pi", "Legal Metrology", "Multi-Modal Sensors", "Computer Vision"]
  },
  {
    title: "Non-Invasive Blood Glucose Monitoring Prototype Using Multi-Wavelength Optical Sensing and Photodiode-Based Data Acquisition",
    venue: "Journal Submission (Under Review)",
    publisher: "Scientific / Biomedical Instrumentation",
    status: "Under Submission",
    authors: "Shruti Tyagi et al.",
    description: "Developed and documented a non-invasive optical glucose monitoring prototype leveraging selective multi-wavelength LED emission and transimpedance photodiode-based signal acquisition, processed on ESP32 embedded architecture.",
    tags: ["Optical Spectroscopy", "Photodiode Acquisition", "ESP32", "Embedded C", "Non-Invasive Diagnostic"]
  }
];

export const experienceData = [
  {
    organization: "NTPC Limited (PSU)",
    role: "Intern – NTPC Dadri",
    department: "Control & Instrumentation (C&I) Department",
    type: "Industrial Internship",
    period: "Industrial Training",
    location: "Dadri, Uttar Pradesh, India",
    description: "Completed comprehensive industrial training at NTPC Dadri, one of India's premier public sector power generation plants. Embedded within the Control & Instrumentation (C&I) department, gaining valuable exposure to large-scale industrial automation.",
    points: [
      "Gained hands-on exposure to the Control & Instrumentation (C&I) department across thermal and solar power plant operations.",
      "Studied industrial SCADA/DCS architectures, field sensor transmitters, telemetry protocols, and automated valve/boiler instrumentation.",
      "Observed mission-critical control loops, safety interlocks, and real-time supervisory systems maintaining grid stability.",
      "Bridged theoretical electronic instrumentation concepts with high-capacity power station engineering."
    ],
    skillsLearned: ["Industrial C&I", "SCADA / DCS Architecture", "Field Transmitters", "Thermal & Solar Plant Operations", "Process Control"]
  },
  {
    organization: "National Cadet Corps (NCC)",
    role: "Cadet",
    department: "National Cadet Corps",
    type: "Leadership & National Service",
    period: "Active Cadetship",
    location: "India",
    description: "Active cadet in the National Cadet Corps (NCC), cultivating high discipline, physical resilience, collaborative crisis resolution, and leadership.",
    points: [
      "Demonstrated exemplary discipline, operational diligence, and team leadership through structured NCC training drills and camps.",
      "Developed fast decision-making and cross-functional coordination skills under challenging physical and operational scenarios.",
      "Engaged in institutional community service, leadership exercises, and national youth development activities."
    ],
    skillsLearned: ["Operational Leadership", "Discipline & Rigor", "Crisis Management", "Team Coordination", "Strategic Planning"]
  }
];

export const achievementsData = [
  {
    title: "Winner – Smart India Hackathon (SIH) 2025, Hardware Edition",
    issuer: "Ministry of Education & AICTE, Government of India",
    level: "National Level – 1,000+ Teams",
    rank: "1st Place Nationally (Winner)",
    highlight: "Secured 1st place nationally against 1,000+ teams by leading the hardware design and system architecture of an automated embedded compliance monitoring system.",
    icon: "Trophy",
    details: "Led the complete hardware architecture, multi-sensor integration (Raspberry Pi, weight sensors, DHT11, computer vision), and real-time firmware execution for automated Legal Metrology inspection on e-commerce platforms. The innovation led to a Patent and an accepted research publication in Pattern Recognition Letters."
  },
  {
    title: "Hardware System Patent & Research Publication",
    issuer: "Pattern Recognition Letters & Patent Authority",
    level: "National / International Scientific Recognition",
    rank: "Patent + Published Research",
    highlight: "Co-authored an accepted research paper in Pattern Recognition Letters and secured a patent for the multi-modal automated compliance system.",
    icon: "FileCheck",
    details: "Validating academic and intellectual rigor by bridging embedded hardware engineering with peer-reviewed scientific contributions and patented intellectual property."
  },
  {
    title: "Lead Hardware Architect for Embedded Prototypes",
    issuer: "Ajay Kumar Garg Engineering College (AKGEC)",
    level: "College & State Level Engineering",
    rank: "Hardware Innovation",
    highlight: "Architected multiple hardware solutions including EV Battery Management System, GlucoSpectra Non-Invasive Glucose Monitor, and KrishiNetra Agricultural IoT.",
    icon: "Award",
    details: "Proved end-to-end engineering versatility: schematic capture, PCB layout in KiCad, component soldering, Embedded C firmware development, and IoT cloud dashboard integration."
  }
];

export const educationData = [
  {
    institution: "Ajay Kumar Garg Engineering College (AKGEC)",
    affiliation: "Affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Ghaziabad",
    degree: "B.Tech in Electronics & Communication Engineering (ECE)",
    duration: "2023 – 2027",
    status: "Expected: 2027",
    focus: "Embedded Systems, Microcontrollers, PCB Design, IoT Architecture, VLSI, and Industrial Automation.",
    highlights: [
      "Smart India Hackathon 2025 Hardware Edition Winner (1st Place Nationally)",
      "Co-author of research published in Pattern Recognition Letters",
      "Hands-on project work in ESP32, Raspberry Pi, KiCad PCB Design, and Sensor Interfacing"
    ]
  }
];

export const certificationsData = [
  {
    name: "NI LabVIEW ITTP Program",
    issuer: "AKGEC TIFAC CORE",
    domain: "Virtual Instrumentation & Industrial Automation",
    description: "Hands-on industrial training program covering National Instruments LabVIEW graphical programming, virtual instrumentation, data acquisition (DAQ) hardware, and automated measurement systems.",
    icon: "Award"
  },
  {
    name: "Udemy Certificate – PCB Designing",
    issuer: "Udemy",
    domain: "Electronics & PCB Layout",
    description: "Comprehensive practical coursework covering schematic design, electronic component footprint creation, multi-layer PCB layout routing, Design Rule Checks (DRC), and manufacturing Gerber export using KiCad.",
    icon: "CheckCircle2"
  }
];
