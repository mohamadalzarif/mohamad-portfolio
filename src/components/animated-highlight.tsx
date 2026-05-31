export function AnimatedHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-2 z-0 h-5 origin-left animate-highlight rounded-full bg-[#d6c2a4]/80 sm:h-7"
      />
    </span>
  );
}
