import { Button } from "../ui/button";
import useMutationsEvents from "@/hooks/use-mutations-events";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
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

const HostActions = ({eventId}: {eventId: string}) => {
  const { deleteEventById } = useMutationsEvents();

  return (
    <div className="flex m-1 gap-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button aria-label={"Get Event ID"} size="sm" variant="outline" >
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
            {/* <DotsHorizontalIcon className="w-4 h-4" /> */}
            Change Event
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-500" onClick={() => deleteEventById(eventId)}>
            Delete
          </DropdownMenuItem>
          {/* <DropdownMenuItem>Copy link to post</DropdownMenuItem> */}
          {/* <DropdownMenuItem className="text-red-500">Report post</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Button
        className="m-1 bg-slate-200"
        variant="ghost"
        size="sm"
        //TODO: add editEvent dialog
      >
        <Pencil2Icon className="h-5 w-5"/>
      </Button>
      
      <Button
        className="m-1"
        size="sm"
        onClick={() => deleteEventById(eventId)}
      >
        <TrashIcon className="h-5 w-5"/>
      </Button> */}


    </div>
  )
}

export default HostActions;