import Link from 'next/link';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  return (
    <>
      <header className="fixed left-1/2 top-0 z-50 flex w-[calc(100%-2.5rem)] max-w-[1186px] -translate-x-1/2 items-center justify-between border-b border-taupe/25 bg-ivory/90 px-5 py-4 text-sm uppercase tracking-[0.32em] text-charcoal/80 shadow-[0_12px_35px_rgba(11,11,10,0.06)] backdrop-blur-md md:px-8">
        <div className="flex items-center gap-4">
          <span className="text-xs tracking-[0.5em] text-taupe/80">01</span>
          <Link href="#top" className="text-sm font-semibold tracking-[0.32em] text-charcoal">
            JEET&apos;S PORTFOLIO
          </Link>
        </div>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.4em] text-charcoal/70 transition hover:text-burgundy"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </header>
      <div aria-hidden="true" className="h-[61px]" />
    </>
  );
}
