'use client';

import { Todo } from '@/types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { content, completed } = todo;

  return (
    <li className="flex justify-between">
      <h2>{content}</h2>
      <p>{completed ? '완료' : '미완료'}</p>

      <div className="flex gap-1 flex-wrap">
        <button>완료</button>
        <button>삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
