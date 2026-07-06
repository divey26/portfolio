"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

type Project = {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
  demo?: string;
  problem?: string;
  data?: string;
  model?: string;
  metrics?: string;
};

const projects: Project[] = [
  {
    title: 'Career Market Trend Analysis',
    category: 'Machine Learning',
    description: 'Developed the All Trend and Merged Skill module for a career market intelligence platform. Used the Prophet time-series forecasting model to predict skill demand trends.',
    techStack: ['Python', 'Prophet', 'FastAPI', 'React', 'Next.js'],
    image: '/qwerty.png',
    link: 'https://mentora-tawny.vercel.app/',
    github: 'https://github.com/divey26', // Placeholder
    problem: 'To accurately predict future demand for specific technical skills in the software engineering job market.',
    data: 'Historical job posting data containing skill frequencies, preprocessed to remove anomalies and handle missing dates.',
    model: 'Prophet time-series forecasting, chosen for its robustness to missing data and shifts in trend.',
    metrics: 'Achieved robust forecasting accuracy (metrics placeholder: e.g., low MAPE).'
  },
  {
    title: 'Virtual-Try-on – AI Clothing Simulation',
    category: 'Computer Vision',
    description: 'Designed and developed a virtual try-on system using Python and OpenCV to simulate clothing fit. Implemented deep learning models with TensorFlow for image segmentation and garment overlay.',
    techStack: ['Python', 'OpenCV', 'TensorFlow', 'Deep Learning'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2WY3YMFrb46F2ZX4pyiztPaJ2ML8hk3U5Sp1GXPzqN7BrG7qQS2YMf4FVcn0atu2BG3hFJr0EezRO89ZQWaXXYWLIXXcIu2W9HnoL9beVmlivYj_RqVjLwlv1XZTaz545D3627Sf46vdrO7i96ts2WML1ZSamZOQ1yQb1I_V4Mo0efAkjZrGdEnf-5uMHNAjGQTn-z676ywuQYn4kaaftJDZ8GJrEJiuZJYCbNEmqNy-VxGWpF69ZEaHKSFWjgROaGrpA0xVnNXw',
    link: 'https://mentora-tawny.vercel.app/',
    github: 'https://github.com/divey26', // Placeholder
    demo: 'https://mentora-tawny.vercel.app/', // Placeholder
    problem: 'To provide a realistic and automated way for users to visualize how clothing items would fit on their body.',
    data: 'Images of users and clothing items, preprocessed for background removal and pose estimation.',
    model: 'Image segmentation and garment overlay using TensorFlow and OpenCV.',
    metrics: 'Visually accurate garment placement in over 90% of test cases.'
  },
  {
    title: 'CV Parsing & Resume Analysis',
    category: 'Machine Learning / NLP',
    description: 'Research work involving structured machine learning and NLP-adjacent parsing to extract actionable insights from unstructured resume data.',
    techStack: ['Python', 'LightGBM', 'NLP', 'Pandas'],
    image: '/qwerty.png', // Placeholder image
    github: 'https://github.com/divey26', // Placeholder
    problem: 'To automatically extract structured data (skills, experience) from highly variable and unstructured resume PDFs.',
    data: 'Dataset of 1000+ anonymized resumes in PDF format, processed using OCR and text extraction libraries.',
    model: 'LightGBM classifier used alongside NLP techniques to categorize extracted text chunks into structured fields.',
    metrics: 'Achieved high precision and recall on skill extraction (placeholder for actual metrics).'
  },
  {
    title: 'StudyFlow – AI-Powered Learning Paths',
    category: 'AI / Full-Stack',
    description: 'Built a platform that converts raw notes, links, and videos into interactive study maps. Features an interactive canvas with smart auto-layout, AI-driven concept extraction using Gemini, and exportable learning roadmaps.',
    techStack: ['React', 'NestJS', 'PostgreSQL', 'Gemini AI', 'React Flow'],
    image: '/mind_map.png',
    link: 'https://study-flow-ten-gamma.vercel.app/',
    problem: 'To streamline the learning process by automatically generating structured, visually intuitive mind maps from disorganized study materials.',
    data: 'User-provided text, URLs, and video transcripts.',
    model: 'Leveraged the Gemini API for natural language understanding and concept relationship extraction.',
    metrics: 'Generates structured mind maps in under 5 seconds on average.'
  },
  {
    title: 'ArchViz – Software Architecture Visualizer',
    category: 'Full-Stack',
    description: 'Built a full-stack tool that visualizes backend architecture from uploaded project ZIP files. Features static code analysis for FastAPI and Spring Boot projects with an interactive architecture diagram.',
    techStack: ['React', 'Vite', 'FastAPI', 'React Flow'],
    image: '/visual.jpeg',
    link: 'https://software-architecture-visualizer-one.vercel.app/'
  },
  {
    title: 'SaniTrack - Sanitation Monitoring',
    category: 'Full-Stack',
    description: 'Developed a sanitation monitoring and issue reporting system with role-based access for Admin, Inspector, and Community users.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhjq0C_F8bmeSQVZ-wOx3-5dzdZPRuRcMn4DLVRS_WxjTksNutHt76d3DhfMuL4ILKeAYpclrrRlIuUMvQIPIE80FZGx_tQnu_mr6Vone_NtMlPjfW6RzWkQtWjmfJhAEZp1tjAS1EnuPxsxQdOsgfSAxqa11UpAjexiOYg99ykifkZchE1Y1DaKAl9WBvz1L3dYyY7bx54SD_ksAiS61vS--GswjYHQ7I9e7gCgqtPHL1VUaSSavJQlFnuK1NBNvOttuOyGwYtWw',
    link: 'https://mentora-tawny.vercel.app/'
  }
];

export default function Projects() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="projects" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div
        className="mb-gutter"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-display-lg-mobile md:text-display-lg text-text-primary mb-4">
          Selected <span className="text-tesla-blue">Works</span>
        </h2>
        <p className="text-body-lg text-text-secondary max-w-2xl">
          A portfolio of engineered solutions, cloud architecture, and computational experiments designed with precision and industrial rigor.
        </p>
      </motion.div>

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-16">
        <button className="px-6 py-2 rounded bg-primary text-on-primary text-xs font-bold tracking-widest uppercase transition-all">
          ALL PROJECTS
        </button>
        <button className="px-6 py-2 rounded bg-surface-container-low text-text-secondary hover:text-text-primary text-xs font-bold tracking-widest uppercase transition-all border border-transparent hover:border-outline">
          MACHINE LEARNING
        </button>
        <button className="px-6 py-2 rounded bg-surface-container-low text-text-secondary hover:text-text-primary text-xs font-bold tracking-widest uppercase transition-all border border-transparent hover:border-outline">
          FULL STACK
        </button>
        <button className="px-6 py-2 rounded bg-surface-container-low text-text-secondary hover:text-text-primary text-xs font-bold tracking-widest uppercase transition-all border border-transparent hover:border-outline">
          RESEARCH
        </button>
      </div>

      {/* Project Grid */}
      <motion.div
        className="flex flex-col gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="group flex flex-col lg:flex-row bg-surface-pure border border-border-light overflow-hidden project-card-hover"
          >
            <div className="relative w-full lg:w-2/5 h-64 lg:h-auto overflow-hidden bg-surface-container shrink-0">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src={project.image}
                alt={project.title}
              />
              <div className="absolute top-4 right-4 z-20">
                <span className="bg-surface-pure/90 backdrop-blur-sm text-text-primary px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-border-light">
                  {project.category}
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start gap-4 mb-3">
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-tesla-blue transition-colors">{project.title}</h3>
                <div className="flex gap-2 shrink-0">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-sm">code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </a>
                  )}
                  {project.link && !project.demo && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  )}
                </div>
              </div>
              
              <p className="text-body-md text-text-secondary mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {(project.problem || project.data || project.model || project.metrics) && (
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  {project.problem && (
                    <div className="bg-surface-container-lowest p-4 rounded border border-border-light">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Problem</span>
                      <span className="text-text-primary">{project.problem}</span>
                    </div>
                  )}
                  {project.data && (
                    <div className="bg-surface-container-lowest p-4 rounded border border-border-light">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Data</span>
                      <span className="text-text-primary">{project.data}</span>
                    </div>
                  )}
                  {project.model && (
                    <div className="bg-surface-container-lowest p-4 rounded border border-border-light">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Model / Approach</span>
                      <span className="text-text-primary">{project.model}</span>
                    </div>
                  )}
                  {project.metrics && (
                    <div className="bg-surface-container-lowest p-4 rounded border border-border-light">
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-text-secondary mb-1">Metrics</span>
                      <span className="text-text-primary">{project.metrics}</span>
                    </div>
                  )}
                </div>
              )}
              
              <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-border-light">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="bg-surface-container text-text-primary px-2 py-1 rounded text-[10px] font-bold tracking-tighter uppercase">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
