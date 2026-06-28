import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="mb-12">
        <h2 className="text-headline-md text-text-primary mb-2 font-semibold">Professional Experience</h2>
        <div className="h-1 w-12 bg-tesla-blue"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {experiences.map((exp, idx) => (
          <div key={idx} className="bg-surface-pure p-8 border border-border-light flex flex-col group transition-shadow hover:shadow-lg hover:border-black">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary">{exp.role}</h3>
                <span className="text-sm font-semibold text-tesla-blue">{exp.company}</span>
              </div>
              {exp.period && <span className="text-[10px] font-bold tracking-widest uppercase text-text-secondary bg-surface-container px-3 py-1 rounded">{exp.period}</span>}
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-text-secondary mt-4">
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
