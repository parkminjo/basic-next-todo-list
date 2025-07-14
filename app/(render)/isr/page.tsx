import { ENV } from '@/constants/env';
import { Todo } from '@/types/todo.type';

const ISRPage = async () => {
  const ONE_MINUTE = 60;

  const response = await fetch(ENV.JSON_SERVER, {
    next: { revalidate: ONE_MINUTE },
  });
  const todoList: Todo[] = await response.json();

  return (
    <div>
      {todoList.map((todo) => {
        return <div key={todo.id}>{todo.content}</div>;
      })}
    </div>
  );
};

export default ISRPage;
