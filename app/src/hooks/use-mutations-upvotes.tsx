import { useToast } from "@/components/ui/use-toast";
import { createUpvote } from "@/lib/api";
import { useStore } from "@/lib/store";

function useMutationsUpvotes() {
  const { toast } = useToast();
  const addUpvote = useStore((state) => state.addUpvote);
  const selectedEventId = useStore((state) => state.selectedEventId);

  const addNewUpvote = async (questionId: string) => {
    try {
      const newUpvote = await createUpvote(selectedEventId as string, questionId);
      addUpvote(newUpvote);
    } catch(error) {
      toast({
        variant: "destructive",
        title: "Failed to upvote",
        description:
          (error as Error).message ||
          "There was an error creating the upvote. Please try again later.",
      });
    }
  }

  return { addNewUpvote };
}

export default useMutationsUpvotes;