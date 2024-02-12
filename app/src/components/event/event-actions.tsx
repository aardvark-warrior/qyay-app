import { useStore } from "@/lib/store";
import { Button } from "../ui/button";
import useMutationsEvents from "@/hooks/use-mutations-events";
import { useEffect, useState } from "react";

const EventActions = ({
  eventId,
  username,
}: {
  eventId: string;
  username?: string;
}) => {
  const { deleteEventById } = useMutationsEvents();
  const { user } = useStore((state) => state);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (user && user.username === username) {
      setIsOwner(true);
    } else {
      setIsOwner(false);
    }
  }, [user, username]);

  return (
    <div className="">
      {isOwner && (
        <div>
          <Button
            variant="ghost"
            size="sm"
            //TODO: add editEvent dialog
          >
            Edit Event
          </Button>
        </div>
      )}
      {isOwner && (
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
      )}
    </div>
  );
};

export default EventActions;
