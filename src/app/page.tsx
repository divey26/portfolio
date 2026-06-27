
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground dark:bg-black">

      <main className="flex-grow container mx-auto px-4 py-8 space-y-16">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        {/* Future sections: Projects, Skills, Contact */}
      </main>
    </div>
  );
}
