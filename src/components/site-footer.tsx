import { intro } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-8 pt-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-stone-500">
          {intro.location}
        </p>
        <a
          href={intro.email}
          className="w-fit text-sm font-medium text-[#17130f] underline-offset-4 transition hover:text-[#b45309] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
