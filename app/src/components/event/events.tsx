import Event from "./event";
import useQueryEvents from "@/hooks/use-query-events";
// import { log } from "@/lib/logger";

const Events = () => {
  const { events } = useQueryEvents();

  return (
    <div className="">
      {events.map((event) => (
        <Event event={event} key={event.id} />
      ))}
    </div>
  );
};

export default Events;
