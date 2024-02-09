import { deleteEvent, fetchEvents } from "@/lib/api";
import { EventWithUserData } from "@/lib/types";
import Event from "./event";
import { useEffect } from "react";
import { useStore } from "@/lib/store";
// import { log } from "@/lib/logger";

const Events = () => {
  const [events, setEvents] = useStore((state) => [state.events, state.setEvents]);
  
  const loadEvents = async () => {
    const fetchedEventsWithUserData = await fetchEvents();
    setEvents(fetchedEventsWithUserData);
  };

  const handleDelete = async(eventId: string) => {
    // log.debug("Delete event", eventId);
    await deleteEvent(eventId);
    setEvents(events.filter((event) => event.id !== eventId));
  }

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div className="">
      {events.map((event) =>
        <Event event={event} key={event.id} handleDelete={handleDelete}/>
      )}
    </div>
  );
};

export default Events;
