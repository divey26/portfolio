import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { generateDefaultSeo } from 'next-seo/pages';
import seoConfig from '@/config/seo';
import { Hanken_Grotesk } from 'next/font/google';

const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken' });

export const metadata: Metadata = {
  title: 'Divendra Paramendran | Portfolio',
  description: 'Portfolio of Divendra Paramendran, a Full Stack Developer specialized in scalable backend systems and AI applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`light ${hankenGrotesk.variable}`}>
      <head>
        {generateDefaultSeo(seoConfig)}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-text-primary antialiased min-h-screen font-sans selection:bg-tesla-blue selection:text-white flex flex-col custom-scrollbar overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-white w-full py-16 border-t border-border-light">
          <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto gap-8">
            <div className="flex flex-col items-center md:items-start">
              <div className="text-[20px] font-bold text-text-primary mb-2">CREATIVE.LAB</div>
              <p className="text-sm text-text-secondary text-center md:text-left max-w-sm">
                © {new Date().getFullYear()} Industrial Precision Portfolio. Built for high-end performance and clarity.
              </p>
            </div>
            <div className="flex space-x-10">
              <a className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://www.linkedin.com/in/diven226">LinkedIn</a>
              <a className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="https://github.com/divey26">GitHub</a>
              <a className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="mailto:divendraparamendran226@gmail.com">Contact</a>
              <a className="text-text-secondary hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest" href="/resume.pdf">Resume</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
