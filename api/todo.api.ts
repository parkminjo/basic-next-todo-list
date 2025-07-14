'use server';

import { ENV } from '@/constants/env';
import { Todo } from '@/types/todo.type';
import { revalidateTag } from 'next/cache';

const TAG_TODO_LIST = 'todoList';

export const getTodoById = async (id: Todo['id']) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER}/${id}`);
    if (!response.ok) throw new Error('Todo를 불러오는데 실패했습니다.');

    const todo: Todo = await response.json();

    return todo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTodoList = async () => {
  try {
    const response = await fetch(ENV.JSON_SERVER, {
      next: {
        tags: [TAG_TODO_LIST],
      },
    });
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

    revalidateTag(TAG_TODO_LIST);
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

    revalidateTag(TAG_TODO_LIST);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTodo = async (
  id: Todo['id'],
  completed: Todo['completed']
) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed: !completed }),
    });
    if (!response.ok) throw new Error('Todo를 수정하는데 실패했습니다.');

    revalidateTag(TAG_TODO_LIST);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
