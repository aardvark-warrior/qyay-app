import { fetchEvents } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

function useQueryEvents() {
  const events = useStore((state) => state.events);
  const setEvents = useStore((state) => state.setEvents);

  const loadEvents = async () => {
    const fetchedEventsWithUserData = await fetchEvents();  // API call to query information from Backend
    setEvents(fetchedEventsWithUserData);                   // Zustand Action call to update Global states for Frontend
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return { events };
}

export default useQueryEvents;