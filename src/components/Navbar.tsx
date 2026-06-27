"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-neutral-800"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link href="#hero" className="text-2xl font-bold text-primary">
          Divendra
        </Link>
        <ul className="flex space-x-4 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3 text-foreground">
          <Link href="mailto:divendraparamendran226@gmail.com" aria-label="Email">
            <FiMail className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://github.com/divey26" target="_blank" aria-label="GitHub">
            <FiGithub className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/diven226" target="_blank" aria-label="LinkedIn">
            <FiLinkedin className="w-5 h-5 hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
