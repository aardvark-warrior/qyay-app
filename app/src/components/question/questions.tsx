import useQueryQuestions from "@/hooks/use-query-questions";
import Question from "./question";
import { AddQuestionDialog } from "./add-question-dialog";

const Questions = () => {
  const { questions } = useQueryQuestions();

  return (
    <div>
      <div className="flex items-center justify-center">
        <AddQuestionDialog />
      </div>
      <div>
        {questions.length === 0 ? (
          <div className="p-4 text-center border-b border-slate-400 bg-slate-50">
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
