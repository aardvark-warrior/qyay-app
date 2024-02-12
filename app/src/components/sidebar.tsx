import { HomeIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { AddEventDialog } from "./event/add-event-dialog";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <Button aria-label={"Home"} variant="ghost" size="sm">
        <HomeIcon className="w-5 h-5" />
      </Button>
      <AddEventDialog />
    </div>
  );
};

export default Sidebar;
