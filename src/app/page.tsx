import Preloader from '../components/Preloader';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Preloader />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <About />
      <Contact />
    </>
  );
}
