import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo } from "@/api/todo.api";
import { QUERY_KEY } from "@/constants/query-key";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] });
    },
  });
};
