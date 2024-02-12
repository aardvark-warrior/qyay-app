import type { Question } from "@/lib/types";
import { formatTimestamp } from "@/lib/utils";

const Question = ({ question }: { question: Question }) => {
  const { content, timestamp } = question;

  return (
    <div className="flex border-b border-slate-200 ">
      <div className="flex justify-between w-full p-4 ">
        <div className="font-serif">{content}</div>
        <div className="text-xs opacity-30">{formatTimestamp(timestamp)}</div>
      </div>
    </div>
  );
};

export default Question;
