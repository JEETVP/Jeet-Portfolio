import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutPreview from '@/components/AboutPreview';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal">
      <div className="relative isolate overflow-hidden bg-paper before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,_rgba(90,31,43,0.12),_transparent_30%),_radial-gradient(circle_at_bottom_right,_rgba(42,41,38,0.06),_transparent_26%)] before:opacity-90">
        <div className="relative mx-auto max-w-[1250px] px-5 py-5 lg:px-8">
          <Navbar />
          <section className="mt-8 space-y-12 lg:mt-10 lg:space-y-16">
            <Hero />
            <AboutPreview />
            <Projects />
            <Skills />
            <Contact />
          </section>
        </div>
      </div>
    </main>
  );
}
