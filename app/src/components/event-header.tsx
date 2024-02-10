import { formatTimestamp } from "@/lib/utils";
import EventActions from "./event-actions";

const EventHeader = ({
  eventId,
  eventName,
  // creator,
  startTime,
  displayName,
}: {
  eventId: string;
  eventName: string;
  // creator: number;
  startTime: string;
  displayName?: string;
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-semibold">{eventName}</p>
        <p className="text-muted-foreground">Host: {displayName || "Unknown"}</p>
        <p className="opacity-30">{formatTimestamp(startTime)}</p>
      </div>
      <EventActions eventId={eventId} />
    </div>
  );
};

export default EventHeader;
