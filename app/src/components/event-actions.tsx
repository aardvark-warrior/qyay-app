import { Button } from "./ui/button";
import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";

const EventActions = () => {
  return (
    <div className="flex justify-around">
      <Button variant="ghost" size="sm">
        <Pencil1Icon className="w-5 h-5" />
      </Button>
      <Button size="sm">
        <TrashIcon className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default EventActions;
