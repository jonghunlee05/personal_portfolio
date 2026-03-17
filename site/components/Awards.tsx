/* Order: most impressive first. Add/remove items to match CV exactly. */

const highlights = [
  "1st Place — Quanser Robotics Hackathon",
  "1st Place — GreatUniHack 2025 (Quant Analysis)",
  "MATLAB Certified MATLAB Associate",
  "1st Place — Ready, Set, Pitch!",
];

const rest = [
  "Add other awards/certifications from CV here.",
];

export default function Awards() {
  return (
    <section id="awards" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">
          Awards & certifications
        </h2>
        <ul className="mt-6 space-y-2">
          {highlights.map((item, i) => (
            <li key={i} className="text-neutral-700">
              {item}
            </li>
          ))}
          {rest.map((item, i) => (
            <li key={`rest-${i}`} className="text-neutral-600 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
