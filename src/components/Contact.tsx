import Image, { type StaticImageData } from 'next/image';
import emailIcon from '@/imgs/email.png';
import githubIcon from '@/imgs/github.png';
import linkedinIcon from '@/imgs/linkedin.png';
import curriculumIcon from '@/imgs/curriculum.png';

type ContactLink = {
  title: string;
  text: string;
  href: string;
  icon: StaticImageData;
  external?: boolean;
};

const contactLinks: ContactLink[] = [
  {
    title: 'Email',
    text: 'roberto.villegasrvo@gmail.com',
    href: 'mailto:roberto.villegasrvo@gmail.com',
    icon: emailIcon
  },
  {
    title: 'GitHub',
    text: 'JEETVP',
    href: 'https://github.com/JEETVP',
    icon: githubIcon,
    external: true
  },
  {
    title: 'LinkedIn',
    text: 'Roberto Villegas',
    href: 'https://linkedin.com/in/roberto-villegas-42ab3830b',
    icon: linkedinIcon,
    external: true
  },
  {
    title: 'CV',
    text: 'Download professional profile',
    href: '/cv/ROBERTOVILLEGASCV.pdf',
    icon: curriculumIcon,
    external: true
  }
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden rounded-[2rem] border border-ivory/10 bg-obsidian p-6 text-ivory shadow-soft sm:p-7 lg:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(181,154,106,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(90,31,43,0.2),transparent_34%)]" />
      <div className="absolute left-6 top-8 hidden h-[76%] w-px bg-taupe/35 lg:block" />
      <span className="absolute left-[1.15rem] top-[45%] hidden h-2.5 w-2.5 rounded-full bg-burgundy lg:block" />
      <span className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-dustgold" />

      <div className="relative lg:pl-10">
        <div className="border-b border-ivory/10 pb-7">
          <div className="max-w-3xl">
            <p className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.34em] text-taupe">
              <span className="inline-block h-px w-12 bg-taupe/70" />
              Let’s work together
            </p>
            <h2 className="mt-5 font-serif text-[clamp(2.4rem,4vw,4rem)] font-normal leading-none text-ivory">
              Contact.
            </h2>
            <p className="mt-5 max-w-2xl text-justify text-sm leading-7 text-ivory/78 sm:text-[0.95rem]">
              I am open to collaborating on web development projects, digital products, e-commerce, process automation and business solution integrations.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden border-y border-ivory/10 bg-ivory/10 sm:grid-cols-2 xl:grid-cols-4">
          {contactLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer' : undefined}
              className="group flex min-h-[150px] flex-col bg-obsidian/95 p-5 text-ivory transition duration-200 hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4 border-b border-ivory/10 pb-4">
                <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-dustgold/30 bg-charcoal">
                  <Image
                    src={link.icon}
                    alt={`${link.title} icon`}
                    width={24}
                    height={24}
                    className="block h-6 w-6 object-contain"
                  />
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-dustgold" />
              </div>

              <h3 className="mt-4 font-serif text-xl leading-tight text-ivory">
                {link.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-ivory/65">
                {link.text}
              </p>
              <span className="mt-4 inline-flex items-center justify-between text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-dustgold transition group-hover:text-taupe">
                Open link
                <span aria-hidden="true">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
