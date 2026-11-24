import AppStoreButton from "@/components/AppStoreButton";

interface DownloadCTAProps {
  /* "lg" is the home page's closing card: its title is the hero's size.
     On every other page the title is that page's title size. The rest of
     the card is the same everywhere. */
  size?: "default" | "lg";
}

export default function DownloadCTA({ size = "default" }: DownloadCTAProps) {
  const lg = size === "lg";
  return (
    <div className="flex flex-col items-center gap-8 rounded-[44px] bg-linear-to-b/srgb from-brand to-brand-dark p-8 text-center shadow-[0_0_30px_rgba(0,0,0,0.08)] md:gap-11 md:p-14 xl:p-[60px]">
      <div className="flex flex-col items-center gap-3.5">
        <p
          className={
            lg
              ? "text-3xl font-bold leading-[1.2] text-white md:text-5xl xl:text-6xl xl:leading-[76px]"
              : "text-3xl font-bold leading-[1.2] text-white md:text-4xl lg:text-5xl"
          }
        >
          Try Transit Stats for&nbsp;free!
        </p>
        <p className="text-sm text-white md:text-base lg:text-xl lg:leading-[27px]">
          Available on iPhone. No Ventra account&nbsp;needed.
        </p>
      </div>
      <AppStoreButton size="lg" tone="white" />
    </div>
  );
}
