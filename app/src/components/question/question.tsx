import type { Question } from "@/lib/types";
import { formatTimestamp } from "@/lib/utils";
import { Button } from "../ui/button";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useStore } from "@/lib/store";
import useMutationsUpvotes from "@/hooks/use-mutations-upvotes";

const Question = ({ question }: { question: Question }) => {
  const { id, content, timestamp, upvoteCount } = question;
  const [ upvotes, setUpvotes ] = useState(0);
  const { user } = useStore((state) => state);
  const { addNewUpvote } = useMutationsUpvotes();

  const handleUpvote = async () => {
    await addNewUpvote(id);
  }

  useEffect(() => {
    if (upvoteCount !== upvotes) {
      setUpvotes(upvoteCount);
    }
  }, [upvoteCount]);

  return (
    <div className="px-4 pt-4 pb-2 border-b border-slate-200">
      <div className="flex justify-between w-full ">
        <div className="font-serif">{content}</div>
        <div className="text-xs opacity-30">{formatTimestamp(timestamp)}</div>
      </div>
      <div className="flex justify-end pt-2">
      {!user &&
        <Button 
          size="sm" 
          variant="ghost" 
          className="bg-slate-100 hover:bg-slate-300"
          // onClick={() => setUpvotes(upvotes + 1)}
          onClick={handleUpvote}
        >
          <DoubleArrowUpIcon className="mr-1 mb-1"/> Upvote 
          {upvotes > 0 && <sup>{upvotes}</sup>}
        </Button>
      }
      {user &&
        <p className="text-xs text-muted-foreground">
          Upvotes: {upvotes}
        </p>
      }
      </div>
    </div>
  );
};

export default Question;
