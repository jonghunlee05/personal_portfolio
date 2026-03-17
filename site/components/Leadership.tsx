const roles = [
  {
    title: "Buggy Project Lead",
    org: "Robotics Society",
    note: "Replace with short description from CV if available.",
  },
  {
    title: "Semiconductor Graphene Project Lead",
    org: "Graphene Society",
    note: "Replace with short description from CV if available.",
  },
  {
    title: "Student Representative",
    org: "Replace with context from CV (e.g. department, year)",
    note: "Replace with short description from CV if available.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">
          Leadership & positions of responsibility
        </h2>
        <div className="mt-6 space-y-6">
          {roles.map((role, i) => (
            <div
              key={i}
              className="flex flex-col gap-1 border-l-2 border-neutral-200 pl-5"
            >
              <h3 className="font-medium text-neutral-900">{role.title}</h3>
              <p className="text-sm text-neutral-600">{role.org}</p>
              {role.note && (
                <p className="text-sm text-neutral-500">{role.note}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
