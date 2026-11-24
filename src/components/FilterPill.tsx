import type { ReactNode } from "react";

/**
 * The site's filter pill (Resources categories): the
 * Resources design's pill, one type step down. 1px brand border, 16 medium
 * label on a 22 line, 16 inset, 34 tall; the selected one fills brand with
 * a white label. Phones use the app's small chip size (14 label, 15 inset,
 * 30 tall).
 */
export default function FilterPill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`flex h-[30px] shrink-0 cursor-pointer items-center rounded-full border border-brand px-3.5 text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-[0.97] md:h-[34px] md:px-[15px] md:text-base md:leading-[22px] ${
        selected ? "bg-brand text-white" : "bg-white text-brand"
      }`}
    >
      {children}
    </button>
  );
}
