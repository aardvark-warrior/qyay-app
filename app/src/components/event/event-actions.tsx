import { useStore } from "@/lib/store";
import { Button } from "../ui/button";
import useMutationsEvents from "@/hooks/use-mutations-events";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons";


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
    <div className="flex">
      

      {isOwner && (
        <div>
          <Button
            className="m-1 bg-slate-200"
            variant="ghost"
            size="sm"
            //TODO: add editEvent dialog
          >
            <Pencil2Icon className="h-5 w-5"/>
          </Button>
        </div>
      )}

      {isOwner && (
        <div>
          <Button
            className="m-1"
            size="sm"
            onClick={() => deleteEventById(eventId)}
          >
            <TrashIcon className="h-5 w-5"/>
          </Button>
        </div>
      )}

      <Button 
        size="sm" 
        className="m-1 opacity-90 bg-sky-800 font-bold"
      >
        <Link to={`events/${eventId}`}>
          Join Event
        </Link>
      </Button>
    </div>
  );
};

export default EventActions;
