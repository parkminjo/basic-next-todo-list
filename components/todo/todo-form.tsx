'use client';

import { createTodo } from '@/api/todo.api';

const TodoForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const content = formData.get('todo-content') as string;

    if (content === '') return;

    await createTodo(content);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="todo-content" />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoForm;
