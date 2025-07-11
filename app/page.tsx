import Link from 'next/link';
import { getTodoList } from '@/api/todo.api';

const HomePage = async () => {
  const todoList = await getTodoList();

  return (
    <div>
      <Link href="/detail/1">go to DetailPage</Link>
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.content}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomePage;
