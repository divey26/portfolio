"use client";
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-bright py-section-gap border-t border-border-light">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="text-display-lg text-text-primary mb-4 font-semibold tracking-tight">Contact</h2>
          <p className="text-body-lg text-text-secondary max-w-xl mx-auto">
            Interested in working together? Reach out to discuss high-impact projects or technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-4 space-y-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Email</h4>
              <a href="mailto:divendraparamendran226@gmail.com" className="text-text-primary font-semibold hover:text-tesla-blue transition-colors">
                divendraparamendran226@gmail.com
              </a>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Location</h4>
              <p className="text-text-primary font-semibold">Sri Lanka</p>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Social</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/diven226" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <span className="font-bold text-xs">IN</span>
                </a>
                <a href="https://github.com/divey26" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-black hover:text-white transition-all">
                  <span className="font-bold text-xs">GH</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-8 bg-surface-pure p-8 border border-border-light">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">First Name *</label>
                  <input type="text" className="w-full border border-border-light bg-surface-container-lowest p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Email Address *</label>
                  <input type="email" className="w-full border border-border-light bg-surface-container-lowest p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="email@example.com" required />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Subject</label>
                <select className="w-full border border-border-light bg-surface-container-lowest p-3 text-sm focus:outline-none focus:border-black transition-colors">
                  <option>Project Inquiry</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Message *</label>
                <textarea rows={5} className="w-full border border-border-light bg-surface-container-lowest p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="How can I help you?" required></textarea>
              </div>

              <button type="submit" className="w-full bg-primary text-on-primary font-bold tracking-widest uppercase text-xs py-4 hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
                Send Message
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
