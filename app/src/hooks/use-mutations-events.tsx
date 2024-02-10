import { createEvent, deleteEvent } from "@/lib/api";
import { useStore } from "@/lib/store";
// import { useEffect } from "react";

function useMutationsEvents() {
  const addEvent = useStore((state) => state.addEvent);
  const removeEvent = useStore((state) => state.removeEvent);

  const addNewEvent = async (
    name: string,
    description?: string,
    startTime?: string,
  ) => {
    const newEvent = await createEvent(name, description, startTime); // API call to add event to Backend
    addEvent(newEvent); // Zustand Action call to update Global states
  };
  const deleteEventById = async (eventId: string) => {
    await deleteEvent(eventId); // API call to delete data from Backend
    removeEvent(eventId); // Zustand Action call to update Global states for Frontend
  };

  return { addNewEvent, deleteEventById };
}

export default useMutationsEvents;
