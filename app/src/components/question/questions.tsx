import useQueryQuestions from "@/hooks/use-query-questions";
import Question from "./question";
import { AddQuestionDialog } from "./add-question-dialog";
import { useStore } from "@/lib/store";

const Questions = () => {
  const { user } = useStore((state) => state);
  const { questions } = useQueryQuestions();

  return (
    <div>
      {!user && <AddQuestionDialog />}
      <div className="border-b-2 border-slate-400">
        {questions.length === 0 ? (
          <div className="p-4 text-center border-b border-slate-200 font-serif text-sm text-slate-400">
            No questions yet...
          </div>
        ) : (
          questions.map((question) => (
            <Question question={question} key={question.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Questions;
