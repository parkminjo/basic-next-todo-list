"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useAddTodoMutation } from "@/hooks/use-todo-mutation";

const TodoForm = () => {
  const { mutateAsync: addTodoMutate } = useAddTodoMutation();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const content = formData.get("todo-content") as string;

    if (content === "") return;

    await addTodoMutate(content);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        name="todo-content"
        placeholder="할 일을 입력해주세요"
      />
      <Button type="submit">추가</Button>
    </form>
  );
};

export default TodoForm;
