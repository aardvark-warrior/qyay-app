import { EventWithUserData, fetchEvents } from "@/lib/api";
import Event from "./event";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState<EventWithUserData[]>([]);

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
