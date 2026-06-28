import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-16 bg-neutral-900 text-foreground">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-500">Education & Certifications</h2>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary-400 mb-4 border-b border-neutral-700 pb-2">Education</h3>
            <div className="space-y-6">
              <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-medium text-foreground">Bachelor of Science in Information Technology</h4>
                <p className="text-neutral-400">Sri Lanka Institute of Information Technology (SLIIT)</p>
                <span className="text-sm text-primary-500 font-semibold mt-2 inline-block">Reading</span>
              </div>
              <div className="bg-neutral-800 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-medium text-foreground">Diploma in Information Technology</h4>
                <p className="text-neutral-400">Sri Lanka Institute of Information Technology (SLIIT)</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-semibold text-primary-400 mb-4 border-b border-neutral-700 pb-2">Certifications</h3>
            <div className="bg-neutral-800 p-6 rounded-lg shadow-md space-y-4">
              <div className="flex justify-between items-center border-b border-neutral-700 pb-4 last:border-0 last:pb-0">
                <div>
                  <h4 className="text-lg font-medium text-foreground">Prompt Design in Vertex AI – Skill Badge</h4>
                  <p className="text-neutral-400 text-sm">Google Cloud</p>
                </div>
                <span className="text-primary-500 font-semibold">2026</span>
              </div>
              <div className="flex justify-between items-center border-b border-neutral-700 pb-4 last:border-0 last:pb-0">
                <div>
                  <h4 className="text-lg font-medium text-foreground">Data Science Foundation</h4>
                  <p className="text-neutral-400 text-sm">Great Learning Academy</p>
                </div>
                <span className="text-primary-500 font-semibold">2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
