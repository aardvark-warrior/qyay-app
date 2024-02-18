import Aside from "@/components/aside";
import Questions from "@/components/question/questions";
import Event from "@/components/event/event";
import Sidebar from "@/components/sidebar";
import useQueryEvents from "@/hooks/use-query-events";
import { useStore } from "@/lib/store";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AppHeader from "@/components/app-header";

const EventView = () => {
  const { eventId } = useParams();
  const { event, loadEvent } = useQueryEvents();
  const selectedEventId = useStore((state) => state.selectedEventId);

  useEffect(() => {
    if (eventId) {
      loadEvent(eventId);
    }
  }, [eventId]);

  return (
    <>
      <AppHeader />
      <div className="flex justify-between">
        <Sidebar isEventView={true} />
        <div className="flex flex-col w-full min-h-screen border-x-2 border-slate-400 md:max-w-xl">
          {event && 
            <Event event={event} isEventView={true} />
          }
          {event && selectedEventId && <Questions />}
        </div>
      </div>
    </>
  );
};

export default EventView;
