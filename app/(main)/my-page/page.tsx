import MyPageCard from "@/components/auth/my-page-card";

const MyPage = () => {
  return (
    <div className="flex min-h-svh w-full justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <MyPageCard />
      </div>
    </div>
  );
};

export default MyPage;
