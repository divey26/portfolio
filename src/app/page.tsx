import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground dark:bg-black">

      <main className="flex-grow container mx-auto px-4 py-8 space-y-16">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
      </main>
    </div>
  );
}
