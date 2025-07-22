"use client";

import { useTodoListByUserIdQuery } from "@/hooks/use-todo-query";
import LoadingIndicator from "../common/loading-indicator";
import TodoItem from "./todo-item";
import { useTodoFilterStore } from "@/store/use-todo-filter-store";

const TodoListByUser = () => {
  const { filter } = useTodoFilterStore();
  const {
    data: todoList,
    isPending,
    isError,
  } = useTodoListByUserIdQuery(filter);

  if (isPending) return <LoadingIndicator />;
  if (isError) return <div>에러가 발생했습니다.</div>;
  if (todoList.length === 0) return <div>투두리스트를 작성해주세요.</div>;

  return (
    <ul className="flex flex-col gap-4">
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoListByUser;
