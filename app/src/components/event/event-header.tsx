import { formatTimestamp } from "@/lib/utils";
import EventActions from "./event-actions";

const EventHeader = ({
  eventId,
  eventName,
  startTime,
  displayName,
  username,
  isEventView = false,
}: {
  eventId: string;
  eventName: string;
  startTime: string;
  displayName?: string;
  username?: string;
  isEventView: boolean,
}) => {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-lg font-bold">Event: {eventName}</p>
        <p className="text-muted-foreground">
          Host: {displayName || "Unknown"}
        </p>
        <p className="text-sm opacity-30">{formatTimestamp(startTime)}</p>
      </div>
      {!isEventView && 
        <EventActions eventId={eventId} username={username}/>
      }
    </div>
  );
};

export default EventHeader;
