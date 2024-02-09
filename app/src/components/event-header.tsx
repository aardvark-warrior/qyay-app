import { formatTimestamp } from "@/lib/utils";

const EventHeader = ({
  eventName,
  creator,
  startTime
}: {
  eventName: string,
  creator: number,
  startTime?: string,
}) => {
  return (
    <div >
      <div>
        {eventName}
      </div>
      <div className="opacity-30">
        Creator: user {creator}
      </div>
      <div className="opacity-30">
        {startTime}
      </div>
    </div>
  );
}

export default EventHeader;