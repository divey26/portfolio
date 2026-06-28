import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-neutral-900 text-foreground">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-500">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-neutral-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-primary-400">{exp.role}</h3>
              <div className="flex justify-between items-center mt-2 mb-4">
                <span className="text-lg font-medium text-foreground">{exp.company}</span>
                {exp.period && <span className="text-sm text-neutral-400">{exp.period}</span>}
              </div>
              <ul className="list-disc list-inside space-y-2 text-neutral-300">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
