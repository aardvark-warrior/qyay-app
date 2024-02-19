import { Button } from "../ui/button";
import useMutationsEvents from "@/hooks/use-mutations-events";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DeleteEventDialog } from "./delete-event-dialog";
import { EditEventDialog } from "./edit-event-dialog";

const ChangeEventActions = ({ eventId }: { eventId: string }) => {
  const { deleteEventById } = useMutationsEvents();

  return (
    <div className="flex m-1 gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button aria-label={"Get Event ID"} size="sm" variant="outline">
            Event ID
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px] sm:max-h-full">
          <DialogHeader>
            <DialogTitle>Unique Event ID</DialogTitle>
            <DialogDescription>
              Provide this ID to your event attendees.
            </DialogDescription>
          </DialogHeader>
          {eventId}
          <DialogFooter>
            <DialogClose asChild>
              <Button>Done</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex bg-blue-200 hover:bg-blue-100 data-[state=open]:bg-muted"
          >
            Change Event
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <EditEventDialog eventId={eventId}/>
          <DeleteEventDialog eventId={eventId}/>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ChangeEventActions;
