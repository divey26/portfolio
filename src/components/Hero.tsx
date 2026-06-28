"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <section id="hero" className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 px-margin-mobile airy-grid">
        <motion.div
          className="relative z-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1 bg-surface-container-high rounded-full mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-text-secondary">System Ready: Full-Stack Architect</span>
          </div>
          <h1 className="hidden md:block text-[64px] font-semibold text-text-primary mb-6 leading-[1.1] tracking-tight">
            Engineering <span className="text-tesla-blue">Elegance</span> <br />through Complex Code.
          </h1>
          <h1 className="md:hidden text-display-lg-mobile text-text-primary mb-6">
            Engineering Elegance.
          </h1>
          <p className="text-body-lg text-text-secondary mb-12 max-w-2xl mx-auto">
            Building high-performance, scalable digital environments where machine learning meets meticulous user interface design.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#projects" className="bg-tesla-blue text-white font-semibold px-10 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-tesla-blue/20">
              Explore My Work
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a href="/resume.pdf" download className="border border-text-primary text-text-primary font-semibold px-10 py-4 rounded-full hover:bg-text-primary hover:text-white transition-all text-center">
              View Resume
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-12 left-0 w-full overflow-hidden whitespace-nowrap opacity-40 border-y border-border-light py-4 bg-white/50">
          <div className="inline-block animate-infinite-scroll font-bold text-[10px] tracking-[0.3em] text-text-secondary uppercase">
            REACT — NEXT.JS — TYPESCRIPT — TAILWIND CSS — NODE.JS — PYTHON — PYTORCH — DOCKER — AWS — KUBERNETES — GRAPHQL — RUST — GO — POSTGRESQL — MONGO — REDIS — REACT — NEXT.JS — TYPESCRIPT — TAILWIND CSS — REACT — NEXT.JS — TYPESCRIPT — TAILWIND CSS
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
              <h3 className="text-2xl font-semibold text-text-primary mb-4">System Architecture</h3>
              <p className="text-body-md text-text-secondary mb-8">Designing high-throughput microservices and resilient cloud infrastructures that scale with your users.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] font-bold tracking-tighter text-text-primary bg-surface-container-low px-3 py-1 rounded-full uppercase">Kubernetes</span>
                <span className="text-[10px] font-bold tracking-tighter text-text-primary bg-surface-container-low px-3 py-1 rounded-full uppercase">Terraform</span>
                <span className="text-[10px] font-bold tracking-tighter text-text-primary bg-surface-container-low px-3 py-1 rounded-full uppercase">GoLang</span>
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
            <p className="text-[11px] font-bold tracking-widest text-text-secondary uppercase">Sub-100ms Latency</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
