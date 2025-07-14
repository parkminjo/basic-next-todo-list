'use client';

import { deleteTodo, updateTodo } from '@/api/todo.api';
import { Todo } from '@/types/todo.type';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const { id, content, completed } = todo;

  return (
    <li className="flex justify-between">
      <h2>{content}</h2>
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
