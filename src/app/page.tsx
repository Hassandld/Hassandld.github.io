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
    <main className="min-h-screen bg-gray-900">
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
