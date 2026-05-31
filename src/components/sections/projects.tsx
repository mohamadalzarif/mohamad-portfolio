import { accomplishments } from "@/data/portfolio";

const groups = ["Awards", "Presentations", "Publications"];

export function ProjectsSection() {
  return (
    <section id="accomplishments" className="scroll-mt-24 px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#b45309]">
            Accomplishments
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-[#17130f] sm:text-5xl">
            Publications, awards, and presentations.
          </h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {groups.map((group) => (
            <section key={group} aria-labelledby={`${group}-heading`}>
              <h3
                id={`${group}-heading`}
                className="border-t border-black/10 pt-4 font-mono text-xs uppercase tracking-[0.22em] text-[#b45309]"
              >
                {group}
              </h3>
              <ul className="mt-6 grid gap-6">
                {accomplishments
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <li key={item.title}>
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-stone-500">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold leading-6 tracking-[-0.025em] text-[#17130f]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-stone-600">
                        {item.venue}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="mt-3 inline-flex text-sm font-medium text-[#17130f] underline-offset-4 hover:text-[#b45309] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]"
                        >
                          View source
                        </a>
                      ) : null}
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
