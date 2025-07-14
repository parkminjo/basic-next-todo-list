import { ENV } from '@/constants/env';
import { Todo } from '@/types/todo.type';

const SSRPage = async () => {
  const response = await fetch(ENV.JSON_SERVER, { cache: 'no-store' });
  const todoList: Todo[] = await response.json();

  return (
    <div>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.content}</div>;
      })}
    </div>
  );
};

export default SSRPage;
