"use client";
import { experiences } from '../data/experience';
import { motion, Variants } from 'framer-motion';

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-headline-md text-text-primary mb-2 font-semibold">Professional Experience</h2>
        <div className="h-1 w-12 bg-tesla-blue"></div>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="bg-surface-pure p-8 border border-border-light flex flex-col group transition-shadow hover:shadow-lg hover:border-black"
          >
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
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
