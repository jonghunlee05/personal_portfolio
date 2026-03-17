"use client";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#awards", label: "Awards" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav
        className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-sm"
        aria-label="Main navigation"
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="text-neutral-700 transition-colors hover:text-neutral-900 underline-offset-2 hover:underline"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
