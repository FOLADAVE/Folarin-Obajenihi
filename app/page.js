import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import Head from "next/head";
import Footer from "./components/Footer";


export default function Home() {
  return (

   <> 
   <Head>

        <link rel="icon" href="public\images\assets\location-icon.png" /> {/* Add favicon */}
      </Head>
      <main className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Contact />
      </div>
      <Footer />
    </main>
    </>
  );

}
