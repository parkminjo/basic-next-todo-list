import { useQuery } from "@tanstack/react-query";
import { getTodoById, getTodoList } from "@/api/todo.api";
import { QUERY_KEY } from "@/constants/query-key";
import type { Todo } from "@/types/todo.type";
import type { FilterType } from "@/store/use-todo-filter-store";

export const useTodoListQuery = (filter: FilterType) => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST, filter],
    queryFn: () => getTodoList(filter),
  });
};

export const useTodoQuery = (id: Todo["id"]) => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST, id],
    queryFn: () => getTodoById(id),
  });
};
