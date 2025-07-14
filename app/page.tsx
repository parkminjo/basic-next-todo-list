import TodoForm from '@/components/todo/todo-form';
import TodoList from '@/components/todo/todo-list';

const HomePage = () => {
  return (
    <section>
      <div className="container p-2 mx-auto">
        <TodoForm />
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
