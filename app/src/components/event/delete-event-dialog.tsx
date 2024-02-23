import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import useMutationsEvents from "@/hooks/use-mutations-events";
import { useState } from "react";
import { DropdownMenuItem } from "../ui/dropdown-menu";

export const DeleteEventDialog = ({ eventId }: { eventId: string }) => {
  const { deleteEventById } = useMutationsEvents();
  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  return (
    <Dialog open={isDeleteDialogOpen} onOpenChange={handleDialogClose}>
      <DropdownMenuItem
        onClick={(e) => {
          e.preventDefault();
          setDeleteDialogOpen(true);
        }}
      >
        <div aria-label={"Delete Event"} className="flex w-full text-red-500">
          Delete
        </div>
      </DropdownMenuItem>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Warning: You are about to delete this event!
          </DialogTitle>
          <DialogDescription>
            This action is irreversible. Are you sure you wish to delete?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex w-full align-bottom justify-around pt-5">
            <Button size="sm" onClick={handleDialogClose}>
              No. Go back.
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => deleteEventById(eventId)}
            >
              Yes, I'm sure.
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
