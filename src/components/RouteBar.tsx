import React from "react";
import { Route as RouteIcon, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

// Colors cycle across stops (edit to taste)
const ROUTE_COLORS = ["#06b6d4", "#f97316", "#8b5cf6", "#22c55e", "#eab308", "#ef4444"];
const getColor = (i: number) => ROUTE_COLORS[i % ROUTE_COLORS.length];

// --- Mobile: horizontal, draggable scroller (no arrows) ---
function MobileScroller({ stops }: { stops: string[] }) {
  if (!stops?.length) return null;

  return (
    <div className="w-full rounded-xl bg-white/70 dark:bg-neutral-900/50 px-4 py-2 shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <RouteIcon className="h-4 w-4 text-primary" />
        <h3 className="text-base font-semibold">Route</h3>
      </div>

      <div
        className="no-scrollbar overflow-x-auto touch-pan-x"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex items-center flex-nowrap gap-1.5 py-0.5">
          {stops.map((stop, i) => {
            const color = getColor(i);
            const nextColor = getColor(i + 1);
            const isLast = i === stops.length - 1;

            return (
              <div key={stop + i} className="flex items-center flex-none">
                <span
                  className="mr-1.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold text-black shadow-sm"
                  style={{ backgroundColor: color }}
                >
                  <MapPin className="h-4 w-4 text-black opacity-90" />
                  {stop}
                </span>

                {!isLast && (
                  <span
                    className="mx-0.5 h-0.5 w-4 flex-none rounded"
                    style={{ background: `linear-gradient(to right, ${color}, ${nextColor})` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide native scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

// --- Desktop/Tablet: arrows moved to header (top-right), track below, draggable too ---
function DesktopScroller({ stops }: { stops: string[] }) {
  if (!stops?.length) return null;

  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const updateArrows = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  React.useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", onResize);
    };
  }, [updateArrows]);

  const scrollBy = (dx: number) => trackRef.current?.scrollBy({ left: dx, behavior: "smooth" });

  return (
    <div className="w-full rounded-xl bg-white/70 dark:bg-neutral-900/50 px-4 py-2 shadow-sm">
      {/* Header with icon + arrows */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RouteIcon className="h-4 w-4 text-primary" />
          <h3 className="text-base font-semibold">Route</h3>
        </div>
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Scroll route left"
            onClick={() => scrollBy(-320)}
            disabled={!canScrollLeft}
            className="rounded-full bg-white/90 p-1 shadow disabled:opacity-30 dark:bg-neutral-900/80"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll route right"
            onClick={() => scrollBy(320)}
            disabled={!canScrollRight}
            className="rounded-full bg-white/90 p-1 shadow disabled:opacity-30 dark:bg-neutral-900/80"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Scroll track (no overlay arrows here) */}
      <div
        ref={trackRef}
        className="no-scrollbar overflow-x-auto pr-2"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex items-center flex-nowrap gap-1.5 py-0.5">
          {stops.map((stop, i) => {
            const color = getColor(i);
            const nextColor = getColor(i + 1);
            const isLast = i === stops.length - 1;

            return (
              <div key={stop + i} className="flex items-center flex-none">
                <span
                  className="mr-1.5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold text-black shadow-sm"
                  style={{ backgroundColor: color }}
                >
                  <MapPin className="h-4 w-4 text-black opacity-90" />
                  {stop}
                </span>

                {!isLast && (
                  <span
                    className="mx-0.5 h-0.5 w-8 lg:w-6 flex-none rounded"
                    style={{ background: `linear-gradient(to right, ${color}, ${nextColor})` }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide native scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

export function ResponsiveRoute({ stops }: { stops: string[] }) {
  if (!stops?.length) return null;
  return (
    <>
      <div className="md:hidden">
        <MobileScroller stops={stops} />
      </div>
      <div className="hidden md:block">
        <DesktopScroller stops={stops} />
      </div>
    </>
  );
}

export default ResponsiveRoute;
