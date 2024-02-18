import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Question } from "@/lib/types";
import useMutationsUpvotes from "@/hooks/use-mutations-upvotes";
import { useStore } from "@/lib/store";
import { DoubleArrowUpIcon } from "@radix-ui/react-icons";
import useMutationsQuestions from "@/hooks/use-mutations-questions";

const QuestionUpvotes = ({ question }: { question: Question }) => {
  const { id, upvoteCount, isAnswered } = question;
  const [upvotes, setUpvotes] = useState(0);
  const { user } = useStore((state) => state);
  const { addNewUpvote } = useMutationsUpvotes();
  const { updateExistingQuestion } = useMutationsQuestions();

  const handleUpvote = async () => {
    await addNewUpvote(id);
  };

  const handleAnswer = async () => {
    await updateExistingQuestion(id);
  }

  useEffect(() => {
    if (upvoteCount !== upvotes) {
      setUpvotes(upvoteCount);
    }
  }, [upvoteCount]);
  
  return (
  <div className="flex justify-between align-bottom">
    {user
      ? 
      <>
        {isAnswered
          ? <Button variant="outline" size="sm" className="w-32 bg-emerald-100" onClick={handleAnswer}>Answered</Button>
          : <Button variant="outline" size="sm" className="w-32" onClick={handleAnswer}>Not Answered</Button>
        }
      </>
      : 
      <div className="text-xs text-muted-foreground pt-3">
        {isAnswered
          ? "Already answered by host!"//<Badge variant="secondary" className="bg-emerald-0">Answered</Badge>
          : "Not yet answered"//<Badge variant="secondary">Not Answered</Badge>
        }
      </div>
      
    }
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