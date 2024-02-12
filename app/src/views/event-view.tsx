import Aside from "@/components/aside";
import Questions from "@/components/question/questions";
import Event from "@/components/event/event";
import Sidebar from "@/components/sidebar";
import useQueryEvents from "@/hooks/use-query-events";
import { useStore } from "@/lib/store";
import { EventWithUserData } from "@/lib/types";
import { useEffect, useState } from "react";

const EventView = () => {
  const { events } = useQueryEvents();
  const [event, setEvent] = useState<EventWithUserData | null>(null);
  const setSelectedEventId = useStore((state) => state.setSelectedEventId);
  const selectedEventId = useStore((state) => state.selectedEventId);

  useEffect(() => {
    if (events && events.length !== 0) {
      setEvent(events[0]);
      setSelectedEventId(events[0].id);
    }
  }, [events]);

  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-full min-h-screen border-x-2 border-slate-400 md:max-w-xl">
        {event && <Event event={event} isEventView={true}/>}
        {event && selectedEventId && <Questions />}
      </div>
      <Aside />
    </>
  );
};

export default EventView;
