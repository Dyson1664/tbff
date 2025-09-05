import React from "react";
import { Route as RouteIcon } from "lucide-react";

// Colors cycle across stops
const ROUTE_COLORS = [
  "#06b6d4", // teal-500
  "#f97316", // orange-500
  "#8b5cf6", // violet-500
  "#22c55e", // green-500
  "#eab308", // yellow-500
  "#ef4444", // red-500
];

// Responsive items-per-row
function usePerRow(sm = 3, md = 4, lg = 6) {
  const [perRow, setPerRow] = React.useState(sm);
  React.useEffect(() => {
    const mqMd = window.matchMedia("(min-width: 768px)");
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const update = () => setPerRow(mqLg.matches ? lg : mqMd.matches ? md : sm);
    update();
    mqMd.addEventListener("change", update);
    mqLg.addEventListener("change", update);
    return () => {
      mqMd.removeEventListener("change", update);
      mqLg.removeEventListener("change", update);
    };
  }, [sm, md, lg]);
  return perRow;
}

export default function RouteBar({ stops }: { stops: string[] }) {
  if (!stops?.length) return null;

  const perRow = usePerRow(3, 4, 6); // mobile, md, lg

  // Split into rows
  const rows: string[][] = [];
  for (let i = 0; i < stops.length; i += perRow) {
    rows.push(stops.slice(i, i + perRow));
  }

  const getColor = (globalIndex: number) =>
    ROUTE_COLORS[globalIndex % ROUTE_COLORS.length];

  return (
    <div className="rounded-xl border bg-white/70 dark:bg-neutral-900/50 p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
          <RouteIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
        </div>
        <h3 className="text-base font-semibold">Route</h3>
      </div>

      {/* Serpentine layout (alternating row directions) */}
      <div className="space-y-2">
        {rows.map((row, rowIdx) => {
          const isOdd = rowIdx % 2 === 1;
          const baseIndex = rowIdx * perRow;
          const displayRow = isOdd ? [...row].reverse() : row;

          return (
            <div key={rowIdx} className="w-full">
              <div
                className={`flex items-center ${
                  isOdd ? "justify-end" : "justify-start"
                } flex-wrap gap-2`}
              >
                {displayRow.map((stop, i) => {
                  const originalIdx = isOdd
                    ? baseIndex + (row.length - 1 - i)
                    : baseIndex + i;
                  const color = getColor(originalIdx);
                  const nextIdx = originalIdx + 1;
                  const nextColor = getColor(nextIdx);
                  const isLastInRow = i === displayRow.length - 1;

                  return (
                    <div key={stop} className="flex items-center">
                      {/* pill (no big circle) */}
                      <span
                        className="mr-2 rounded-full border px-2.5 py-1 text-xs md:text-sm font-medium"
                        style={{ borderColor: color, color }}
                      >
                        {stop}
                      </span>

                      {/* horizontal connector */}
                      {!isLastInRow && (
                        <span
                          className="mx-1 h-0.5 w-6 md:w-10 rounded"
                          style={{
                            background: `linear-gradient(to right, ${color}, ${nextColor})`,
                          }}
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* vertical connector to next row */}
              {rowIdx < rows.length - 1 && (
                <div className={`flex ${isOdd ? "justify-start" : "justify-end"}`}>
                  <span
                    className="h-3 w-0.5 rounded"
                    style={{
                      background: `linear-gradient(to bottom, ${getColor(
                        baseIndex + row.length - 1
                      )}, ${getColor(baseIndex + row.length)})`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
