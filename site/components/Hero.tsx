const positioning =
  "Materials Science & Engineering student building at the intersection of materials, AI, simulation, and robotics.";

const intro =
  "BSc Materials Science and Engineering at the University of Manchester. I combine research, technical building, hackathons, and leadership—focused on materials, AI, robotics, and sustainability.";

export default function Hero() {
  return (
    <section id="home" className="px-4 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-2xl text-center">
        {/* Optional: add profile photo with next/image, e.g. <Image src="/photo.jpg" alt="" width={120} height={120} className="mx-auto rounded-full" /> */}
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
          Jonghun Lee
        </h1>
        <p className="mt-3 text-lg text-neutral-600 md:text-xl">{positioning}</p>
        <p className="mt-6 max-w-xl mx-auto text-neutral-600 text-[15px] leading-relaxed">
          {intro}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded border border-neutral-900 bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-opacity hover:bg-neutral-800"
          >
            Contact
          </a>
          <a
            href="https://github.com/jonghunlee05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jonghun-justin-lee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
