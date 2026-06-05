type SkillCard = {
  title: string;
  skills: string[];
};

const skillCards: SkillCard[] = [
  {
    title: 'Web Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Vite']
  },
  {
    title: 'UI/UX Design',
    skills: ['UX/UI Design', 'Wireframes', 'User Flows', 'Product Design']
  },
  {
    title: 'Database Design',
    skills: ['Database Design', 'MongoDB', 'Firebase', 'PostgreSQL']
  },
  {
    title: 'API Development',
    skills: ['Node.js', 'Express', 'REST APIs', 'CORS']
  },
  {
    title: 'Requirements Engineering',
    skills: ['Requirements Analysis', 'Process Mapping', 'Documentation']
  },
  {
    title: 'Business Systems & Data',
    skills: ['SAP Business One', 'Power BI', 'Data Analysis']
  },
  {
    title: 'Service Integrations',
    skills: ['Stripe', 'Messaging', 'Chatbots', 'WhatsApp Integrations']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-ivory/95 p-6 shadow-soft sm:p-7 lg:p-8">
      <span className="absolute right-8 top-8 h-1.5 w-1.5 rounded-full bg-dustgold" />

      <div className="flex flex-col gap-3 border-b border-charcoal/10 pb-5">
        <div className="flex items-center justify-between gap-4">
          <p className="flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.34em] text-burgundy">
            <span className="inline-block h-px w-12 bg-taupe" />
            Capabilities
          </p>
          <span className="text-xs uppercase tracking-[0.38em] text-dustgold">04</span>
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,3.5vw,3.5rem)] font-normal leading-none text-charcoal">
          Skills.
        </h2>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillCards.map((card, index) => (
          <article
            key={card.title}
            className="group flex h-full min-h-[155px] flex-col rounded-[1.25rem] border border-taupe/35 bg-white/65 p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-burgundy/35 hover:bg-white/85"
          >
            <div className="flex items-center justify-between gap-4 border-b border-charcoal/10 pb-3">
              <span className="text-xs uppercase tracking-[0.34em] text-taupe">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-burgundy/70" />
            </div>

            <h3 className="mt-4 font-serif text-xl leading-tight text-charcoal">
              {card.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {card.skills.map((skill) => (
                <span
                  key={skill}
                  className="border border-charcoal/10 bg-ivory/80 px-2.5 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.15em] text-charcoal/60 transition group-hover:border-dustgold/35"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
