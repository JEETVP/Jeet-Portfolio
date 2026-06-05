'use client';

import Image from 'next/image';
import { useState } from 'react';
import { projects, type Project } from '@/data/projects';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCodeClick = (project: Project) => {
    if (project.codeLinks.length === 1) {
      window.open(project.codeLinks[0].href, '_blank', 'noopener,noreferrer');
      return;
    }

    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative space-y-7">
      <div className="flex flex-col gap-3 border-b border-taupe/25 pb-4">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.34em] text-burgundy">
            <span className="inline-block h-px w-12 bg-taupe" />
            Featured Work
          </p>
          <span className="text-xs uppercase tracking-[0.38em] text-dustgold">03</span>
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.5rem)] font-normal leading-none text-charcoal">
          Projects.
        </h2>
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.name}
            className="group relative flex h-full min-h-[305px] flex-col overflow-hidden rounded-[1.15rem] border border-taupe/35 bg-ivory/95 p-3 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-burgundy/40 hover:shadow-[0_28px_80px_rgba(11,11,10,0.16)]"
          >
            <div className="relative aspect-[16/8.5] overflow-hidden rounded-[0.9rem] border border-charcoal/10 bg-charcoal">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} project preview`}
                  fill
                  sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(181,154,106,0.2),transparent_34%),linear-gradient(135deg,#2A2926,#0B0B0A)] font-serif text-4xl text-dustgold/80">
                  {String(index + 1).padStart(2, '0')}
                </div>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,10,0.02),rgba(11,11,10,0.28))]" />
              <span className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-dustgold" />
            </div>

            <div className="mt-2.5 flex items-center justify-between gap-4 border-b border-charcoal/10 pb-2">
              <span className="text-xs uppercase tracking-[0.38em] text-taupe">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[0.62rem] uppercase tracking-[0.34em] text-burgundy">Project</span>
            </div>

            <div className="mt-2.5 flex flex-1 flex-col">
              <h3 className="font-serif text-[1.02rem] leading-tight text-charcoal">
                {project.name}
              </h3>
              <p className="mt-2 text-justify text-[0.72rem] leading-[1.15rem] text-charcoal/75">
                {project.description}
              </p>

              <div className="mt-2.5 flex flex-wrap gap-1.5 pb-3.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-charcoal/10 bg-white/45 px-2 py-0.5 text-[0.54rem] font-semibold uppercase tracking-[0.14em] text-charcoal/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => handleCodeClick(project)}
                className="mt-auto inline-flex w-full items-center justify-between border border-burgundy/25 bg-charcoal px-3.5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-ivory transition hover:border-burgundy hover:bg-burgundy"
              >
                View code
                <span aria-hidden="true" className="text-dustgold">
                  →
                </span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedProject ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-obsidian/70 px-5 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-lg rounded-[1.5rem] border border-taupe/35 bg-obsidian p-6 text-ivory shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5 border-b border-ivory/10 pb-4">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.34em] text-dustgold">
                  Repositories
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-ivory">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="border border-ivory/15 px-3 py-2 text-xs uppercase tracking-[0.2em] text-taupe transition hover:border-burgundy hover:text-dustgold"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              {selectedProject.codeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-taupe/25 bg-white/[0.03] px-5 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-ivory transition hover:border-burgundy hover:text-dustgold"
                >
                  {link.label}
                  <span aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
