import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Check, 
  Copy, 
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry from ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-b border-carbon-800/80">
      
      {/* Section Header */}
      <div className="mb-10">
        <span className="text-xs font-mono text-carbon-400 uppercase tracking-wider block mb-1">
          08 // COMMUNICATION
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-carbon-50">
          Get in Touch
        </h2>
        <p className="text-xs sm:text-sm text-carbon-400 mt-1">
          Open to embedded firmware roles, hardware engineering internships, and research collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Direct Communication Channels */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="card-technical p-5 space-y-4 border-carbon-800">
            <h3 className="text-sm font-bold text-carbon-100 font-mono pb-2 border-b border-carbon-800">
              DIRECT CHANNELS
            </h3>

            {/* Email */}
            <div className="p-3 rounded bg-carbon-950 border border-carbon-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-carbon-500 block">EMAIL ADDRESS</span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-mono text-carbon-200 hover:text-white transition-colors break-all"
                >
                  {personalInfo.email}
                </a>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-1.5 rounded bg-carbon-900 hover:bg-carbon-800 text-carbon-400 transition-colors border border-carbon-800 ml-2 shrink-0"
                aria-label="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-3.5 h-3.5 text-tech-emerald" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-3 rounded bg-carbon-950 border border-carbon-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-carbon-500 block">PHONE / MOBILE</span>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs font-mono text-carbon-200 hover:text-white transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-1.5 rounded bg-carbon-900 hover:bg-carbon-800 text-carbon-400 transition-colors border border-carbon-800 ml-2 shrink-0"
                aria-label="Copy Phone"
              >
                {copiedType === 'phone' ? <Check className="w-3.5 h-3.5 text-tech-emerald" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location */}
            <div className="p-3 rounded bg-carbon-950 border border-carbon-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-carbon-500 block">LOCATION</span>
                <span className="text-xs font-mono text-carbon-200">{personalInfo.location}</span>
              </div>
              <MapPin className="w-3.5 h-3.5 text-carbon-500" />
            </div>

            {/* Professional Profiles */}
            <div className="pt-3 border-t border-carbon-850 grid grid-cols-2 gap-2 text-xs font-mono">
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 p-2 rounded bg-carbon-950 hover:bg-carbon-850 text-carbon-300 hover:text-tech-blue border border-carbon-800 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 p-2 rounded bg-carbon-950 hover:bg-carbon-850 text-carbon-300 hover:text-white border border-carbon-800 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          <div className="p-3.5 rounded card-technical border-carbon-800 text-[11px] font-mono text-carbon-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-tech-emerald shrink-0"></span>
            <span>Typically responds to engineering inquiries within 24 hours.</span>
          </div>

        </div>

        {/* Clean Utilitarian Contact Form */}
        <div className="lg:col-span-7 card-technical p-6 border-carbon-800">
          <div className="pb-3 mb-4 border-b border-carbon-800 flex items-center justify-between text-xs font-mono">
            <span className="text-carbon-200 font-semibold">DISPATCH TRANSMISSION</span>
            <span className="text-carbon-500">STANDARD SMTP / MAILTO</span>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-3 font-mono">
              <div className="w-10 h-10 rounded-full bg-carbon-800 border border-carbon-700 text-tech-emerald mx-auto flex items-center justify-center">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-carbon-100">Message Prepared</h4>
              <p className="text-xs text-carbon-400 max-w-sm mx-auto">
                Thank you, {formData.name}. Your message has been prepared and opened in your email client for delivery to {personalInfo.email}.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-3 py-1.5 rounded bg-carbon-800 hover:bg-carbon-700 text-xs text-carbon-200 transition-colors border border-carbon-700"
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="contact-name" className="block text-carbon-400 mb-1 text-[11px]">
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name or organization"
                    className="w-full px-3 py-2 rounded bg-carbon-950 border border-carbon-800 text-carbon-100 placeholder-carbon-600 focus:outline-none focus:border-carbon-600 transition-colors font-sans text-xs"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-carbon-400 mb-1 text-[11px]">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 rounded bg-carbon-950 border border-carbon-800 text-carbon-100 placeholder-carbon-600 focus:outline-none focus:border-carbon-600 transition-colors font-sans text-xs"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-carbon-400 mb-1 text-[11px]">
                  SUBJECT / TOPIC *
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Embedded Firmware Engineer Role / KiCad Project"
                  className="w-full px-3 py-2 rounded bg-carbon-950 border border-carbon-800 text-carbon-100 placeholder-carbon-600 focus:outline-none focus:border-carbon-600 transition-colors font-sans text-xs"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-carbon-400 mb-1 text-[11px]">
                  MESSAGE *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Engineering requirements, role description, or collaboration scope..."
                  className="w-full px-3 py-2 rounded bg-carbon-950 border border-carbon-800 text-carbon-100 placeholder-carbon-600 focus:outline-none focus:border-carbon-600 transition-colors font-sans text-xs resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-carbon-100 hover:bg-white text-carbon-950 font-semibold text-xs transition-colors disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Dispatching...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}

          <div className="pt-3 mt-4 border-t border-carbon-850 text-[10px] font-mono text-carbon-500 text-center">
            Directly delivered to shrutityagi613@gmail.com
          </div>
        </div>

      </div>

    </section>
  );
};

export default Contact;
