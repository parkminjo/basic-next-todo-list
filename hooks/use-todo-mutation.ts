import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo } from "@/api/todo.api";
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

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.TODO_LIST] });
    },
  });
};
