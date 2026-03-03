"use client";

import React, { forwardRef } from "react";

type Project = {
    title: string;
    description: string;
    link?: string;
};

const sampleProjects: Project[] = [
    {
        title: "Project 1",
        description: "Description coming soon.",
        link: "#",
    },
    {
        title: "Project 2",
        description: "Description coming soon.",
        link: "#",
    },
    {
        title: "Project 3",
        description: "Description coming soon.",
        link: "#",
    },
];

type ProjectSectionProps = { id?: string };

const ProjectSection = forwardRef<HTMLDivElement, ProjectSectionProps>(
    (props, ref) => {
        return (
            <section
                ref={ref}
                id={props.id}
                className="min-h-screen snap-start flex flex-col justify-center items-center text-center px-6 bg-[var(--bg-main)]"
            >
                {/* Match section heading style with About/Contact */}
                <h2 className="text-[2.25rem] md:text-[2.75rem] font-semibold tracking-[-0.02em] leading-[1.1] text-[#111] mb-8">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                    {sampleProjects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-[rgba(246,240,230,0.4)] border border-[#e0d4cc]/40 p-6 shadow-sm hover:scale-[1.03] transition-all duration-300"
                        >
                            <h3 className="text-[1.35rem] font-medium tracking-[-0.01em] text-[#111] mb-3 text-left">
                                {project.title}
                            </h3>

                            <p className="text-[#1a1a1a]/80 text-[1rem] leading-relaxed mb-6 text-left">
                                {project.description}
                            </p>

                            {project.link && (
                                <a
                                    href={project.link}
                                    className="text-[var(--accent)] font-medium tracking-[-0.01em] hover:opacity-70 transition text-left inline-block"
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        );
    }
);

ProjectSection.displayName = "ProjectSection";

export default ProjectSection;