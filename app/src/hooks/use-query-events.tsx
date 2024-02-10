import { useEffect } from "react";
import { fetchEvents } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

function useQueryEvents() {
  const { toast } = useToast();
  const events = useStore((state) => state.events);
  const setEvents = useStore((state) => state.setEvents);

  const loadEvents = async () => {
    try {
      const fetchedEventsWithUserData = await fetchEvents(); // API call to query information from Backend
      setEvents(fetchedEventsWithUserData); // Zustand Action call to update Global states for Frontend
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to fetch posts",
        description:
          (error as Error).message ||
          "There was an error loading the posts. Please try again later.",
      });
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return { events };
}

export default useQueryEvents;
