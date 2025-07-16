import { useQuery } from "@tanstack/react-query";
import { getTodoById, getTodoList } from "@/api/todo.api";
import { QUERY_KEY } from "@/constants/query-key";
import type { Todo } from "@/types/todo.type";

export const useTodoListQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST],
    queryFn: getTodoList,
  });
};

export const useTodoQuery = (id: Todo["id"]) => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST, id],
    queryFn: () => getTodoById(id),
  });
};
