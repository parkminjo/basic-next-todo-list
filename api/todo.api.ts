import { createClient } from "@/utils/supabase/client";
import type { Todo } from "@/types/todo.type";
import type { FilterType } from "@/store/use-todo-filter-store";

export const getTodoById = async (id: Todo["id"]) => {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("todos")
    .select()
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export const getTodoList = async (filter?: FilterType) => {
  const supabase = createClient();
  const todosQuery = supabase
    .from("todos")
    .select()
    .order("created_at", { ascending: true });

  if (filter === "completed") {
    todosQuery.eq("completed", true);
  }

  const { data, error } = await todosQuery;

  if (error) throw new Error(error.message);

  return data;
};

export const createTodo = async (content: Todo["content"]) => {
  const supabase = createClient();
  const { error } = await supabase.from("todos").insert({ content });

  if (error) throw new Error(error.message);
};

export const deleteTodo = async (id: Todo["id"]) => {
  const supabase = createClient();
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) throw new Error(error.message);
};

interface UpdateTodoParams {
  id: Todo["id"];
  completed: Todo["completed"];
}

export const updateTodo = async ({ id, completed }: UpdateTodoParams) => {
  const supabase = createClient();
  const { error } = await supabase
    .from("todos")
    .update({ completed: !completed })
    .eq("id", id);

  if (error) throw new Error(error.message);
};
