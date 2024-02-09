import { Button } from "./ui/button";
import { useStore } from "@/lib/store";
import { deleteEvent } from "@/lib/api";

const EventActions = ({ 
  eventId,
}: { 
  eventId: string,
}) => {
  const removeEvent = useStore((state) => state.removeEvent);
  
  const handleDelete = async (eventId: string) => {
    await deleteEvent(eventId); // API backend side
    removeEvent(eventId);       // Zustand (store) frontend side
  }

  return (
    <div className="">
      <div>
      <Button variant="ghost" size="sm">
        Edit Event
      </Button>
      </div>
      <div>
      <Button className="text-rose-700" variant="ghost" size="sm" onClick={() => handleDelete(eventId)} >
        Delete Event
      </Button>
      </div>
    </div>
  );
};

export default EventActions;
