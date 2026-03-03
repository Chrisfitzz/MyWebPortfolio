"use client";

import React, { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

type AboutSectionProps = { id?: string };

const AboutSection = forwardRef<HTMLDivElement, AboutSectionProps>(
    (props, ref) => {
        return (
            <section
                ref={ref}
                id={props.id}
                className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-6 bg-[var(--bg-main)]"
            >
                <h2 className="text-[2.25rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] leading-[1.1] text-[#111] mb-6">
                    About Me
                </h2>

                <p className="max-w-3xl text-[1.1rem] md:text-[1.25rem] text-[#1a1a1a]/85 leading-relaxed md:leading-[1.75] text-left">
                    I’m Chris, a web developer who likes making clean, thoughtful websites. I work with React and Next.js,
                    and I’m drawn to projects with good design, clear structure and nice details.
                    <br />
                    <br />
                    I care about structure, typography and the tiny details that make something feel “right.”
                    I like working with people who enjoy the process — the back-and-forth, the little tweaks,
                    the moment when an idea finally clicks into place.
                    <br />
                    <br />
                    A lot of my inspiration comes from outside tech: music, photography, record sleeves, crime films, graphic design.
                    When I’m not building something, I’m usually watching films, hiking, meditating, reading or just hanging out with friends.
                </p>

                <a
                    href="/MyCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:text-white transition"
                >
                    View CV
                    <ArrowUpRight size={18} />
                </a>
            </section>
        );
    }
);

AboutSection.displayName = "AboutSection";
export default AboutSection;