import {
  Dialog,
  DialogClose,
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

export const EditEventDialog = ({ eventId }: { eventId: string }) => {
  const { deleteEventById } = useMutationsEvents();
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setEditDialogOpen(false);
  };
  const handleCancel = () => {};

  const handleSave = () => {};

  return (
    <Dialog open={isEditDialogOpen} onOpenChange={handleDialogClose}>
      <DropdownMenuItem
        onClick={(e) => {
          e.preventDefault();
          setEditDialogOpen(true);
        }}
      >
        <div aria-label={"Edit Event"} className="flex w-full">
          Edit
        </div>
      </DropdownMenuItem>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Event Details</DialogTitle>
          <DialogDescription>
            Please enter your new event details.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button size="sm" variant="secondary" type="reset">
              Cancel
            </Button>
          </DialogClose>
          <Button size="sm" onClick={() => eventId}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
