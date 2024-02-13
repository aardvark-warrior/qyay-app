import type { Question } from "@/lib/types";
import { formatTimestamp } from "@/lib/utils";
import { Button } from "../ui/button";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Question = ({ question }: { question: Question }) => {
  const { content, timestamp } = question;
  const [ upvotes, setUpvotes ] = useState(0);

  return (
    <div className="px-4 pt-4 pb-2 border-b border-slate-200">
      <div className="flex justify-between w-full ">
        <div className="font-serif">{content}</div>
        <div className="text-xs opacity-30">{formatTimestamp(timestamp)}</div>
      </div>
      <div className="flex justify-end pt-2">
        <Button 
          size="sm" 
          variant="ghost" 
          className="bg-slate-100 hover:bg-slate-300"
          onClick={() => setUpvotes(upvotes + 1)}
        >
          <DoubleArrowUpIcon className="mr-1 mb-1"/> Upvote 
          {upvotes > 0 && <sup>{upvotes}</sup>}
        </Button>
      </div>
    </div>
  );
};

export default Question;
