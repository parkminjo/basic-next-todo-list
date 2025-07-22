"use client";

import { useId } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ROUTER_PATH } from "@/constants/router-path";
import TodoDeleteButton from "./todo-delete-button";
import { useUpdateTodoMutation } from "@/hooks/use-todo-mutation";
import { Checkbox } from "../ui/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import type { TodoWithUserId } from "@/api/todo.api";

interface Props {
  todo: TodoWithUserId;
}

const TodoItem = ({ todo }: Props) => {
  const { id, content, completed, user_id: userId } = todo;
  const { mutate: updateTodoMutate } = useUpdateTodoMutation();

  const checkboxId = useId();

  const handleChangeChecked = (checked: CheckedState) => {
    if (checked === "indeterminate") return;
    updateTodoMutate({ id, completed });
  };

  return (
    <li className="flex flex-row items-center justify-between rounded-lg border px-4 py-2 transition-all">
      <div className="flex items-center space-x-2">
        <Checkbox
          id={checkboxId}
          checked={completed}
          onCheckedChange={handleChangeChecked}
        />
        <Link
          href={ROUTER_PATH.DETAIL(id)}
          className={cn({ "line-through": completed })}
        >
          {content}
        </Link>
        <span className="text-sm text-gray-400">
          ( 작성자: {userId.full_name} )
        </span>
      </div>

      <TodoDeleteButton id={id} />
    </li>
  );
};

export default TodoItem;
