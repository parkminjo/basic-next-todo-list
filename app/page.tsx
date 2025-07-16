import { getTodoList } from "@/api/todo.api";
import TodoFilterSwitch from "@/components/todo/todo-filter-switch";
import TodoForm from "@/components/todo/todo-form";
import TodoList from "@/components/todo/todo-list";
import { QUERY_KEY_TODO } from "@/query-keys/todo-query-key";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

const HomePage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY_TODO, "all"],
    queryFn: () => getTodoList("all"),
  });

  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY_TODO, "completed"],
    queryFn: () => getTodoList("completed"),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section>
        <div className="container mx-auto space-y-4">
          <TodoForm />
          <div className="flex flex-row justify-end">
            <TodoFilterSwitch />
          </div>
          <TodoList />
        </div>
      </section>
    </HydrationBoundary>
  );
};

export default HomePage;
