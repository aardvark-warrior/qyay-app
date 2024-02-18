import { EventWithUserData } from "@/lib/types";
import EventHeader from "./event-header";

const Event = ({
  event,
  isEventView = false,
}: {
  event: EventWithUserData;
  isEventView?: boolean;
}) => {
  const { id, name, description, startTime, user } = event;

  return (
    <div className="p-4 border-b-2 border-slate-400">
      <EventHeader
        event={event}
        eventId={id}
        eventName={name}
        startTime={startTime}
        displayName={user?.displayName}
        username={user?.username}
        isEventView={isEventView}
      />
      {description && (
        <div className="pt-2 text-slate-700 text-sm">
          <p className="">Description: {description}</p>
        </div>
      )}
    </div>
  );
};

export default Event;
