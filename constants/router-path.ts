import { Todo } from '@/types/todo.type';

export const ROUTER_PATH = {
  HOME: '/',
  DETAIL: (id: Todo['id']) => `/detail/${id}`,
};
