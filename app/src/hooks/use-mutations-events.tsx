import { deleteEvent } from "@/lib/api";
import { useStore } from "@/lib/store";
// import { useEffect } from "react";

function useMutationsEvents() {
  const removeEvent = useStore((state) => state.removeEvent);

  const deleteEventById = async (eventId: string) => {
    await deleteEvent(eventId); // API call to delete data from Backend
    removeEvent(eventId);       // Zustand Action call to update states for Frontend
  };

  return { deleteEventById };
}

export default useMutationsEvents;