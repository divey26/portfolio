import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-12">
        <h2 className="text-headline-md text-text-primary mb-2 font-semibold">Academic & Certifications</h2>
        <div className="h-1 w-12 bg-tesla-blue"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-6 border-b border-border-light pb-2">Education</h3>
          <div className="bg-surface-pure p-8 border border-border-light transition-all hover:border-black">
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-lg font-bold text-text-primary">Bachelor of Science in Information Technology</h4>
              <span className="text-[10px] font-bold text-tesla-blue uppercase tracking-widest bg-blue-50 px-2 py-1 rounded">Reading</span>
            </div>
            <p className="text-sm text-text-secondary">Sri Lanka Institute of Information Technology (SLIIT)</p>
          </div>
          <div className="bg-surface-pure p-8 border border-border-light transition-all hover:border-black">
            <h4 className="text-lg font-bold text-text-primary mb-2">Diploma in Information Technology</h4>
            <p className="text-sm text-text-secondary">Sri Lanka Institute of Information Technology (SLIIT)</p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-6 border-b border-border-light pb-2">Certifications</h3>
          <div className="bg-surface-pure p-8 border border-border-light transition-all hover:border-black flex flex-col gap-4">
            <div className="flex justify-between items-center border-b border-border-light pb-4">
              <div>
                <h4 className="text-md font-bold text-text-primary">Prompt Design in Vertex AI – Skill Badge</h4>
                <p className="text-xs text-text-secondary mt-1">Google Cloud</p>
              </div>
              <span className="text-[10px] font-bold bg-surface-container px-3 py-1 rounded">2026</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <div>
                <h4 className="text-md font-bold text-text-primary">Data Science Foundation</h4>
                <p className="text-xs text-text-secondary mt-1">Great Learning Academy</p>
              </div>
              <span className="text-[10px] font-bold bg-surface-container px-3 py-1 rounded">2024</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
