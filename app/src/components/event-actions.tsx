import { Button } from "./ui/button";
import useMutationsEvents from "@/hooks/use-mutations-events";

const EventActions = ({ eventId }: { eventId: string }) => {
  const { deleteEventById } = useMutationsEvents();

  return (
    <div className="">
      <div>
        <Button variant="ghost" size="sm">
          Edit Event
        </Button>
      </div>
      <div>
        <Button
          className="text-rose-700"
          variant="ghost"
          size="sm"
          onClick={() => deleteEventById(eventId)}
        >
          Delete Event
        </Button>
      </div>
    </div>
  );
};

export default EventActions;
