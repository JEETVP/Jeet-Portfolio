import Image from 'next/image';
import iberoLogo from '@/imgs/logoiberopuebla.png';

const focusBlocks = [
  {
    title: 'Development',
    description: 'Functional and scalable solutions.',
    mark: '</>'
  },
  {
    title: 'Design',
    description: 'Intuitive and attractive interfaces.',
    mark: 'UI'
  },
  {
    title: 'Strategy',
    description: 'Business and user-centered thinking.',
    mark: '01'
  },
  {
    title: 'Quality',
    description: 'Best practices and security.',
    mark: 'QS'
  }
];

export default function AboutPreview() {
  return (
    <section
      id="about"
      className="relative overflow-hidden rounded-[2rem] border border-ivory/10 bg-obsidian p-5 text-ivory shadow-soft sm:p-6 lg:p-7"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,154,106,0.1),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(90,31,43,0.18),transparent_30%)]" />
      <div className="absolute left-6 top-8 hidden h-[70%] w-px bg-taupe/35 lg:block" />
      <span className="absolute left-[1.15rem] top-[40%] hidden h-2.5 w-2.5 rounded-full bg-burgundy lg:block" />
      <span className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-dustgold" />

      <div className="relative grid gap-6 lg:grid-cols-[1.05fr_0.82fr] lg:items-start">
        <div className="lg:pl-10">
          <div className="flex items-center justify-between gap-4 border-b border-ivory/10 pb-3">
            <div className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.34em] text-taupe">
              <span className="inline-block h-px w-12 bg-taupe/70" />
              About
            </div>
            <span className="text-xs uppercase tracking-[0.38em] text-dustgold/75">02</span>
          </div>

          <div className="mt-5 max-w-2xl">
            <h2 className="font-serif text-[clamp(1.9rem,2.9vw,2.75rem)] font-normal leading-[1.02] text-ivory">
              About.
            </h2>
          </div>

          <div className="mt-4 max-w-2xl space-y-2.5 text-justify text-sm leading-6 text-ivory/78 sm:text-[0.9rem]">
            <p>
              I am a Computer Systems Engineering student at IBERO Puebla, expected to graduate in <span className="font-semibold text-dustgold">June 2027</span>.
            </p>
            <p>
              I consider myself a responsible and dedicated worker, focused on finding solutions to real problems and developing new proposals in every project.
            </p>
            <p>
              I like to work efficiently, with order and attention to detail. I have participated in academic projects focused on internal business processes, as well as in the development of digital products, e-commerce and digital presence for small and medium-sized businesses.
            </p>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-dustgold/30 bg-white/[0.035] p-5 shadow-soft lg:self-center">
          <div className="flex items-center justify-between gap-4">
            <div className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-dustgold">
              Education
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-taupe/60">01</span>
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border border-ivory/10 bg-transparent">
              <Image
                src={iberoLogo}
                alt="Logo IBERO Puebla"
                fill
                sizes="96px"
                className="scale-125 object-cover"
              />
            </div>
            <div>
              <h3 className="font-serif text-xl leading-tight text-ivory sm:text-2xl">
                Computer Systems Engineering
              </h3>
              <p className="mt-3 text-sm font-semibold text-ivory/75">IBERO Puebla</p>
            </div>
          </div>

          <div className="mt-5 border-t border-ivory/15 pt-4">
            <div className="flex flex-col gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-dustgold sm:flex-row sm:items-center sm:justify-between">
              <span>Expected graduation</span>
              <span>June 2027</span>
            </div>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border-y border-ivory/10 bg-ivory/10 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
          {focusBlocks.map((block) => (
            <div key={block.title} className="bg-obsidian/95 px-5 py-3 text-center">
              <div className="mx-auto flex h-8 w-8 items-center justify-center border border-dustgold/35 font-serif text-xs text-dustgold">
                {block.mark}
              </div>
              <h3 className="mt-2.5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-taupe">
                {block.title}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-ivory/65">{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
