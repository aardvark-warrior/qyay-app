import { useState } from "react";

import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import useMutationEvents from "@/hooks/use-mutations-events";
import { useToast } from "@/components/ui/use-toast";

export const AddEventDialog = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const { addNewEvent } = useMutationEvents();

  const handleSave = async () => {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Sorry! Name cannot be empty! 🙁",
        description: `Please enter the name for your event.`,
      });
      return;
    }
    await addNewEvent(name);
    setName("");
  };

  const handleCancel = () => {
    setName("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-label={"Create an Event"} variant="default" size="sm">
          <PlusCircledIcon className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Event</DialogTitle>
          <DialogDescription>
            Provide the name of your event here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="title" className="text-right">
              Event Name
            </Label>
            <Input
              id="name"
              value={name}
              className="col-span-3"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"secondary"} type="reset" onClick={handleCancel}>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSave}>
              Save
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
