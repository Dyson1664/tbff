import { memo, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import { ItineraryCard } from "@/components/ItineraryCard";
import { Activity } from "@/data/types";
import { ITEM_HEIGHT, CONTAINER_HEIGHT } from "@/data/itinerary-static";

interface VirtualizedActivityListProps {
  activities: Activity[];
  dayNumber?: number;
  className?: string;
}

interface ItemData {
  activities: Activity[];
  dayNumber?: number;
}

interface RowProps {
  index: number;
  style: React.CSSProperties;
  data: ItemData;
}

// Memoized row component for virtual scrolling
const ActivityRow = memo(({ index, style, data }: RowProps) => {
  const activity = data.activities[index];
  const isLast = index === data.activities.length - 1;
  const isFirst = index === 0;
  
  return (
    <div style={style} className="px-1">
      <div className="mb-6">
        <ItineraryCard 
          activity={activity} 
          isLast={isLast}
          isFirst={isFirst}
          dayNumber={data.dayNumber}
        />
      </div>
    </div>
  );
});

ActivityRow.displayName = 'ActivityRow';

export const VirtualizedItinerary = memo(({ activities, dayNumber, className }: VirtualizedActivityListProps) => {
  // Memoize the data object to prevent unnecessary re-renders
  const itemData = useMemo((): ItemData => ({ activities, dayNumber }), [activities, dayNumber]);
  
  // Only use virtualization for large lists
  const shouldVirtualize = activities.length > 10;
  
  // Calculate dynamic height based on content
  const listHeight = useMemo(() => 
    Math.min(CONTAINER_HEIGHT, activities.length * (ITEM_HEIGHT + 24)), 
    [activities.length]
  );
  
  if (!shouldVirtualize) {
    return (
      <div className={className}>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <ItineraryCard 
              key={`${activity.title}-${index}`}
              activity={activity}
              isLast={index === activities.length - 1}
              isFirst={index === 0}
              dayNumber={dayNumber}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <List
        height={listHeight}
        itemCount={activities.length}
        itemSize={ITEM_HEIGHT + 24}
        itemData={itemData}
        className="scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent virtual-scroll-container"
      >
        {ActivityRow}
      </List>
    </div>
  );
});

VirtualizedItinerary.displayName = 'VirtualizedItinerary';