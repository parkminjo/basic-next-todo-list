"use client";

import { useTodoListQuery } from "@/hooks/use-todo-query";
import LoadingIndicator from "../common/loading-indicator";
import TodoItem from "./todo-item";
import { useTodoFilterStore } from "@/store/use-todo-filter-store";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoList = () => {
  const { filter } = useTodoFilterStore();
  const { data: todoList, isPending, isError } = useTodoListQuery(filter);
  const [parent] = useAutoAnimate();

  if (isPending) return <LoadingIndicator />;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <ul ref={parent} className="flex flex-col gap-4">
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
