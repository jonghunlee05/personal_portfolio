/* Replace course names with selected courses from your CV */
const courses = [
  "Materials structure and properties",
  "Engineering mathematics",
  "Computing and data analysis",
  "Other relevant courses from CV",
];

export default function Education() {
  return (
    <section id="education" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">Education</h2>
        <div className="mt-6 space-y-6">
          <div className="border-l-2 border-neutral-200 pl-5">
            <h3 className="font-medium text-neutral-900">
              University of Manchester
            </h3>
            <p className="mt-0.5 text-neutral-700">
              BSc (Hons) Materials Science and Engineering
            </p>
            <p className="mt-1 text-sm text-neutral-500">Sep 2025 – 2028</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-600">
              {courses.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
