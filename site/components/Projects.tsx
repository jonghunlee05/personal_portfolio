/* Add GitHub / Case Study / Demo URLs when available. Hide or disable buttons until then. */

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tools: string;
  outcomes: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "UHCS Microstructure Classifier",
    subtitle: "Replace with short subtitle from CV if available",
    description:
      "Replace with concise project description from CV. Focus on problem, approach, and impact.",
    tools: "Replace with tools/tech from CV (e.g. Python, ML, imaging).",
    outcomes: [
      "Replace with key outcome 1 from CV.",
      "Replace with key outcome 2.",
      "Replace with key outcome 3 if applicable.",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Case Study", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Piezoelectric Cantilever Beam Energy Harvester",
    subtitle: "Replace with short subtitle if available",
    description:
      "Replace with concise description from CV (e.g. design, simulation, results).",
    tools: "Replace with tools from CV (e.g. COMSOL, MATLAB).",
    outcomes: [
      "Replace with key outcome 1.",
      "Replace with key outcome 2.",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Case Study", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Buggy (UOM RoboSoc)",
    subtitle: "Replace with short subtitle if available",
    description:
      "Replace with concise description from CV (robotics, team, deliverables).",
    tools: "Replace with tools from CV.",
    outcomes: [
      "Replace with key outcome 1.",
      "Replace with key outcome 2.",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Case Study", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">
          Selected work
        </h2>
        <p className="mt-1 text-sm text-neutral-500">Projects</p>
        <div className="mt-8 space-y-12">
          {projects.map((project, i) => (
            <article
              key={i}
              className="rounded border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300"
            >
              <h3 className="font-medium text-neutral-900">{project.title}</h3>
              {project.subtitle && (
                <p className="mt-0.5 text-sm text-neutral-600">
                  {project.subtitle}
                </p>
              )}
              <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                {project.description}
              </p>
              <p className="mt-3 text-xs text-neutral-500">
                <span className="font-medium text-neutral-600">Tools:</span>{" "}
                {project.tools}
              </p>
              <ul className="mt-3 list-inside list-disc space-y-0.5 text-sm text-neutral-600">
                {project.outcomes.map((outcome, j) => (
                  <li key={j}>{outcome}</li>
                ))}
              </ul>
              {project.links && project.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.links.map((link, j) => (
                    <a
                      key={j}
                      href={link.href}
                      className={`text-sm font-medium ${
                        link.href === "#"
                          ? "cursor-not-allowed text-neutral-400"
                          : "text-neutral-700 underline-offset-2 hover:underline"
                      }`}
                      {...(link.href === "#" && { "aria-disabled": true })}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
