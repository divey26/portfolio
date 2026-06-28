import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-bright border-y border-border-light my-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-headline-md font-bold text-text-primary mb-8 tracking-tight">The Mission</h2>
        
        <p className="text-body-lg text-text-secondary leading-relaxed mb-16 max-w-3xl">
          In an era of digital noise, I advocate for <span className="font-semibold text-text-primary">Precision Minimalism</span>. My work bridges the gap between raw backend capability and intuitive human interaction. I don&apos;t just write code; I craft digital artifacts that stand at the intersection of technical discipline and aesthetic purpose.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-border-light pt-12">
          <div className="flex flex-col items-center">
            <span className="text-display-lg text-text-primary font-bold mb-2">4+</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Years in Tech</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-display-lg text-text-primary font-bold mb-2">20+</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Projects Built</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-display-lg text-tesla-blue font-bold mb-2">3</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Core Disciplines</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-display-lg text-text-primary font-bold mb-2">100%</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Commitment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
