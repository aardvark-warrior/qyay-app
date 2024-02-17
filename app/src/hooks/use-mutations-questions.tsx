import { createQuestion } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useToast } from "@/components/ui/use-toast";

function useMutationQuestions() {
  const { toast } = useToast();
  const addQuestion = useStore((state) => state.addQuestion);
  const selectedEventId = useStore((state) => state.selectedEventId);

  const addNewQuestion = async (content: string) => {
    try {
      const newQuestion = await createQuestion(
        selectedEventId as string,
        content,
      );
      addQuestion(newQuestion);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Failed to create the question",
        description:
          (error as Error).message ||
          "There was an error creating the question. Please try again later.",
      });
    }
  };

  return { addNewQuestion };
}

export default useMutationQuestions;
