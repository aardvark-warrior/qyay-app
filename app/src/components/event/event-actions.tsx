import { useStore } from "@/lib/store";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChangeEventActions from "./change-event-actions";

const EventActions = ({
  eventId,
  username,
}: {
  eventId: string;
  username?: string;
}) => {
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
    <div className="flex justify-between">
      {isOwner && <ChangeEventActions eventId={eventId} />}
      {isOwner && (
        <Button className="m-1 opacity-90 bg-indigo-800 font-bold" size="sm">
          <Link to={`events/${eventId}`}>Moderate Event</Link>
        </Button>
      )}
    </div>
  );
};

export default EventActions;
