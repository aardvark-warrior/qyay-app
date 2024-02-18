import { formatTimestamp } from "@/lib/utils";
import EventActions from "./event-actions";
import { EventWithUserData } from "@/lib/types";
import { useEffect, useState } from "react";

const EventHeader = ({
  event,
  eventId,
  eventName,
  startTime,
  displayName,
  username,
  isEventView = false,
}: {
  event: EventWithUserData;
  eventId: string;
  eventName: string;
  startTime: string;
  displayName?: string;
  username?: string;
  isEventView: boolean;
}) => {
  const { questionCount } = event;
  const [questions, setQuestions] = useState(0);

  useEffect(() => {
    if (questionCount !== questions) {
      setQuestions(questionCount);
    }
  }, [questionCount]);

  return (
    <>
      <div className="flex justify-between">
        <div>
          <p className="text-xl font-extrabold">{eventName}</p>
          <p className="text-sm opacity-30">{formatTimestamp(startTime)}</p>
          <p className="text-sm text-slate-900 opacity-80">
            Host: {displayName || "Unknown"}
          </p>
        </div>

        {!isEventView && (
          <div>
            <div>
              <EventActions eventId={eventId} username={username} />
            </div>
            <div className="m-1 text-right text-muted-foreground text-sm">
              Questions: {questions}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default EventHeader;
