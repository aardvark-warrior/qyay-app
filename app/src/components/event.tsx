import { EventWithUserData } from "@/lib/types";
import EventActions from "./event-actions";

const Event = ({ 
  event
}: { 
  event: EventWithUserData
}) => {
  return (
    <div className="p-4 border-b-2 border-slate-400">
      <div>
        {event.name}
      </div>
      <EventActions />
    </div>
  );
};

export default Event;
