import { Button } from "./ui/button";

const EventActions = ({ 
  eventId,
  handleDelete,
}: { 
  eventId: string,
  handleDelete: (eventId: string) => void,
}) => {
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
