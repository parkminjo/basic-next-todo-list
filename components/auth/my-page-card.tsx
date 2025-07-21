import { createClient } from "@/utils/supabase/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { redirect } from "next/navigation";
import { getProfile } from "@/api/profiles.api";
import { ROUTER_PATH } from "@/constants/router-path";

const MyPageCard = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect(ROUTER_PATH.LOGIN);
  }

  const { id, email } = data.user;
  const { full_name } = await getProfile(id);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>사용자 프로필</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="User Email"
                readOnly
                value={email}
              />
            </div>
            {full_name && (
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullName">fullName</Label>
                <Input
                  id="fullName"
                  placeholder="Full Name"
                  readOnly
                  value={full_name}
                />
              </div>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MyPageCard;
