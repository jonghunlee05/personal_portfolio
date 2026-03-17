/* Replace bullets with exact wording from your CV. Do not invent metrics. */

const experiences = [
  {
    title: "Intern",
    organization: "Green Energy Mills Ltd",
    dates: "Replace with dates from CV",
    location: "Replace with location from CV",
    bullets: [
      "Replace with first bullet from CV.",
      "Replace with second bullet from CV.",
      "Add 2–4 bullets total from CV.",
    ],
  },
  {
    title: "Full-stack Developer / Founder",
    organization: "Waddle",
    dates: "Replace with dates from CV",
    location: "Replace if applicable",
    bullets: [
      "Replace with first bullet from CV.",
      "Replace with second bullet from CV.",
    ],
  },
  {
    title: "Hackathon Participant",
    organization: "Quanser Robotics Hackathon",
    dates: "Replace with event date from CV",
    location: "Replace if applicable",
    bullets: [
      "Replace with outcome/contribution from CV (e.g. 1st place, project focus).",
    ],
  },
  {
    title: "Hackathon Participant",
    organization: "Greater Uni Hack (GreatUniHack)",
    dates: "2025 (replace if different)",
    location: "Replace if applicable",
    bullets: [
      "Replace with outcome/contribution from CV (e.g. 1st place Quant Analysis).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">Experience</h2>
        <div className="mt-8 space-y-10">
          {experiences.map((exp, i) => (
            <article
              key={i}
              className="border-b border-neutral-100 pb-10 last:border-0 last:pb-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-medium text-neutral-900">{exp.title}</h3>
                <span className="text-sm text-neutral-500">{exp.dates}</span>
              </div>
              <p className="mt-1 text-neutral-700">{exp.organization}</p>
              {exp.location && (
                <p className="text-sm text-neutral-500">{exp.location}</p>
              )}
              <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-neutral-600">
                {exp.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
