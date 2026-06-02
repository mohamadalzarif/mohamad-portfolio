import { FileText } from "lucide-react";

import { AnimatedHighlight } from "@/components/animated-highlight";
import { Button } from "@/components/ui/button";
import { intro } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-stone-700">
          {intro.name} / {intro.location}
        </p>
        <h1 className="mt-10 max-w-6xl text-5xl font-semibold tracking-[-0.075em] text-[#17130f] sm:text-7xl lg:text-[7.5rem] lg:leading-[0.92]">
          Researcher and builder between{" "}
          <AnimatedHighlight>Social Researcher</AnimatedHighlight> with Experience in Technology, Operations, and International Education
        </h1>
        <div className="mt-12 grid gap-8 border-t border-black/10 pt-8 lg:grid-cols-[minmax(0,42rem)_auto] lg:items-start">
          <div className="grid max-w-2xl gap-4 text-base leading-7 text-stone-700 sm:text-lg sm:leading-8">
            {intro.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button
              asChild
              variant="outline"
              className="h-auto rounded-full border-black/10 bg-[#fbf7ef] px-5 py-3 text-sm font-medium text-[#17130f] shadow-sm transition hover:border-[#b45309] hover:bg-[#fbf7ef] hover:text-[#b45309] focus-visible:ring-[#b45309]"
            >
              <a href={intro.resume}>
                Resume
                <FileText aria-hidden="true" className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
