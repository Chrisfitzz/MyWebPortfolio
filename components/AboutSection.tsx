"use client";

import React, { forwardRef } from "react";

type AboutSectionProps = {};

const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(
  (props, ref) => {
    return (
      <section
        ref={ref}
        className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--bg-main)] scroll-snap-start"
      >
        <h2 className="text-4xl font-bold mb-6 text-[var(--cream)]">
          About Me
        </h2>
        <p className="max-w-3xl text-[var(--muted)] leading-relaxed">
          Hi! I’m Chris, a software engineer with a passion for crafting modern,
          elegant web experiences. I specialize in building responsive,
          interactive, and performant web applications using React, Next.js, and
          Tailwind CSS.
          <br />
          <br />
          Beyond writing code, I enjoy exploring design systems, subtle
          animations, and clean user interfaces. I believe the web should feel
          both functional and beautiful.
          <br />
          <br />
          When I’m not coding, You'll catch me playing music, taking photographs
          or drinking coffee with friends — all of which inspire me to create
          better experiences for users.
        </p>
      </section>
    );
  }
);

export default AboutSection;
