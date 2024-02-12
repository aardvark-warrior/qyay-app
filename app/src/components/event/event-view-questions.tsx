import { useStore } from "@/lib/store";
import { Button } from "../ui/button";
import { SyntheticEvent } from "react";

export const EventViewQuestions = ({
  eventId,
}: {
  eventId: string;
}) => {
  const selectedEventId = useStore((state) => state.selectedEventId);
  const setSelectedEventId = useStore((state) => state.setSelectedEventId);
  const clearSelectedEventId = useStore((state) => state.clearSelectedEventId);

  const showQuestions = (e: SyntheticEvent) => {
    e.preventDefault();
    if (selectedEventId === eventId) {
      clearSelectedEventId();
    } else {
      setSelectedEventId(eventId);
    }
  };

  return (
    <div className="flex justify-center pt-2">
      <Button 
        variant="ghost"
        className="w-full p-8 bg-sky-100"
        onClick={showQuestions}
      >
        View Questions
      </Button>
    </div>
  );
}