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
import { Textarea } from "../ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import useMutationQuestions from "@/hooks/use-mutations-questions";

export const AddQuestionDialog = () => {
  const [content, setContent] = useState("");
  const { addNewQuestion } = useMutationQuestions();
  const { toast } = useToast();

  const handleSave = async () => {
    if (!content) {
      toast({
        variant: "destructive",
        title: "Sorry! Content cannot be empty! 🙁",
        description: `Please enter the content for your question.`,
      });
      return;
    }
    await addNewQuestion(content);
    setContent("");
  };

  const handleCancel = () => {
    setContent("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          aria-label={"Ask a Question"}
          variant="secondary"
          size="sm"
          className="w-full m-2 bg-green-200"
        >
          Ask Question
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Ask Question</DialogTitle>
          <DialogDescription>
            "Provide the content of your question here."
          </DialogDescription>
        </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Textarea
                id="content"
                value={content}
                className="col-span-4"
                onChange={(e) => {
                  setContent(e.target.value);
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
