import { ENV } from '@/constants/env';
import { Todo } from '@/types/todo.type';

export const getTodoList = async () => {
  try {
    const response = await fetch(ENV.JSON_SERVER);
    console.log(ENV.JSON_SERVER);
    if (!response.ok) throw new Error('TodoList를 불러오는데 실패했습니다.');

    const todoList: Todo[] = await response.json();

    return todoList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
