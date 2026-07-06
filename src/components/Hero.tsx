"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center pt-24 px-margin-mobile md:px-margin-desktop airy-grid overflow-hidden">
        <motion.div
          className="relative z-10 w-full max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_420px] items-center gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-surface-container-high rounded-full mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">Open to AI/ML Engineering Roles</span>
            </div>
            <h1 className="text-display-lg-mobile md:text-[64px] font-semibold text-text-primary mb-6 leading-[1.05] tracking-tight">
              Software Engineer <span className="text-tesla-blue">Specializing in Applied ML</span>
            </h1>
            <p className="text-body-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Architecting end-to-end Machine Learning systems, from robust data pipelines and model training to scalable production deployments.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 max-w-3xl mx-auto lg:mx-0">
              <a href="/resume.pdf" download className="bg-tesla-blue text-white font-semibold px-6 py-4 rounded flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-tesla-blue/20">
                <span className="material-symbols-outlined text-lg">download</span>
                Download Resume
              </a>
              <Link href="#projects" className="border border-text-primary text-text-primary font-semibold px-6 py-4 rounded hover:bg-text-primary hover:text-white transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">work</span>
                View Projects
              </Link>
              <a href="https://github.com/divey26" target="_blank" rel="noopener noreferrer" className="border border-border-light bg-white text-text-primary font-semibold px-6 py-4 rounded hover:border-text-primary transition-all flex items-center justify-center gap-2">
                <FaGithub aria-hidden="true" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/diven226" target="_blank" rel="noopener noreferrer" className="border border-border-light bg-white text-text-primary font-semibold px-6 py-4 rounded hover:border-text-primary transition-all flex items-center justify-center gap-2">
                <FaLinkedin aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[360px] lg:max-w-none">
            <div className="absolute -inset-4 bg-white/70 border border-border-light rounded-xl"></div>
            <div className="relative bg-surface-pure border border-border-light rounded-xl p-4 shadow-xl shadow-gray-200/60">
              <Image
                src="/image.jpg"
                alt="Professional headshot of Divendra Paramendran"
                width={2400}
                height={2400}
                unoptimized
                className="aspect-square w-full rounded-lg object-cover bg-surface-container"
              />
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-text-primary">Divendra Paramendran</p>
                  <p className="text-xs text-text-secondary">AI/ML Engineer</p>
                </div>
                <div className="h-10 w-10 rounded bg-tesla-blue text-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl">verified</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-0 w-full overflow-hidden whitespace-nowrap opacity-40 border-y border-border-light py-4 bg-white/50">
          <div className="inline-block animate-infinite-scroll font-bold text-[10px] tracking-[0.3em] text-text-secondary uppercase">
            PYTHON — PYTORCH — TENSORFLOW — OPENCV — FASTAPI — PROPHET — LIGHTGBM — REACT — NEXT.JS — AWS — DOCKER — POSTGRESQL — PYTHON — PYTORCH — TENSORFLOW — OPENCV — FASTAPI — PROPHET
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <h2 className="text-headline-md text-text-primary mb-2 font-semibold">Core Expertise</h2>
          <div className="h-1 w-12 bg-tesla-blue"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter md:grid-rows-2">
          {/* Large Feature */}
          <div className="md:col-span-2 md:row-span-2 bg-white p-10 rounded-xl border border-border-light flex flex-col justify-end group transition-shadow hover:shadow-xl hover:shadow-gray-200/50">
            <div className="mb-auto">
              <span className="material-symbols-outlined text-tesla-blue text-5xl mb-6">terminal</span>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">ML Infrastructure & Deployment</h3>
              <p className="text-body-md text-text-secondary mb-8">Designing high-throughput inference APIs and resilient infrastructure to deploy ML models at scale.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold tracking-tighter text-text-primary bg-surface-container-low px-3 py-1 rounded-full uppercase">Docker</span>
                <span className="text-[10px] font-bold tracking-tighter text-text-primary bg-surface-container-low px-3 py-1 rounded-full uppercase">FastAPI</span>
                <span className="text-[10px] font-bold tracking-tighter text-text-primary bg-surface-container-low px-3 py-1 rounded-full uppercase">AWS</span>
              </div>
            </div>
          </div>
          {/* Medium Feature */}
          <div className="md:col-span-2 bg-white p-10 rounded-xl border border-border-light flex items-center gap-8 group transition-shadow hover:shadow-lg">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-text-primary text-3xl">psychology</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">ML Integration</h3>
              <p className="text-body-md text-text-secondary">Deploying production-grade machine learning models into web ecosystems seamlessly.</p>
            </div>
          </div>
          {/* Small Feature 1 */}
          <div className="bg-white p-10 rounded-xl border border-border-light flex flex-col justify-center items-center text-center group transition-shadow hover:shadow-lg">
            <span className="material-symbols-outlined text-text-primary text-3xl mb-4">palette</span>
            <h3 className="font-semibold text-text-primary mb-1">UI / UX</h3>
            <p className="text-[11px] font-bold tracking-widest text-text-secondary uppercase">Industrial Minimalist</p>
          </div>
          {/* Small Feature 2 */}
          <div className="bg-white p-10 rounded-xl border border-border-light flex flex-col justify-center items-center text-center group transition-shadow hover:shadow-lg">
            <span className="material-symbols-outlined text-text-primary text-3xl mb-4">speed</span>
            <h3 className="font-semibold text-text-primary mb-1">Performance</h3>
            <p className="text-[11px] font-bold tracking-widest text-text-secondary uppercase">Optimized Inference</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
