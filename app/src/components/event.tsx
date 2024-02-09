import { Event as EventType } from "@/lib/types";
import EventActions from "./event-actions";
import EventHeader from "./event-header";

const Event = ({ 
  event 
}: { 
  event: EventType 
}) => {
  return (
    <div className="p-4 border-b-2 border-slate-400">
      <EventHeader 
        eventName={event.name}
        creator={event.userId}
        startTime={event.startTime}
      />
      <EventActions />
    </div>
  );
};

export default Event;
