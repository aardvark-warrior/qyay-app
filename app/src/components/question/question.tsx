import type { Question } from "@/lib/types";

const Question = ({ question }: { question: Question }) => {
  const { content, timestamp } = question;

  return (
    <div className="flex border-b border-slate-400">
      <div className="w-full p-4">
        <div className="mt-2">{content}</div>
      </div>
    </div>
  );
};

export default Question;
