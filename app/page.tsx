import Footer from "@/components/footer";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="jumbo absolute -inset-[10px] opacity-50 z-20"></div>
      </div>
      {/* Pattern */}
      <div className="absolute inset-0 z-0 bg-light-pattern dark:bg-dark-pattern bg-verySmall" />
      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-white/90 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-950" />
      <div className="relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-10 xl:flex-row">
        {/* Left Panel */}
        <LeftSide />
        {/* Right Panel */}
        <RightSide />
        {/* Footer for Mobile */}
        <div className="flex pb-6 xl:hidden align-bottom">
          <Footer />
        </div>
      </div>
    </main>
  );
}
