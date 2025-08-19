import { Calendar } from "lucide-react";
import { memo } from "react";

interface DayHeaderProps {
  dayNumber: number;
  date: string;
  title: string;
}

export const DayHeader = memo(({ dayNumber, date, title }: DayHeaderProps) => {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 bg-gradient-coral rounded-full flex items-center justify-center shadow-coral">
          <span className="text-white font-bold text-lg">{dayNumber}</span>
        </div>
        <div>
          <div className="flex items-center gap-2 text-muted-foreground mb-1">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{date}</span>
          </div>
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-primary via-primary/20 to-transparent" />
    </div>
  );
});