import { EventWithUserData } from "@/lib/types";
import EventHeader from "./event-header";
// import { EventViewQuestions } from "./event-view-questions";

const Event = ({ 
  event,
  isEventView = false
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
      <div className="font-thin">{description}</div>
      {/* {!isEventView &&
        <EventViewQuestions eventId={id}/>
      } */}
    </div>
  );
};

export default Event;
