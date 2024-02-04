import { createEvent } from "@/lib/api";
import { useStore } from "@/lib/store";

function useMutationEvents() {
  const addEvent = useStore((state) => state.addEvent);

  const addNewEvent = async (name: string, description?: string) => {
    const newEvent = await createEvent(name, description);
    addEvent(newEvent);
  };

  return { addNewEvent };
}

export default useMutationEvents;
