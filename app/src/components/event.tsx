import { EventWithUserData } from "@/lib/types";
import EventHeader from "./event-header";

const Event = ({ event }: { event: EventWithUserData }) => {
  const { id, name, userId, description, startTime, user} = event;
  return (
    <div className="p-4 border-b-2 border-slate-400">
      <EventHeader
        eventId={id}
        eventName={name}
        // creator={userId}
        startTime={startTime}
        displayName={user?.displayName}
      />
      <div className="font-thin">{description}</div>
    </div>
  );
};

export default Event;
