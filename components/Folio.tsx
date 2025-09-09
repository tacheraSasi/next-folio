"use client"

import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
import StarryBackground from "./StarryBackground";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Hero from "./Hero";
import Blog from "./Blog";
import SplashCursor from "@/components/SplashCursor";

export default function Folio() {
  return (
    <>
    <SplashCursor />
      <div className="bg-neutral-900 text-white min-h-screen">
        <StarryBackground />
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Blog/>
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
