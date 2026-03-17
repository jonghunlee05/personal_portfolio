/* Replace with your real email, phone, and CV link. */

const contactItems = [
  { label: "Email", value: "your@email.com", href: "mailto:your@email.com" },
  { label: "Phone", value: "Replace with phone from CV", href: "tel:" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jonghun-justin-lee",
    href: "https://www.linkedin.com/in/jonghun-justin-lee",
  },
  {
    label: "GitHub",
    value: "github.com/jonghunlee05",
    href: "https://github.com/jonghunlee05",
  },
  { label: "Location", value: "Manchester, U.K.", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">Contact</h2>
        <ul className="mt-6 space-y-3">
          {contactItems.map((item, i) => (
            <li key={i} className="flex flex-wrap gap-2 text-sm">
              <span className="font-medium text-neutral-700">{item.label}:</span>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-neutral-600 underline-offset-2 hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-neutral-600">{item.value}</span>
              )}
            </li>
          ))}
        </ul>
        {/* Optional: add downloadable CV link when you have the file */}
        {/* <p className="mt-6">
          <a href="/path-to-your-cv.pdf" className="text-sm font-medium text-neutral-700 underline-offset-2 hover:underline">Download CV</a>
        </p> */}
      </div>
    </section>
  );
}
