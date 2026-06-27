// src/data/experience.ts
// Experience data extracted from CV
export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: 'DGateway Innovations',
    role: 'Backend Engineer Intern',
    period: 'Mar 2025 - Aug 2025',
    responsibilities: [
      'Developed scalable REST APIs using NestJS and PostgreSQL',
      'Implemented CI/CD pipelines with Docker and GitHub Actions',
      'Optimized database queries, reducing latency by 30%'
    ]
  },
  {
    company: 'StudyFlow',
    role: 'Full Stack Developer',
    period: 'Jan 2024 - Feb 2025',
    responsibilities: [
      'Designed and developed a SaaS platform for online learning',
      'Integrated Stripe payments and real-time analytics',
      'Used React, Next.js, and Tailwind for responsive UI'
    ]
  }
];
