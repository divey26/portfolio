import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import { generateDefaultSeo } from 'next-seo/pages';
import seoConfig from '@/config/seo';

export const metadata: Metadata = {
  title: 'Divendra Paramendran – Full Stack Developer',
  description: 'Portfolio of Divendra Paramendran, a Full Stack Developer specialized in scalable backend systems and AI applications.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        {generateDefaultSeo(seoConfig)}
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="py-4 text-center text-sm text-muted">
          © {new Date().getFullYear()} Divendra Paramendran. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
