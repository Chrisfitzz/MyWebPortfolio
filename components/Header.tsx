"use client";

import { useState, useEffect } from "react";

type HeaderProps = {
  scrollTo: {
    home?: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
  activeSection: string;
};

export default function Header({ scrollTo, activeSection }: HeaderProps) {
  const [show, setShow] = useState(false);

  // Only show header after scrolling past the hero section
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.5); // header appears after 50% of hero
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (ref?: React.RefObject<HTMLDivElement>) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollHome = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const buttonClass = (section: string) =>
      `transition font-medium ${
          activeSection === section
              ? "text-[var(--cream)] underline underline-offset-4 font-medium"
              : "text-white hover:text-gray-200"
      }`;

  return (
      <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
          } bg-[var(--accent)]`}
      >
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-end gap-8">
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
