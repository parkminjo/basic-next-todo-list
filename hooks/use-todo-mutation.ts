import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, deleteTodo, updateTodo } from "@/api/todo.api";
import { QUERY_KEY_TODO, todoQueryKeys } from "@/query-keys/todo-query-key";

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TODO] });
    },
  });
};

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY_TODO] });
    },
  });
};

export const useUpdateTodoMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEY_TODO],
      });
    },
  });
};
