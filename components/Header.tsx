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

  // Show header only after scrolling past hero section
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
      <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          }`}
          style={{ background: "var(--accent)" }}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-end gap-8 text-white font-medium">
          <button onClick={scrollHome} className={buttonClass("home")}>
            Home
          </button>
          <button onClick={() => scroll(scrollTo.about)} className={buttonClass("about")}>
            About
          </button>
          <button onClick={() => scroll(scrollTo.projects)} className={buttonClass("projects")}>
            Projects
          </button>
          <button onClick={() => scroll(scrollTo.contact)} className={buttonClass("contact")}>
            Contact
          </button>
        </nav>
      </header>
  );
}
