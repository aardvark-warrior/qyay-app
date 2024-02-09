import { Button } from "./ui/button";
import { deleteEvent } from "@/lib/api";

const EventActions = ({ 
  eventId 
}: { 
  eventId: string 
}) => {
  const handleDelete = async() => {
    await deleteEvent(eventId);
  };

  return (
    <div className="">
      <div>
      <Button variant="ghost" size="sm">
        {/* <Pencil1Icon className="w-5 h-5" /> */}
        Edit Event
      </Button>
      </div>
      <div>
      <Button className="text-rose-700" variant="ghost" size="sm" onClick={handleDelete} >
        {/* <TrashIcon className="w-5 h-5" /> */}
        Delete Event
      </Button>
      </div>
    </div>
  );
};

export default EventActions;
