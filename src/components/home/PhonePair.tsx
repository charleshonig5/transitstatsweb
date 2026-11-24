import Image from "next/image";

interface Screen {
  src: string;
  alt: string;
}

interface PhonePairProps {
  /* The phone nearer the middle of the card: it sits lower and behind. */
  inner: Screen;
  /* The phone nearer the card's edge: it sits higher and in front. */
  outer: Screen;
  /* Which side of the pair the outer phone is on. */
  outerSide: "left" | "right";
  className?: string;
}

/* One phone: a frosted frame with the app screen inside. Every measurement
   is the design's number times --u (set by PhonePair), so the phone scales
   with the pair. The screen and the strip are placed from inside the frame's
   1px border, so each offset is the design's number less that pixel. The
   white strip covers the screenshot's camera cutout. */
function Phone({ screen, className }: { screen: Screen; className: string }) {
  return (
    <div
      className={`absolute h-[calc(var(--u)*440)] w-[calc(var(--u)*263)] overflow-hidden rounded-t-[calc(var(--u)*34)] border border-white bg-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.1),inset_0_0_40px_rgba(0,0,0,0.04)] ${className}`}
    >
      <div className="absolute left-[calc(var(--u)*10_-_1px)] top-[calc(var(--u)*10_-_1px)] h-[calc(var(--u)*515)] w-[calc(var(--u)*243)] overflow-hidden rounded-t-[calc(var(--u)*28)] bg-white shadow-[0_0_20px_rgba(0,0,0,0.1)]">
        <Image
          src={screen.src}
          alt={screen.alt}
          fill
          sizes="(max-width: 1279px) 50vw, 243px"
          /* Loaded with the page, not on the way down to it: a phone must
             never scroll into view with an empty screen. */
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="absolute left-[calc(var(--u)*84_-_1px)] top-[calc(var(--u)*10_-_1px)] h-[calc(var(--u)*29)] w-[calc(var(--u)*90)] bg-white" />
    </div>
  );
}

/* Two overlapping phones, drawn on a 493 x 420 design grid that scales with
   the pair's width (--u is one design pixel). The phones are taller than the
   grid on purpose: the card they sit in cuts off their bottoms. */
export default function PhonePair({ inner, outer, outerSide, className = "" }: PhonePairProps) {
  const outerLeft = outerSide === "left";
  return (
    <div className={className}>
      <div className="@container mx-auto w-full max-w-[493px]">
        <div className="relative aspect-[493/420] [--u:calc(100cqw/493)]">
          <Phone
            screen={inner}
            className={`top-[calc(var(--u)*44)] ${outerLeft ? "left-[calc(var(--u)*230)]" : "left-0"}`}
          />
          <Phone
            screen={outer}
            className={`top-0 ${outerLeft ? "left-0" : "left-[calc(var(--u)*230)]"}`}
          />
        </div>
      </div>
    </div>
  );
}
