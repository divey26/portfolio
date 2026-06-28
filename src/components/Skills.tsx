import React from 'react';

const skillBlocks = [
  {
    title: 'Backend & System Architecture',
    description: 'Building resilient, scalable cloud infrastructure and high-throughput APIs for global availability.',
    tags: ['Node.js', 'Express', 'NestJS', 'Django', 'FastAPI', 'Java', 'C++', 'Go']
  },
  {
    title: 'Frontend Engineering',
    description: 'Writing clean, maintainable, and type-safe code across the stack with a focus on modern paradigms and minimalist UI.',
    tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Data & Machine Learning',
    description: 'Designing and implementing neural architectures and statistical models for complex predictive tasks.',
    tags: ['Python', 'PyTorch', 'TensorFlow', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'DevOps & Tooling',
    description: 'Automating deployments and ensuring reliable continuous integration pipelines for robust software delivery.',
    tags: ['Docker', 'GitHub Actions', 'Google Cloud', 'Git', 'Linux']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-12">
        <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-text-primary mb-6 leading-tight max-w-2xl">
          Technical <span className="text-tesla-blue">Mastery</span>
        </h2>
        <p className="font-body-lg text-body-lg text-text-secondary max-w-2xl">
          Architecting high-performance systems and deploying production-grade intelligence. Bridging the gap between conceptual complexity and operational excellence.
        </p>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {skillBlocks.map((block, idx) => (
            <div key={idx} className="skill-block bg-surface-container-lowest p-8 rounded-lg flex flex-col h-full">
              <h3 className="font-headline-md text-headline-md text-text-primary mb-3">{block.title}</h3>
              <p className="font-body-md text-body-md text-text-secondary mb-8 flex-grow">{block.description}</p>
              <div className="flex flex-wrap gap-2">
                {block.tags.map((tag, i) => (
                  <span key={i} className="text-label-sm font-bold border border-border-light px-3 py-1 rounded-full uppercase tracking-tighter text-text-secondary">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="border-t border-black pt-8">
          <h2 className="font-headline-md text-headline-md text-text-primary mb-4 uppercase tracking-widest text-sm">Beyond the Stack</h2>
          <p className="font-body-md text-body-md text-text-secondary leading-relaxed">
            While tools and frameworks evolve, the fundamental principles of engineering—correctness, scalability, and performance—remain constant. My approach integrates deep technical specialization with a broad understanding of the business logic, ensuring that every line of code serves a purpose.
          </p>
        </div>
      </div>
    </section>
  );
}
