import TodoList from '@/components/todo/todo-list';

const HomePage = () => {
  return (
    <section>
      <div className="container p-2 mx-auto">
        <TodoList />
      </div>
    </section>
  );
};

export default HomePage;
