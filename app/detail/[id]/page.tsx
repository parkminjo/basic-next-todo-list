import { getTodoById } from "@/api/todo.api";
import TodoItem from "@/components/todo/todo-item";
import { Button } from "@/components/ui/button";
import { ROUTER_PATH } from "@/constants/router-path";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const TodoDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const todo = await getTodoById(id);

  return (
    <section>
      <div className="container mx-auto space-y-4">
        <TodoItem todo={todo} />
        <Link href={ROUTER_PATH.HOME}>
          <Button className="w-full">돌아가기</Button>
        </Link>
      </div>
    </section>
  );
};

export default TodoDetailPage;
