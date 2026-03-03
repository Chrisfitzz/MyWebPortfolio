"use client";

import { useEffect, useState, RefObject } from "react";

type HeaderProps = {
    scrollTo: {
        home?: RefObject<HTMLDivElement | null>;
        about: RefObject<HTMLDivElement | null>;
        projects: RefObject<HTMLDivElement | null>;
        contact: RefObject<HTMLDivElement | null>;
    };
    activeSection: string;
};

export default function Header({ scrollTo, activeSection }: HeaderProps) {
    const [show, setShow] = useState(false);

    // Show header only after scrolling past most of the hero
    useEffect(() => {
        const onScroll = () => {
            const scrolledPastHero = window.scrollY > window.innerHeight * 0.7;
            setShow(scrolledPastHero);
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // run on mount

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scroll = (ref?: RefObject<HTMLDivElement | null>) => {
        ref?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollHome = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const buttonClass = (section: string) =>
        `transition ${
            activeSection === section
                ? "text-[var(--cream)] decoration-[var(--accent)] font-bold"
                : "text-white hover:text-gray-200 font-medium"
        }`;

    const headerClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-500 
    ${show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}
  `;

    return (
        <header
            className={headerClasses}
            style={{
                backgroundColor: "var(--accent)", // same as the Send Message button
                backdropFilter: "blur(8px)",
            }}
        >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-end gap-8 font-medium">
                <div className="flex gap-8">
                    <button onClick={scrollHome} className={buttonClass("home")}>
                        Home
                    </button>
                    <button
                        onClick={() => scroll(scrollTo.about)}
                        className={buttonClass("about")}
                    >
                        About
                    </button>
                    <button
                        onClick={() => scroll(scrollTo.projects)}
                        className={buttonClass("projects")}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => scroll(scrollTo.contact)}
                        className={buttonClass("contact")}
                    >
                        Contact
                    </button>
                </div>
            </nav>
        </header>
    );
}