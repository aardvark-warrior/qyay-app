import { useToast } from "@/components/ui/use-toast";
import { fetchQuestions } from "@/lib/api";
import { useStore } from "@/lib/store";
import { useEffect } from "react";

function useQueryQuestions() {
  const { toast } = useToast();
  const questions = useStore((state) => state.questions);
  const setQuestions = useStore((state) => state.setQuestions);
  const clearQuestions = useStore((state) => state.clearQuestions);
  const selectedEventId = useStore((state) => state.selectedEventId);

  const loadQuestions = async () => {
    try {
      const fetchedQuestions = await fetchQuestions(selectedEventId as string);
      setQuestions(fetchedQuestions);
    } catch (error) {
            clearQuestions();
      toast({
        variant: "destructive",
        title: "Failed to fetch questions",
        description:
          (error as Error).message ||
          "There was an error loading the questions. Please try again later.",
      });
    }
  };

    useEffect(() => {
    if (selectedEventId) {
      loadQuestions();
    } else {
      clearQuestions();
    }
  }, [selectedEventId]);

  return { questions };
}

export default useQueryQuestions;