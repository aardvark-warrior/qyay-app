import { fetchEvents } from "@/lib/api";
import Event from "./event";
import { useEffect } from "react";
import { useStore } from "@/lib/store";

const Events = () => {
  const [events, setEvents] = useStore((state) => [state.events, state.setEvents]);

  useEffect(() => {
    const loadEvents = async () => {
      const fetchedEvents = await fetchEvents();
      setEvents(fetchedEvents);
    };

    loadEvents();
  }, []);

  return (
    <div className="">
      {events.map((event) =>
        <Event event={event} key={event.id} />
      )}
    </div>
  );
};

export default Events;
