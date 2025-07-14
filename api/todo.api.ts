import { ENV } from '@/constants/env';
import { Todo } from '@/types/todo.type';
import { stringify } from 'querystring';

export const getTodoList = async () => {
  try {
    const response = await fetch(ENV.JSON_SERVER);
    if (!response.ok) throw new Error('TodoList를 불러오는데 실패했습니다.');

    const todoList: Todo[] = await response.json();

    return todoList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTodo = async (content: Todo['content']) => {
  try {
    const response = await fetch(ENV.JSON_SERVER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, completed: false }),
    });
    if (!response.ok) throw new Error('Todo를 추가하는데 실패했습니다.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTodo = async (id: Todo['id']) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Todo를 삭제하는데 실패했습니다.');
  } catch (error) {
    console.error(error);
    throw error;
  }
};
