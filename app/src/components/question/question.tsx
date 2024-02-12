import type { Question } from "@/lib/types";

const Question = ({ question }: { question: Question }) => {
  const { content, timestamp } = question;

  return (
    <div className="flex border-b border-slate-400 bg-cyan-50">
      <div className="w-full p-4">
        <div className="">{content}</div>
      </div>
    </div>
  );
};

export default Question;
