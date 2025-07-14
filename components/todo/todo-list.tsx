import { getTodoList } from '@/api/todo.api';
import TodoItem from './todo-item';

const TodoList = async () => {
  const todoList = await getTodoList();

  return (
    <ul>
      {todoList.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default TodoList;
