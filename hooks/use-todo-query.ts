import { useQuery } from "@tanstack/react-query";
import { getTodoById, getTodoList } from "@/api/todo.api";
import { todoQueryKeys } from "@/query-keys/todo-query-key";
import type { Todo } from "@/types/todo.type";
import type { FilterType } from "@/store/use-todo-filter-store";

export const useTodoListQuery = (filter: FilterType) => {
  return useQuery(todoQueryKeys.filter(filter));
};

export const useTodoListByUserIdQuery = (filter: FilterType) => {
  return useQuery(todoQueryKeys.filterByUserId(filter));
};

export const useTodoQuery = (id: Todo["id"]) => {
  return useQuery(todoQueryKeys.detail(id));
};
