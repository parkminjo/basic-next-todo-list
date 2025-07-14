'use client';

import { deleteTodo, updateTodo } from '@/api/todo.api';
import { ROUTER_PATH } from '@/constants/router-path';
import { Todo } from '@/types/todo.type';
import Link from 'next/link';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { id, content, completed } = todo;

  return (
    <li className="flex justify-between">
      <Link href={ROUTER_PATH.DETAIL(id)}>{content}</Link>
      <p>{completed ? '완료' : '미완료'}</p>

      <div className="flex gap-1 flex-wrap">
        <button onClick={() => updateTodo(id, completed)}>
          {completed ? '취소' : '완료'}
        </button>
        <button onClick={() => deleteTodo(id)}>삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
