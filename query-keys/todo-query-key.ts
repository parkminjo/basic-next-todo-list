import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getTodoById, getTodoList } from "@/api/todo.api";
import type { Todo } from "@/types/todo.type";
import type { FilterType } from "@/store/use-todo-filter-store";

export const QUERY_KEY_TODO = "todoList";

export const todoQueryKeys = createQueryKeys("todoList", {
  filter: (filter: FilterType) => ({
    queryKey: [QUERY_KEY_TODO, filter],
    queryFn: () => getTodoList(filter),
  }),
  detail: (id: Todo["id"]) => ({
    queryKey: [QUERY_KEY_TODO, id],
    queryFn: () => getTodoById(id),
  }),
});
