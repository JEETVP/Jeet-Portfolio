import Image from 'next/image';
import Link from 'next/link';
import profilePhoto from '@/imgs/profilephoto.jpg';

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-ivory/95 p-6 shadow-soft backdrop-blur-sm sm:p-7 lg:p-8">
      <div className="absolute left-6 top-8 hidden h-[58%] w-px bg-burgundy/35 lg:block" />
      <span className="absolute left-[1.15rem] top-[42%] hidden h-2.5 w-2.5 rounded-full bg-burgundy lg:block" />
      <span className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-dustgold" />

      <div className="grid gap-7 lg:grid-cols-[1fr_0.86fr] lg:items-stretch">
        <div className="relative flex flex-col justify-center lg:pl-10">
          <div className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.34em] text-burgundy">
            <span className="inline-block h-px w-12 bg-taupe" />
            My Portfolio
          </div>

          <div className="mt-5 max-w-2xl">
            <h1 className="font-serif text-[clamp(2.35rem,4.2vw,3.55rem)] font-normal uppercase leading-[0.94] tracking-normal text-obsidian">
              Roberto
              <span className="block">Villegas Ojeda</span>
            </h1>
            <p className="mt-3 text-[0.68rem] font-medium uppercase leading-5 tracking-[0.3em] text-dustgold">
              Computer Systems Engineer
            </p>
            <p className="mt-4 max-w-2xl font-serif text-lg font-semibold leading-tight text-obsidian sm:text-xl">
              Web Developer · Full Stack Developer · UI/UX Designer · Digital Product Designer
            </p>
          </div>

          <div className="mt-5 max-w-xl space-y-2.5 text-justify text-[0.84rem] leading-6 text-charcoal/85">
            <p>
              I design and implement functional, custom-built solutions for businesses, from sales tools to systems that optimize internal processes.
            </p>
            <p>
              I aim to create integrated solutions that combine visual design, user experience, functional architecture, programming best practices and security.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#projects"
              className="inline-flex w-full items-center justify-between border border-burgundy bg-burgundy px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-ivory shadow-sm transition hover:-translate-y-0.5 hover:bg-burgundy/95 sm:w-52"
            >
              View projects
              <span aria-hidden="true" className="text-base leading-none text-dustgold">
                →
              </span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-between border border-taupe bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal shadow-sm transition hover:border-burgundy hover:text-burgundy sm:w-48"
            >
              Contact me
              <span aria-hidden="true" className="text-base leading-none text-dustgold">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[310px] overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-charcoal text-ivory shadow-soft sm:min-h-[380px] lg:min-h-[430px]">
          <Image
            src={profilePhoto}
            alt="Roberto Villegas Ojeda profile photo"
            fill
            sizes="(min-width: 1024px) 38vw, 100vw"
            className="object-cover object-[center_28%]"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,10,0.02),rgba(11,11,10,0.08)_45%,rgba(11,11,10,0.6))]" />
          <div className="absolute inset-x-8 bottom-16 h-px bg-ivory/45" />
          <div className="absolute inset-x-8 bottom-8 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-ivory">
            Roberto Villegas Ojeda
          </div>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden rounded-[1.35rem] bg-obsidian px-6 py-7 text-center text-ivory sm:px-8 lg:px-12">
        <div className="absolute left-6 top-6 h-[calc(100%-3rem)] w-px bg-taupe/40" />
        <div className="absolute right-6 top-6 h-[calc(100%-3rem)] w-px bg-taupe/25" />
        <span className="absolute left-[1.3rem] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-dustgold" />
        <div className="mx-auto max-w-4xl">
          <p className="font-serif text-lg leading-relaxed text-ivory sm:text-xl lg:text-[1.45rem]">
            “The mark I hope to leave is one of <span className="text-dustgold">commitment</span>, respect, and genuine care for people and <span className="text-taupe">for reality</span>. That’s where everything truly begins.”
          </p>
          <p className="mt-3 font-serif text-lg italic text-dustgold">
            Giorgio Armani
          </p>
        </div>
      </div>
    </section>
  );
}
