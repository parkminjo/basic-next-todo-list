import { ENV } from "@/constants/env";
import { TODO_ERROR_MESSAGE } from "@/constants/error-message";
import type { Todo } from "@/types/todo.type";
import type { FilterType } from "@/store/use-todo-filter-store";

export const getTodoById = async (id: Todo["id"]) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER_URL}/${id}`);
    if (!response.ok) throw new Error(TODO_ERROR_MESSAGE.GET_TODO);

    const todo: Todo = await response.json();

    return todo;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getTodoList = async (filter?: FilterType) => {
  const url = new URL(ENV.JSON_SERVER_URL);

  if (filter === "completed") {
    url.searchParams.set("completed", "true");
  }

  try {
    const response = await fetch(url.toString());
    if (!response.ok) throw new Error(TODO_ERROR_MESSAGE.GET_TODO_LIST);

    const todoList: Todo[] = await response.json();

    return todoList;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createTodo = async (content: Todo["content"]) => {
  try {
    const response = await fetch(ENV.JSON_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content, completed: false }),
    });
    if (!response.ok) throw new Error(TODO_ERROR_MESSAGE.POST);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTodo = async (id: Todo["id"]) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error(TODO_ERROR_MESSAGE.DELETE);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

interface UpdateTodoParams {
  id: Todo["id"];
  completed: Todo["completed"];
}

export const updateTodo = async ({ id, completed }: UpdateTodoParams) => {
  try {
    const response = await fetch(`${ENV.JSON_SERVER_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    });
    if (!response.ok) throw new Error(TODO_ERROR_MESSAGE.PATCH);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
