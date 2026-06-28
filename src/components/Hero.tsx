"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaFilePdf, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { fadeInUp, fadeIn } from '@/utils/motionVariants';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-hero-gradient bg-cover bg-center" style={{ backgroundImage: "url('/hero_background.png')" }}>
      <motion.div className="text-center" variants={fadeInUp} initial="hidden" animate="visible">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-500 mb-4">Divendra Paramendran</h1>
        <h2 className="text-xl md:text-2xl text-foreground mb-6">
          Software Engineer Intern | BSc in Information Technology Undergraduate
        </h2>
        <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
          Passionate about full-stack web development, machine learning, and building AI-driven scalable applications.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href="#projects" scroll={false} className="px-6 py-3 bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-600 transition">
            View Projects
          </Link>
          <a href="/resume.pdf" download className="px-6 py-3 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition">
            Download Resume
          </a>
          <a href="https://github.com/divey26" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-primary-500 text-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition flex items-center justify-center">
            <FaGithub className="mr-2" /> GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
