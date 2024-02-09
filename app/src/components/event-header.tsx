import { formatTimestamp } from "@/lib/utils";
import EventActions from "./event-actions";

const EventHeader = ({
  eventId, 
  eventName,
  creator,
  startTime
}: {
  eventId: string,
  eventName: string,
  creator: number,
  startTime?: string,
}) => {
  return (
    <div className="flex justify-between" >
      <div>
        <p className="font-semibold">
          {eventName}
        </p>
        <p className="text-muted-foreground">
          Creator: user {creator}
        </p>
        <p className="opacity-30">
          {startTime}
        </p>
      </div>
      <EventActions eventId={eventId}/>
    </div>
  );
}

export default EventHeader;