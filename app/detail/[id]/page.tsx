import { getTodoById } from "@/api/todo.api";
import TodoDetail from "@/components/todo/todo-detail";
import { Button } from "@/components/ui/button";
import { ROUTER_PATH } from "@/constants/router-path";
import { todoQueryKeys } from "@/query-keys/todo-query-key";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const TodoDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(todoQueryKeys.detail(Number(id)));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container mx-auto space-y-4">
          <TodoDetail id={Number(id)} />
          <Link href={ROUTER_PATH.HOME}>
            <Button className="w-full">돌아가기</Button>
          </Link>
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default TodoDetailPage;
