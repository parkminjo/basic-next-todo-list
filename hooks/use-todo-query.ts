import { useQuery } from "@tanstack/react-query";
import { getTodoList } from "@/api/todo.api";
import { QUERY_KEY } from "@/constants/query-key";

export const useTodoListQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY.TODO_LIST],
    queryFn: getTodoList,
  });
};
