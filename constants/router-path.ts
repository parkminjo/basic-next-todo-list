import { Todo } from "@/types/todo.type";

export const ROUTER_PATH = {
  HOME: "/",
  DETAIL: (id: Todo["id"]) => `/detail/${id}`,
  LOGIN: "/login",
  SIGN_UP: "/sign-up",
};
