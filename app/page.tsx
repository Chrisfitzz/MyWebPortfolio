"use client";

import { useRef } from "react";
import Header from "../components/Header";
import GalaxyParticles from "../components/GalaxyParticles";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div ref={homeRef} className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center bg-[var(--bg-main)] scroll-snap-start">
        <GalaxyParticles />
        <div className="relative z-10">
          <h1 className="text-6xl font-bold mb-4 text-[var(--cream)] tracking-tight">
            Chris Fitzgerald
          </h1>
          <p className="text-xl mb-8 text-[var(--muted)] max-w-2xl">
            Frontend Engineer building modern web experiences.
          </p>

          <button
            onClick={() => scrollToSection(aboutRef)}
            className="px-8 py-3 bg-[var(--accent)] text-white font-medium hover:bg-black transition"
          >
            GO!
          </button>
        </div>
      </section>

      {/* Sticky Header */}
      <Header
        scrollTo={{
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          contact: contactRef,
        }}
      />

      {/* Sections */}
      <AboutSection ref={aboutRef} />
      <ProjectsSection ref={projectsRef} />
      <ContactSection ref={contactRef} />
    </div>
  );
}
