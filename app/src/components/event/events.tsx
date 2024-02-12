import { useStore } from "@/lib/store";
import Event from "./event";
import useQueryEvents from "@/hooks/use-query-events";
import Questions from "../question/questions";

const Events = () => {
  const { events } = useQueryEvents();
  const selectedEventId = useStore((store) => store.selectedEventId);

  return (
    <div className="">
      {events.map((event) => (
        <div key={event.id}>
          <Event event={event} />
          {event.id === selectedEventId && <Questions />}
        </div>
      ))}
    </div>
  );
};

export default Events;
