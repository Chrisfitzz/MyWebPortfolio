"use client";

import { useEffect, useState } from "react";

type HeaderProps = {
  scrollTo: {
    home?: React.RefObject<HTMLDivElement>;
    about: React.RefObject<HTMLDivElement>;
    projects: React.RefObject<HTMLDivElement>;
    contact: React.RefObject<HTMLDivElement>;
  };
};

export default function Header({ scrollTo }: HeaderProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scroll = (ref?: React.RefObject<HTMLDivElement>) => {
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollHome = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
      style={{ background: "var(--accent)" }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-end gap-8 text-white font-medium">
        <button onClick={scrollHome} className="hover:underline">
          Home
        </button>
        <button
          onClick={() => scroll(scrollTo.about)}
          className="hover:underline"
        >
          About
        </button>
        <button
          onClick={() => scroll(scrollTo.projects)}
          className="hover:underline"
        >
          Projects
        </button>
        <button
          onClick={() => scroll(scrollTo.contact)}
          className="hover:underline"
        >
          Contact
        </button>
      </nav>
    </header>
  );
}
