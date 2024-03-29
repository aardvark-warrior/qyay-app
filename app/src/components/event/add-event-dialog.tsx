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
import { combineDateTime } from "@/lib/utils";

export const AddEventDialog = () => {
  const { toast } = useToast();
  const { addNewEvent } = useMutationEvents();
  const user = useStore((state) => state.user);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSave = async () => {
    if (!name) {
      toast({
        variant: "destructive",
        title: "Sorry! Name cannot be empty! 🙁",
        description: `Please enter the name for your event.`,
      });
      return;
    }
    if (date && time) {
      await addNewEvent(name, description, combineDateTime(date, time));
    } else {
      await addNewEvent(name, description);
    }
    setName("");
    setDescription("");
    setDate("");
    setTime("");
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
    setDate("");
    setTime("");
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
              <Label htmlFor="date" className="text-right">
                Event Date
              </Label>
              <Input
                id="date"
                value={date}
                type="date"
                className="col-span-3"
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
              <Label htmlFor="time" className="text-right">
                Event Time
              </Label>
              <Input
                id="time"
                value={time}
                type="time"
                className="col-span-3"
                onChange={(e) => {
                  setTime(e.target.value);
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
