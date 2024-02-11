import { createEvent, deleteEvent } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

function useMutationsEvents() {
  const { toast } = useToast();
  const addEvent = useStore((state) => state.addEvent);
  const removeEvent = useStore((state) => state.removeEvent);

  const deleteEventById = async (eventId: string) => {
    await deleteEvent(eventId); // API call to delete data from Backend
    removeEvent(eventId); // Zustand Action call to update Global states for Frontend
  };

  const addNewEvent = async (
    name: string,
    description?: string,
    startTime?: string,
  ) => {
    try {
      const newEvent = await createEvent(name, description, startTime); // API call to add event to Backend
      addEvent(newEvent); // Zustand Action call to update Global states
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to create the post",
        description:
          (error as Error).message ||
          "There was an error creating the post. Please try again later.",
      });
    }
  };
  

  return { addNewEvent, deleteEventById };
}

export default useMutationsEvents;
