import { supabase } from "@/utils/supabase/client-supabase";
import type { Todo } from "@/types/todo.type";
import type { FilterType } from "@/store/use-todo-filter-store";

export const getTodoById = async (id: Todo["id"]) => {
  const { data, error } = await supabase
    .from("todos")
    .select(`*, user_id(full_name)`)
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return data;
};

export type TodoWithUserId = Awaited<ReturnType<typeof getTodoList>>[number];

export const getTodoList = async (filter?: FilterType) => {
  const todosQuery = supabase
    .from("todos")
    .select(`*, user_id(full_name)`)
    .order("created_at", { ascending: true });

  if (filter === "completed") {
    todosQuery.eq("completed", true);
  }

  const { data, error } = await todosQuery;

  if (error) throw new Error(error.message);

  return data;
};

export const getTodoListByUserId = async (filter?: FilterType) => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("사용자를 찾을 수 없습니다.");
  }

  const userId = user.id;
  console.log(userId);

  const todosQuery = supabase
    .from("todos")
    .select(`*, user_id(full_name)`)
    .order("created_at", { ascending: true })
    .eq("user_id", userId);

  if (filter === "completed") {
    todosQuery.eq("completed", true);
  }

  const { data, error } = await todosQuery;

  if (error) throw new Error(error.message);

  return data;
};

export const createTodo = async (content: Todo["content"]) => {
  const { error } = await supabase.from("todos").insert({ content });

  if (error) throw new Error(error.message);
};

export const deleteTodo = async (id: Todo["id"]) => {
  const { error } = await supabase.from("todos").delete().eq("id", id);

  if (error) throw new Error(error.message);
};

interface UpdateTodoParams {
  id: Todo["id"];
  completed: Todo["completed"];
}

export const updateTodo = async ({ id, completed }: UpdateTodoParams) => {
  const { error } = await supabase
    .from("todos")
    .update({ completed: !completed })
    .eq("id", id);

  if (error) throw new Error(error.message);
};
