import useQueryQuestions from "@/hooks/use-query-questions";
import Question from "./question";

const Questions = () => {
  const { questions } = useQueryQuestions();

  if (questions.length === 0) {
    return (
      <div className="p-4 text-center border-b border-slate-400 bg-cyan-50">
        No questions yet...
      </div>
    );
  }

  return (
    <div>
      {questions.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
};

export default Questions;
