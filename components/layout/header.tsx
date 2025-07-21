import Link from "next/link";
import { ROUTER_PATH } from "@/constants/router-path";
import UserAction from "../auth/use-action";

const Header = () => {
  return (
    <header className="mb-4">
      <div className="container mx-auto flex flex-row py-4">
        <div className="flex w-full flex-row items-center justify-between">
          <Link href={ROUTER_PATH.HOME}>
            <h2 className="text-xl font-bold">TODO</h2>
          </Link>
          <UserAction />
        </div>
      </div>
    </header>
  );
};

export default Header;
