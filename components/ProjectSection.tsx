"use client";

import React, { forwardRef } from "react";

type Project = {
  title: string;
  description: string;
  link?: string;
};

const sampleProjects: Project[] = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Todo App",
    description: "A simple yet elegant todo app with React hooks.",
    link: "#",
  },
  {
    title: "E-commerce UI",
    description: "A responsive e-commerce front-end design prototype.",
    link: "#",
  },
];

interface ProjectsSectionProps {
  id?: string;
}

const ProjectsSection = forwardRef<HTMLDivElement, ProjectsSectionProps>(
    (props, ref) => {
      return (
          <section
              ref={ref}
              id={props.id}
              className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-[var(--bg-main)] scroll-snap-start"
          >
            <h2 className="text-4xl font-bold mb-8 text-[var(--cream)]">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
              {sampleProjects.map((project, idx) => (
                  <div
                      key={idx}
                      className="bg-[var(--bg-main)] border border-[var(--muted)] p-6 rounded-md hover:scale-105 transition-transform"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-[var(--cream)]">
                      {project.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-4">{project.description}</p>
                    {project.link && (
                        <a
                            href={project.link}
                            className="text-[var(--accent)] hover:underline"
                        >
                          View Project
                        </a>
                    )}
                  </div>
              ))}
            </div>
          </section>
      );
    }
);

export default ProjectsSection;

