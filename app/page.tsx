"use client";

import { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import GalaxyParticles from "../components/GalaxyParticles";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
    const homeRef = useRef<HTMLDivElement | null>(null);
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);
    const contactRef = useRef<HTMLDivElement | null>(null);

    const [activeSection, setActiveSection] = useState("home");

    // Scroll-spy to track which section is visible
    useEffect(() => {
        const sections = [
            { id: "home", ref: homeRef },
            { id: "about", ref: aboutRef },
            { id: "projects", ref: projectsRef },
            { id: "contact", ref: contactRef },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) {
                    const found = sections.find(
                        (s) => s.ref.current === visible.target
                    );
                    if (found) {
                        setActiveSection((prev) =>
                            prev === found.id ? prev : found.id
                        );
                    }
                }
            },
            {
                threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0..1
            }
        );

        sections.forEach((s) => {
            if (s.ref.current) observer.observe(s.ref.current);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="relative">
            {/* Hero Section */}
            <section
                ref={homeRef}
                id="home"
                className="relative min-h-screen snap-start flex flex-col justify-center items-center text-center bg-[var(--bg-main)]"
            >
                <GalaxyParticles />
                <div className="relative z-10">
                    <h1 className="text-[3.75rem] md:text-[4.5rem] font-medium leading-[1.05] tracking-[-0.03em] text-[#111] mb-6">
                        Chris Fitzgerald
                    </h1>

                    <p className="text-xl md:text-2xl text-[#1a1a1a]/80 max-w-2xl leading-snug mb-10">
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
                activeSection={activeSection}
            />

            {/* Sections */}
            <AboutSection ref={aboutRef} id="about" />
            <ProjectSection ref={projectsRef} id="projects" />
            <ContactSection ref={contactRef} id="contact" />
        </div>
    );
}