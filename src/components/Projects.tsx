import React from 'react';

const projects = [
  {
    title: 'Virtual-Try-on – AI Clothing Simulation',
    category: 'Computer Vision Application',
    description: [
      'Designed and developed a virtual try-on system using Python and OpenCV to simulate clothing fit',
      'Implemented deep learning models with TensorFlow for image segmentation and garment overlay',
      'Enhanced user experience by integrating a responsive UI for uploading and previewing outfits',
      'Applied data preprocessing and augmentation techniques to improve model accuracy'
    ]
  },
  {
    title: 'SaniTrack - Sanitation Monitoring and Reporting System',
    category: 'Full-Stack Web Application',
    description: [
      'Developed a sanitation monitoring and issue reporting system using React, Node.js, Express.js, and MongoDB',
      'Implemented role-based access for Admin, Inspector, and Community users',
      'Built modules to manage villages, sanitation facilities, inspections, users, and reported issues',
      'Developed inspection scoring functionality to classify facility conditions as good, needing attention, or critical',
      'Enabled community users and inspectors to report sanitation issues and track issue status',
      'Built admin dashboard features to monitor facility counts, inspections, pending issues, and critical sanitation cases'
    ],
    techStack: 'React, Vite, Tailwind CSS, Node.js, Express.js, MongoDB, Mongoose, JWT, and Axios'
  },
  {
    title: 'DeepLearning Labs – Neural Network Experiments',
    category: 'Machine Learning Research Projects',
    description: [
      'Built and trained deep learning models for image classification and recognition tasks',
      'Implemented CNNs and RNNs using PyTorch and TensorFlow frameworks',
      'Conducted experiments with hyperparameter tuning and optimization techniques',
      'Documented findings in Jupyter Notebooks for reproducibility and academic presentation'
    ]
  },
  {
    title: 'Robotics Maze-Solving Simulation',
    category: 'Algorithmic Simulation Project',
    description: [
      'Created a simulation environment for testing maze-solving algorithms',
      'Implemented core logic in C++ with Python scripting for flexibility',
      'Explored pathfinding strategies such as DFS, BFS, and A* in a robotics-style environment',
      'Practiced integration with simulation frameworks and algorithm optimization'
    ]
  },
  {
    title: 'Splash – Car Game Application',
    category: 'Kotlin, Android SDK',
    description: [
      'Designed a mobile car game with interactive graphics and responsive user controls',
      'Implemented game mechanics including collision detection and scoring systems',
      'Applied Android development fundamentals to create an engaging user experience',
      'Demonstrated creativity and mobile game development skills through custom UI design'
    ]
  },
  {
    title: 'Career Market Trend & Merged Skill Analysis Module',
    category: 'Research Project',
    description: [
      'Developed the All Trend and Merged Skill module for a career market intelligence platform using Next.js, React, and TypeScript',
      'Implemented skill trend visualization to identify rising and declining job market skills',
      'Used the Prophet time-series forecasting model to predict skill demand trends for the next 30 days',
      'Applied skill merging and grouping techniques to consolidate related market skills',
      'Supported career planning through trend analysis, skill-demand insights, and skill-gap identification'
    ],
    techStack: 'Python, Pandas, NumPy, Prophet, FastAPI, React, Next.js, and TypeScript'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-neutral-900 text-foreground">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary-500">Personal Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-neutral-800 p-6 rounded-lg shadow-lg flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-primary-400">{project.title}</h3>
              <span className="text-sm font-medium text-neutral-400 mb-4">{project.category}</span>
              <ul className="list-disc list-inside space-y-2 text-neutral-300 flex-grow">
                {project.description.map((desc, i) => (
                  <li key={i} className="text-sm">{desc}</li>
                ))}
              </ul>
              {project.techStack && (
                <div className="mt-4 pt-4 border-t border-neutral-700">
                  <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">Tech Stack:</span>
                  <p className="text-sm text-neutral-400 mt-1">{project.techStack}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
