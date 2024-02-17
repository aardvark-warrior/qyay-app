import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Question } from "@/lib/types";
import useMutationsUpvotes from "@/hooks/use-mutations-upvotes";
import { useStore } from "@/lib/store";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";

const QuestionUpvotes = ({ question }: { question: Question }) => {
  const { id, upvoteCount } = question;
  const [upvotes, setUpvotes] = useState(0);
  const { user } = useStore((state) => state);
  const { addNewUpvote } = useMutationsUpvotes();

  const handleUpvote = async () => {
    console.log("handleUpvote");
    await addNewUpvote(id);
  };

  useEffect(() => {
    if (upvoteCount !== upvotes) {
      setUpvotes(upvoteCount);
    }
  }, [upvoteCount]);
  
  return (
  <div className="flex justify-end pt-2">
    {!user && (
      <Button
        size="sm"
        variant="ghost"
        className="bg-slate-100 hover:bg-slate-300"
        // onClick={() => setUpvotes(upvotes + 1)}
        onClick={handleUpvote}
      >
        <DoubleArrowUpIcon className="mr-1 mb-1" /> Upvote {upvotes > 0 && <sup>{upvotes}</sup>}
      </Button>
    )}
    {user && (
      <p className="text-xs text-muted-foreground">Upvotes: {upvotes}</p>
    )}
  </div>
  );
}

export default QuestionUpvotes;