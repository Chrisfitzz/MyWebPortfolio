"use client";

import React, { forwardRef } from "react";
import { ArrowUpRight } from "lucide-react";

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
                    Hi! I’m Chris, a frontend engineer with a passion for crafting modern
                    web experiences. I build elegant and responsive web applications using
                    React, Next.js, and Tailwind CSS.
                    <br />
                    <br />
                    I enjoy exploring design systems, subtle animations, and clean user
                    interfaces.
                    <br />
                    <br />
                    When I’m not building applications, you'll find me DJing, taking
                    photographs or having coffee with friends — all of which inspire me to
                    create better experiences for users.
                </p>

                {/* View CV link */}
                <a
                    href="/MyCV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-[var(--accent)] hover:text-red-600 transition"
                >
                    View CV <ArrowUpRight size={18} />
                </a>
            </section>
        );
    }
);

export default AboutSection;

