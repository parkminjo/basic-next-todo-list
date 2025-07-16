"use client";

import TodoItem from "./todo-item";
import { useTodoListQuery } from "@/hooks/use-todo-query";

const TodoList = () => {
  const { data: todoList, isPending, isError } = useTodoListQuery();

  if (isPending) return <div>로딩 중..</div>;
  if (isError) return <div>에러가 발생했습니다.</div>;

  return (
    <ul className="flex flex-col gap-4">
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
