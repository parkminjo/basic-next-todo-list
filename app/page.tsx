import TodoForm from "@/components/todo/todo-form";
import TodoList from "@/components/todo/todo-list";

const HomePage = () => {
  return (
    <section>
      <div className="container mx-auto space-y-4 p-4">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
