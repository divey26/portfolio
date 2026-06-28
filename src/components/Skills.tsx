import React from 'react';

const skillsData = [
  { category: 'Languages', items: 'JavaScript, TypeScript, Java, C, C++, Kotlin, Python' },
  { category: 'Frontend', items: 'React.js, Next.js, Tailwind CSS, HTML5, CSS3' },
  { category: 'Backend', items: 'Node.js, Express.js, NestJS, Django, FastAPI, REST APIs' },
  { category: 'Databases', items: 'MongoDB, MySQL, PostgreSQL' },
  { category: 'Security', items: 'JWT, OAuth, bcrypt.js' },
  { category: 'DevOps & Cloud', items: 'Docker, GitHub Actions, Firebase, Google Cloud (Vertex AI)' },
  { category: 'QA & Testing', items: 'Manual Testing, API Testing, Postman, Unit Testing, Selenium, TestNG, JUnit' },
  { category: 'Tools', items: 'Git, Postman, Figma, VS Code, Eclipse' },
  { category: 'AI Tools & Usage', items: 'ChatGPT, Codex, Claude, Grok, Gemini' },
  { category: 'Concepts', items: 'Data Structures & Algorithms, OOP, SDLC, STLC, Agile/Scrum, Bug Tracking' }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-neutral-900 text-foreground">
      <div className="container mx-auto max-w-4xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-500">Technical Skills and Interests</h2>
        <div className="bg-neutral-800 p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.map((skill, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-lg font-semibold text-primary-400 mb-1">{skill.category}</span>
                <span className="text-neutral-300">{skill.items}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
