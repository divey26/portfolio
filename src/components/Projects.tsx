"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

const projects = [
  {
    title: 'Virtual-Try-on – AI Clothing Simulation',
    category: 'Computer Vision',
    description: 'Designed and developed a virtual try-on system using Python and OpenCV to simulate clothing fit. Implemented deep learning models with TensorFlow for image segmentation and garment overlay.',
    techStack: ['Python', 'OpenCV', 'TensorFlow'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2WY3YMFrb46F2ZX4pyiztPaJ2ML8hk3U5Sp1GXPzqN7BrG7qQS2YMf4FVcn0atu2BG3hFJr0EezRO89ZQWaXXYWLIXXcIu2W9HnoL9beVmlivYj_RqVjLwlv1XZTaz545D3627Sf46vdrO7i96ts2WML1ZSamZOQ1yQb1I_V4Mo0efAkjZrGdEnf-5uMHNAjGQTn-z676ywuQYn4kaaftJDZ8GJrEJiuZJYCbNEmqNy-VxGWpF69ZEaHKSFWjgROaGrpA0xVnNXw'
  },
  {
    title: 'SaniTrack - Sanitation Monitoring',
    category: 'Full-Stack',
    description: 'Developed a sanitation monitoring and issue reporting system with role-based access for Admin, Inspector, and Community users. Built modules to manage villages, facilities, and reported issues.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhjq0C_F8bmeSQVZ-wOx3-5dzdZPRuRcMn4DLVRS_WxjTksNutHt76d3DhfMuL4ILKeAYpclrrRlIuUMvQIPIE80FZGx_tQnu_mr6Vone_NtMlPjfW6RzWkQtWjmfJhAEZp1tjAS1EnuPxsxQdOsgfSAxqa11UpAjexiOYg99ykifkZchE1Y1DaKAl9WBvz1L3dYyY7bx54SD_ksAiS61vS--GswjYHQ7I9e7gCgqtPHL1VUaSSavJQlFnuK1NBNvOttuOyGwYtWw'
  },
  {
    title: 'DeepLearning Labs',
    category: 'Machine Learning',
    description: 'Built and trained deep learning models for image classification and recognition tasks. Implemented CNNs and RNNs using PyTorch and TensorFlow frameworks.',
    techStack: ['PyTorch', 'TensorFlow', 'Python'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ly2DLBmuEFhQvY8Ph72vFDXeKYG8yjX3V_W7cGV-jAkDIG7BzJq1VClFnNpyK9cZUlHEZahBxYsXiGwQQ_JA0vOOGXTZ7ZmPoaB6X7r3jTPhqMePhmU2sWuhzmYTwfIxE1F6dwElSteCOLaAJiRrq5b8GJ_83gJlh8T8lbWHizg92w2aQ9OxxA2zWw-kfOkMQAfWIrkZr-l9Uo5UQfddc6fHGGmF_ZwP6y2napRK2w7r5OTZRet-9txmasT5_mGlfQbIW5qKc50'
  },
  {
    title: 'Robotics Maze-Solving',
    category: 'Simulation',
    description: 'Created a simulation environment for testing maze-solving algorithms. Explored pathfinding strategies such as DFS, BFS, and A* in a robotics-style environment.',
    techStack: ['C++', 'Python', 'Algorithms'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMb9z18G5vz8qABKXa4qV15ywaFYCoFYNkuCR8cA2keFpA2Ho8bn1r3ohlJ3xIT5uD2kyQZTzMgMccgmYYxhModC4IgezVt_q7NuU46kKkfe8gRdoZnXcyBRvcyb89DytY_03zxJIIjddfRxCZKyKYpN8i5wgzaQxm_bs9CYVpDaG2LcABnjo0g2LZWbv7m3Sn2Zzi_hsBM9U9OM8gIZQ4N72uV1T_jkNOlVm6TcefdwVz5iD0HyjpPIerUuRLhSRGTKjoPJjZfPY'
  },
  {
    title: 'Splash – Car Game',
    category: 'Mobile Dev',
    description: 'Designed a mobile car game with interactive graphics and responsive user controls. Implemented game mechanics including collision detection and scoring systems.',
    techStack: ['Kotlin', 'Android SDK'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsQmLC-xr8jwSQoqwl-EyLaTJqIcM2-tLrh0YnScsurTfXWdOq870Ge0KdQehmK13ly4R6Xavo8zrEb9oJh5X6b8alH01c0BIST6LNHKKfBMCuRogDz4yiiG-RenvvdN_8tbVOX6quO0QMvZyji6mAMQFxxp1IRdDjbUxqfM3G4VEAefRQnSJtUP0Fqd3CM6qT_ctHCsd_x9Xl798Qh4aom_m3BbSu95kl5Zkp0MaUH7JLHDmUA1apPg0eonp9u_jqn2K0U8W8mkQ'
  },
  {
    title: 'Career Market Trend Analysis',
    category: 'Research',
    description: 'Developed the All Trend and Merged Skill module for a career market intelligence platform. Used the Prophet time-series forecasting model to predict skill demand trends.',
    techStack: ['React', 'Next.js', 'FastAPI', 'Prophet'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2WY3YMFrb46F2ZX4pyiztPaJ2ML8hk3U5Sp1GXPzqN7BrG7qQS2YMf4FVcn0atu2BG3hFJr0EezRO89ZQWaXXYWLIXXcIu2W9HnoL9beVmlivYj_RqVjLwlv1XZTaz545D3627Sf46vdrO7i96ts2WML1ZSamZOQ1yQb1I_V4Mo0efAkjZrGdEnf-5uMHNAjGQTn-z676ywuQYn4kaaftJDZ8GJrEJiuZJYCbNEmqNy-VxGWpF69ZEaHKSFWjgROaGrpA0xVnNXw'
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, idx) => (
          <motion.div 
            key={idx} 
            variants={itemVariants}
            className="group flex flex-col bg-surface-pure border border-border-light overflow-hidden project-card-hover cursor-pointer"
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <div className="relative h-64 overflow-hidden bg-surface-container">
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
              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-tesla-blue transition-colors">{project.title}</h3>
              <p className="text-sm text-text-secondary mb-8 line-clamp-3 leading-relaxed">
                {project.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
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
