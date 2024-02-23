import { useEffect, useState } from "react";
import { fetchEventById, fetchEvents } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";
import { EventWithUserData } from "@/lib/types";
import useInterval from "./use-interval";

function useQueryEvents() {
  const { toast } = useToast();
  const events = useStore((state) => state.events);
  const setEvents = useStore((state) => state.setEvents);
  const setSelectedEventId = useStore((state) => state.setSelectedEventId);
  const clearSelectedEventId = useStore((state) => state.clearSelectedEventId);
  const [event, setEvent] = useState<EventWithUserData | null>(null);
  const user = useStore((state) => state.user);

  const loadEvents = async () => {
    try {
      const fetchedEventsWithUserData = await fetchEvents(user?.username); // API call to query information from Backend
      setEvents(fetchedEventsWithUserData); // Zustand Action call to update Global states for Frontend
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to fetch events",
        description:
          (error as Error).message ||
          "There was an error loading the events. Please try again later.",
      });
    }
  };

  const loadEvent = async (id: string) => {
    let fetchedEvent = null;
    try {
      fetchedEvent = await fetchEventById(id);
      setEvent(fetchedEvent);
      setSelectedEventId(fetchedEvent.id);
    } catch (error) {
      setEvent(null);
      clearSelectedEventId();
      toast({
        variant: "destructive",
        title: "Failed to fetch event",
        description:
          (error as Error).message ||
          "There was an error loading the event. Please try again later.",
      });
    }
  };

  useInterval(async () => {
    loadEvents();
  }, 300);

  useEffect(() => {
    loadEvents();
  }, []);

  return { event, events, loadEvent };
}

export default useQueryEvents;
