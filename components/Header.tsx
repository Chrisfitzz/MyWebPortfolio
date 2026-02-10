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
    const [theme, setTheme] = useState<"light" | "dark">("light");

    // Show header only after scrolling past hero
    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Apply theme to <html data-theme="...">
    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);

    const toggleTheme = () =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    const scroll = (ref?: RefObject<HTMLDivElement | null>) => {
        if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
    };

    const scrollHome = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const buttonClass = (section: string) =>
        `transition font-medium ${
            activeSection === section
                ? "text-[var(--cream)] underline font-semibold"
                : "text-white hover:text-gray-200"
        }`;

    if (!show) return null;

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[var(--accent)] transition-all duration-300">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-8 font-medium">
                {/* Left: Theme toggle */}
                <button
                    onClick={toggleTheme}
                    className="text-white text-sm border border-white/40 px-3 py-1 hover:bg-white/10 transition"
                >
                    {theme === "light" ? "Dark mode" : "Light mode"}
                </button>

                {/* Right: Nav links */}
                <div className="flex gap-8">
                    <button onClick={scrollHome} className={buttonClass("home")}>
                        Home
                    </button>
                    <button onClick={() => scroll(scrollTo.about)} className={buttonClass("about")}>
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
