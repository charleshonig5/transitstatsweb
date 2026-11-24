import Image from "next/image";

export const APP_STORE_URL =
  "https://apps.apple.com/us/app/transit-stats-cta-analytics/id6747690858";

/* The design's own App Store button art (public/images/appstore): the Apple
   mark and the two lines of drawn lettering, each at the size it was drawn.
   "sm" is the header's button, "lg" the hero's and the closing card's. */
const ART = {
  sm: {
    apple: { w: 23.4566, h: 28.1475 },
    line1: { w: 75.4762, h: 7.00444 },
    line2: { w: 80.4808, h: 16.8117 },
    row: "gap-[8.796px]",
    column: "gap-[4.108px]",
    box: "h-12 px-4",
  },
  lg: {
    apple: { w: 33.2287, h: 39.8738 },
    line1: { w: 106.92, h: 9.92255 },
    line2: { w: 114.01, h: 23.8155 },
    row: "gap-[12.461px]",
    column: "gap-[5.82px]",
    box: "h-[68px] px-6",
  },
} as const;

type Size = keyof typeof ART;
/* The white button's orange art exists at "lg" only. */
type Tone = "brand" | "white";

function Art({ size, tone, className }: { size: Size; tone: Tone; className: string }) {
  const art = ART[size];
  /* An orange button carries the white art; a white button the orange. */
  const ink = tone === "brand" ? "white" : "brand";
  const piece = (name: "apple" | "line1" | "line2") => (
    <Image
      src={`/images/appstore/${name}-${ink}-${size}.svg`}
      alt=""
      width={art[name].w}
      height={art[name].h}
      style={{ width: art[name].w, height: art[name].h }}
      loading="eager"
      unoptimized
    />
  );
  return (
    <span className={`items-center ${art.row} ${className}`} aria-hidden="true">
      {piece("apple")}
      <span className={`flex flex-col items-start ${art.column}`}>
        {piece("line1")}
        {piece("line2")}
      </span>
    </span>
  );
}

interface AppStoreButtonProps {
  /* "responsive" is the header's size on phones and the full size from sm up. */
  size: Size | "responsive";
  /* "brand": the orange gradient. "white": for use on the orange. */
  tone: Tone;
  /* The button's display classes, for a button that only shows at some widths. */
  show?: string;
  className?: string;
  onClick?: () => void;
}

export default function AppStoreButton({
  size,
  tone,
  show = "flex",
  className = "",
  onClick,
}: AppStoreButtonProps) {
  const box = size === "responsive" ? `${ART.sm.box} sm:h-[68px] sm:px-6` : ART[size].box;
  const skin =
    tone === "brand"
      ? "bg-linear-to-b/srgb from-brand to-brand-dark hover:shadow-[0_4px_20px_rgba(247,117,44,0.4)]"
      : "bg-white hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]";
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Transit Stats on the App Store"
      onClick={onClick}
      className={`${show} shrink-0 items-center justify-center whitespace-nowrap rounded-[100px] transition-all duration-200 hover:scale-105 active:scale-[0.97] ${box} ${skin} ${className}`}
    >
      {size === "responsive" ? (
        <>
          <Art size="sm" tone={tone} className="flex sm:hidden" />
          <Art size="lg" tone={tone} className="hidden sm:flex" />
        </>
      ) : (
        <Art size={size} tone={tone} className="flex" />
      )}
    </a>
  );
}
