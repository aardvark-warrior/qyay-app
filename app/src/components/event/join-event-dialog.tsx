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
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import useQueryEvents from "@/hooks/use-query-events";

export const JoinEventDialog = () => {
  const { toast } = useToast();
  const { loadEvent } = useQueryEvents();
  const [uniqueID, setUniqueID] = useState("");

  const handleJoin = async () => {
    // if (!uniqueID) {
    //   toast({
    //     variant: "destructive",
    //     title: "Sorry! Event ID cannot be empty! 🙁",
    //     description: `Please enter the unique ID for your event.`,
    //   });
    //   return;
    // }
    setUniqueID("");
  };

  const handleCancel = () => {
    setUniqueID("");
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-label={"Create an Event"} variant="ghost" className="bg-blue-300 hover:bg-blue-200">
          Join Event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] sm:max-h-full">
        <DialogHeader>
          <DialogTitle>Join Event</DialogTitle>
          <DialogDescription>
              Provide the unique link ID.
          </DialogDescription>
        </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="uniqueID" className="text-right">
                Event ID
              </Label>
              <Input
                id="uniqueID"
                value={uniqueID}
                className="col-span-3"
                onChange={(e) => {
                  setUniqueID(e.target.value);
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
              <Button type="submit" onClick={handleJoin} disabled={uniqueID === ""}>
                  <Link to={ `events/${uniqueID}` } >
                    Join
                  </ Link>
              </Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}