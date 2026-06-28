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
    company: 'DGateway Innovations (PVT) Ltd., Sri Lanka',
    role: 'Software Engineer Intern',
    period: 'Mar 2025 - Aug 2025',
    responsibilities: [
      'Completed a 6-month internship as a Software Engineer Intern, contributing to real-world production systems',
      'Collaborated with development teams to design, develop, and maintain full-stack web applications',
      'Gained hands-on experience in backend development, frontend integration, and role-based system design'
    ]
  },
  {
    company: 'Internship Project',
    role: 'Cloud-Laundry – Staff Dashboard & Invoice Management',
    period: '',
    responsibilities: [
      'Designed and developed a laundry management platform with staff dashboards and invoice tracking features',
      'Implemented backend services for order processing, invoice generation, and customer record management using JavaScript',
      'Built responsive front-end interfaces using HTML, CSS, and modern JavaScript frameworks',
      'Integrated role-based access control to differentiate staff and admin functionalities',
      'Streamlined workflows for order assignment, billing, and reporting to enhance system usability'
    ]
  }
];
