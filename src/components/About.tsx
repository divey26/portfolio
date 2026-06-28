"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const statVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-bright border-y border-border-light my-12">
      <motion.div 
        className="max-w-4xl mx-auto text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-headline-md font-bold text-text-primary mb-8 tracking-tight">The Mission</h2>
        
        <p className="text-body-lg text-text-secondary leading-relaxed mb-16 max-w-3xl">
          In an era of digital noise, I advocate for <span className="font-semibold text-text-primary">Precision Minimalism</span>. My work bridges the gap between raw backend capability and intuitive human interaction. I don&apos;t just write code; I craft digital artifacts that stand at the intersection of technical discipline and aesthetic purpose.
        </p>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full border-t border-border-light pt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={statVariants} className="flex flex-col items-center">
            <span className="text-display-lg text-text-primary font-bold mb-2">4+</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Years in Tech</span>
          </motion.div>
          <motion.div variants={statVariants} className="flex flex-col items-center">
            <span className="text-display-lg text-text-primary font-bold mb-2">20+</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Projects Built</span>
          </motion.div>
          <motion.div variants={statVariants} className="flex flex-col items-center">
            <span className="text-display-lg text-tesla-blue font-bold mb-2">3</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Core Disciplines</span>
          </motion.div>
          <motion.div variants={statVariants} className="flex flex-col items-center">
            <span className="text-display-lg text-text-primary font-bold mb-2">100%</span>
            <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">Commitment</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
