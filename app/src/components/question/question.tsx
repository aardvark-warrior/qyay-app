import type { Question } from "@/lib/types";
import { formatTimestamp } from "@/lib/utils";
import QuestionUpvotes from "./question-upvotes";

const Question = ({ question }: { question: Question }) => {
  const { content, timestamp } = question;

  return (
    <div className="px-4 pt-4 pb-2 border-b border-slate-200">
      <div className="flex justify-between w-full ">
        <div className="font-serif">{content}</div>
        <div className="text-xs opacity-30">{formatTimestamp(timestamp)}</div>
      </div>
      <QuestionUpvotes question={question}/>
    </div>
  );
};

export default Question;
