import MyPageCard from "@/components/auth/my-page-card";
import TodoListByUser from "@/components/todo/todo-list-by-user";

const MyPage = () => {
  return (
    <div className="flex min-h-svh w-full justify-center p-6 md:p-10">
      <div className="w-full space-y-8">
        <MyPageCard />
        <TodoListByUser />
      </div>
    </div>
  );
};

export default MyPage;
