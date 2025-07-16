"use client";

import { useTodoQuery } from "@/hooks/use-todo-query";
import { Todo } from "@/types/todo.type";
import TodoItem from "./todo-item";
import LoadingIndicator from "../common/loading-indicator";

interface Props {
  id: Todo["id"];
}

const TodoDetail = ({ id }: Props) => {
  const { data: todo, isPending, isError } = useTodoQuery(id);

  if (isPending) return <LoadingIndicator />;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return <TodoItem todo={todo} />;
};

export default TodoDetail;
