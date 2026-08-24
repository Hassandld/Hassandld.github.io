import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Certifications from "@/components/Certifications";
import Awards from "@/components/Awards";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden flex flex-col bg-transparent">
      <Hero />
      <About />
      <Experience />
      <FeaturedProject />
      <Certifications />
      <Awards />
      <Skills />
      <Contact />
    </main>
  );
}
