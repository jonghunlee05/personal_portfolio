/* Replace with exact skills from your CV. Do not invent. */

const categories = [
  {
    name: "Programming / Technical",
    items: ["Replace with languages/tools from CV", "e.g. Python, C++, MATLAB"],
  },
  {
    name: "Engineering / Simulation",
    items: ["Replace with tools from CV", "e.g. COMSOL, FEA, CAD"],
  },
  {
    name: "Software / Tools",
    items: ["Replace with tools from CV", "e.g. Git, Linux, Jupyter"],
  },
  {
    name: "Languages",
    items: ["Replace with languages from CV", "e.g. English, Korean"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">Skills</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <div key={i} className="rounded border border-neutral-200 p-4">
              <h3 className="text-sm font-medium text-neutral-700">
                {cat.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {cat.items.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
