import { fetchEvents } from "@/lib/api";
import Event from "./event";
import { useEffect } from "react";
import { useStore } from "@/lib/store";
import useQueryEvents from "@/hooks/use-query-events";

const Events = () => {
  const { events } = useQueryEvents;

  return (
    <div className="">
      {events.map((event) =>
        <Event event={event} key={event.id} />
      )}
    </div>
  );
};

export default Events;
