import { fetchEvents } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

function useQueryEvents() {
  const events = useStore((state) => state.events);
  const setEvents = useStore((state) => state.setEvents);

  const loadEvents = async () => {
    const fetchedEvents = await fetchEvents();
    setEvents(fetchedEvents);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return { events };
}

export default useQueryEvents;
