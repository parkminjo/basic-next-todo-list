import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getTodoById, getTodoList, getTodoListByUserId } from "@/api/todo.api";
import type { Todo } from "@/types/todo.type";
import type { FilterType } from "@/store/use-todo-filter-store";

export const QUERY_KEY_TODO = "todoList";
export const QUERY_KEY_USER = "user";

export const todoQueryKeys = createQueryKeys("todoList", {
  filter: (filter: FilterType) => ({
    queryKey: [QUERY_KEY_TODO, filter],
    queryFn: () => getTodoList(filter),
  }),
  filterByUserId: (filter: FilterType) => ({
    queryKey: [QUERY_KEY_TODO, QUERY_KEY_USER, filter],
    queryFn: () => getTodoListByUserId(filter),
  }),
  detail: (id: Todo["id"]) => ({
    queryKey: [QUERY_KEY_TODO, id],
    queryFn: () => getTodoById(id),
  }),
});
