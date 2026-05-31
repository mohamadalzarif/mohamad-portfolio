import { aboutRange } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-3xl border-y border-black/10 py-10 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#b45309]">
          About
        </p>
        <p className="mx-auto mt-5 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#17130f] sm:text-3xl">
          {aboutRange.paragraph}
        </p>
      </div>
    </section>
  );
}
