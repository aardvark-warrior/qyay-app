import { useStore } from "@/lib/store";
import Event from "./event";
import useQueryEvents from "@/hooks/use-query-events";

// import { useEffect } from "react";
// import { fetchEvents } from "@/lib/api";


const Events = () => {
  const { events } = useQueryEvents();

  return (
    <div className="">
      {events.map((event) =>
        <Event event={event} key={event.id} />
      )}
    </div>
  );
};

export default Events;
