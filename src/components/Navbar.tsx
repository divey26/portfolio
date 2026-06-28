"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-0 w-full z-50 glass-header border-b border-border-light"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-unit max-w-container-max mx-auto h-20">
        <Link href="#hero" className="font-display-lg text-2xl font-bold text-text-primary tracking-tighter">
          CREATIVE.LAB
        </Link>
        <div className="hidden md:flex items-center space-x-gutter">
          <Link href="#projects" className="text-sm text-text-primary font-bold border-b-2 border-primary pb-1">
            Work
          </Link>
          <Link href="#skills" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Skills
          </Link>
          <Link href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            About
          </Link>
          <Link href="mailto:divendraparamendran226@gmail.com" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
            Contact
          </Link>
          <a href="/resume.pdf" download className="bg-primary text-on-primary px-6 py-2 rounded text-xs font-bold hover:bg-opacity-90 transition-all uppercase tracking-widest flex items-center justify-center border border-primary">
            Resume
          </a>
        </div>
        <button className="md:hidden text-text-primary">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </nav>
    </motion.header>
  );
}
