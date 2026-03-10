export default function DownloadCTA() {
  return (
    <div className="flex flex-col items-center gap-6 rounded-[36px] bg-gradient-to-b from-brand to-brand-dark p-8 text-center shadow-[0_0_30px_rgba(0,0,0,0.08)] md:gap-8 md:p-14">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Try Transit Stats for free!
          </h2>
          <p className="text-sm text-white md:text-base">
            Available on iOS and Android. No Ventra account needed.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://apps.apple.com/us/app/transit-stats-cta-analytics/id6747690858"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 whitespace-nowrap rounded-[100px] bg-white px-6 py-3 text-brand transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
            aria-label="Download Transit Stats on the App Store"
          >
            <svg width="32" height="38" viewBox="0 0 32 38" fill="currentColor" aria-hidden="true">
              <path d="M26.43 19.94c-.05-4.56 3.73-6.75 3.9-6.86-2.12-3.1-5.43-3.53-6.62-3.58-2.82-.29-5.49 1.66-6.92 1.66-1.43 0-3.65-1.62-5.99-1.58-3.08.05-5.93 1.8-7.52 4.56-3.2 5.55-.82 13.78 2.3 18.3 1.53 2.21 3.36 4.69 5.76 4.6 2.31-.09 3.18-1.49 5.97-1.49 2.79 0 3.58 1.49 6.02 1.44 2.49-.04 4.06-2.25 5.58-4.47 1.76-2.57 2.48-5.05 2.53-5.18-.06-.02-4.85-1.86-4.9-7.4zM21.87 6.21c1.28-1.54 2.14-3.66 1.9-5.79-1.84.07-4.05 1.22-5.36 2.75-1.17 1.35-2.19 3.51-1.92 5.58 2.04.16 4.12-1.04 5.38-2.54z" />
            </svg>
            <span className="flex flex-col items-start text-left">
              <span className="text-xs leading-tight">Download on the</span>
              <span className="text-lg font-semibold leading-tight">App Store</span>
            </span>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.mycompany.transitstatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 whitespace-nowrap rounded-[100px] bg-white px-6 py-3 text-brand transition-all duration-200 hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.3)]"
            aria-label="Get Transit Stats on Google Play"
          >
            <svg width="34" height="38" viewBox="0 0 34 38" fill="none" aria-hidden="true">
              <path d="M0.83 1.76v34.48l18.1-17.24L0.83 1.76z" fill="#4285F4" />
              <path d="M0.83 1.76L18.93 19l5.57-5.22L0.83 1.76z" fill="#34A853" />
              <path d="M0.83 36.24L24.5 24.22 18.93 19 0.83 36.24z" fill="#EA4335" />
              <path d="M24.5 24.22l-5.57-5.22 5.57-5.22 9.22 5.22-9.22 5.22z" fill="#FBBC05" />
            </svg>
            <span className="flex flex-col items-start text-left">
              <span className="text-xs leading-tight uppercase">Get it on</span>
              <span className="text-lg font-semibold leading-tight">Google Play</span>
            </span>
          </a>
        </div>
    </div>
  );
}
