import { intro, navigation } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 bg-[#f6f1e8]/80 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="rounded-full bg-[#17130f] px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#b45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]"
        >
          {intro.name}
        </a>
        <div className="flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-stone-600 transition hover:bg-[#fbf7ef] hover:text-[#17130f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b45309]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
