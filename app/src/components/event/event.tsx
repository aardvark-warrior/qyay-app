import { EventWithUserData } from "@/lib/types";
import EventHeader from "./event-header";
import { EventViewQuestions } from "./event-view-questions";

const Event = ({ event }: { event: EventWithUserData }) => {
  const { id, name, description, startTime, user } = event;
  return (
    <div className="p-4 border-b-2 border-slate-400">
      <EventHeader
        eventId={id}
        eventName={name}
        startTime={startTime}
        displayName={user?.displayName}
        username={user?.username}
      />
      <div className="font-thin">{description}</div>
      <EventViewQuestions eventId={id}/>
    </div>
  );
};

export default Event;
