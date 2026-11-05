import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudies from "./components/CaseStudies";
import ScrollProgress from "./components/ScrollProgress";


export default function Home() {
  return (

   <> 
      <main className="flex min-h-screen flex-col bg-gradient-to-br from-[#010528] to-[#004B8E]">
      <ScrollProgress />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CaseStudies />
        <Contact />
      </div>
      <Footer />
    </main>
    </>
  );

}