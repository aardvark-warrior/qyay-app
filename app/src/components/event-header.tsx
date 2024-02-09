import { formatTimestamp } from "@/lib/utils";
import EventActions from "./event-actions";

const EventHeader = ({
  eventId, 
  eventName,
  creator,
  startTime,
  handleDelete,
}: {
  eventId: string,
  eventName: string,
  creator: number,
  startTime?: string,
  handleDelete: (eventId: string) => void,
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
      <EventActions eventId={eventId} handleDelete={handleDelete}/>
    </div>
  );
}

export default EventHeader;