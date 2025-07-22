import { Todo } from "@/types/todo.type";

export const ROUTER_PATH = {
  HOME: "/",
  DETAIL: (id: Todo["id"]) => `/detail/${id}`,
  AUTH: "/auth",
  LOGIN: "/auth/login",
  SIGN_UP: "/auth/sign-up",
  MY_PAGE: "my-page",
};
