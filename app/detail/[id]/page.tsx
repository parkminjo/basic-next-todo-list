import { getTodoById } from '@/api/todo.api';
import TodoItem from '@/components/todo/todo-item';

interface Props {
  params: Promise<{ id: string }>;
}

const TodoDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const todo = await getTodoById(id);

  return <TodoItem todo={todo} />;
};

export default TodoDetailPage;
