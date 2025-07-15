"use client";

import { updateTodo } from "@/api/todo.api";
import { ROUTER_PATH } from "@/constants/router-path";
import { Todo } from "@/types/todo.type";
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import TodoDeleteButton from "./todo-delete-button";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { id, content, completed } = todo;

  return (
    <li className="flex flex-row items-center justify-between rounded-lg border px-4 py-2 transition-all">
      <Link
        href={ROUTER_PATH.DETAIL(id)}
        className={cn({ "line-through": completed })}
      >
        {content}
      </Link>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => updateTodo(id, completed)} variant="outline">
          {completed ? "취소" : "완료"}
        </Button>
        <TodoDeleteButton id={id} />
      </div>
    </li>
  );
};

export default TodoItem;
