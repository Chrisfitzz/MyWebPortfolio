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
                className="h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--bg-main)]"
            >
                <h2 className="text-4xl font-bold mb-6 text-[var(--cream)]">
                    About Me
                </h2>
                <p className="max-w-3xl text-[var(--muted)] leading-relaxed">
                    Hi! I’m Chris, a frontend engineer with a background in design and
                    education. I enjoy building modern, user-focused web experiences using
                    React, Next.js, and TypeScript.
                    <br />
                    <br />
                    I care about clean structure, usability, and subtle, meaningful
                    interactions. I like collaborating across disciplines, explaining
                    complex ideas clearly, and iterating on solutions.
                    <br />
                    <br />
                    When I’m not coding, you’ll find me DJing, taking photographs or
                    having coffee with friends — all of which feed back into how I think
                    about people, storytelling, and product design.
                </p>

                {/* CV link (blue accent) */}
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
