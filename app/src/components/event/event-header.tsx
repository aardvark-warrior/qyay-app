import { formatTimestamp } from "@/lib/utils";
import EventActions from "./event-actions";

const EventHeader = ({
  eventId,
  eventName,
  startTime,
  displayName,
  username,
}: {
  eventId: string;
  eventName: string;
  startTime: string;
  displayName?: string;
  username?: string;
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="font-semibold">{eventName}</p>
        <p className="text-muted-foreground">
          Host: {displayName || "Unknown"}
        </p>
        <p className="opacity-30">{formatTimestamp(startTime)}</p>
      </div>
      <EventActions eventId={eventId} username={username} />
    </div>
  );
};

export default EventHeader;
