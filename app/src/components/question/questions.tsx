import useQueryQuestions from "@/hooks/use-query-questions";
import Question from "./question";
import { AddQuestionDialog } from "./add-question-dialog";

const Questions = () => {
  const { questions } = useQueryQuestions();

  return (
    <div>
      <div className="flex items-center justify-center border-b border-slate-200">
        <AddQuestionDialog />
      </div>
      <div className="border-b-2 border-slate-400">
        {questions.length === 0 ? (
          <div className="p-4 text-center border-b border-slate-200 font-serif">
            No questions yet...
          </div>
        ): (
          questions.map((question) => (
            <Question question={question} key={question.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Questions;
