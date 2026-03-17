import FocusBlock from "./FocusBlock";

const aboutCopy =
  "BSc Materials Science and Engineering at the University of Manchester. I work at the intersection of materials, AI, robotics, and sustainability—with a strong mix of research, technical building, hackathons, and leadership. I aim to ship real outcomes, not just ideas.";

export default function About() {
  return (
    <section id="about" className="px-4 py-14 md:py-18">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-xl font-semibold text-neutral-900">About</h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">{aboutCopy}</p>
        <div className="mt-6">
          <FocusBlock />
        </div>
      </div>
    </section>
  );
}
