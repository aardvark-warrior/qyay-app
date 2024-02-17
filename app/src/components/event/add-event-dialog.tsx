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
import useMutationEvents from "@/hooks/use-mutations-events";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/lib/store";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const AddEventDialog = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { addNewEvent } = useMutationEvents();
  const user = useStore((state) => state.user);

  const handleSave = async () => {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Sorry! Name cannot be empty! 🙁",
        description: `Please enter the name for your event.`,
      });
      return;
    }
    console.log("hi");
    await addNewEvent(name, description);
    setName("");
    setDescription("");
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label={"Create an Event"}
          variant="ghost"
          className="bg-blue-300 hover:bg-blue-200"
        >
          New Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] sm:max-h-full">
        <DialogHeader>
          <DialogTitle>Create Event</DialogTitle>
          <DialogDescription>
            {user
              ? "Provide your event information here."
              : "Please login to create an event."}
          </DialogDescription>
        </DialogHeader>
        {user && (
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
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
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                className="flex h-full col-span-3"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>
          </div>
        )}
        <DialogFooter>
          {!user && (
            <DialogClose asChild>
              <Button>Okay</Button>
            </DialogClose>
          )}
          {user && (
            <DialogClose asChild>
              <Button variant={"secondary"} type="reset" onClick={handleCancel}>
                Cancel
              </Button>
            </DialogClose>
          )}
          {user && (
            <DialogClose asChild>
              <Button type="submit" onClick={handleSave}>
                Save
              </Button>
            </DialogClose>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
