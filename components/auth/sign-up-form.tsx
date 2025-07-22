"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { signup } from "@/app/auth/action";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { ROUTER_PATH } from "@/constants/router-path";

const LoginForm = () => {
  const formSchema = z.object({
    email: z.string().email({
      error: "잘못된 이메일 형식입니다.",
    }),
    password: z
      .string()
      .min(6, {
        error: "비밀번호는 최소 6자 이상이어야 합니다.",
      })
      .max(50),
    fullName: z
      .string()
      .min(2, { error: "닉네임은 최소 2자 이상이어야 합니다." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("fullName", values.fullName);

    signup(formData);
  }

  return (
    <div className='"flex gap-6" flex-col'>
      <Card>
        <CardHeader>
          <CardTitle className="text-center">회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="이메일" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="비밀번호" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="닉네임" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                회원가입
              </Button>
              <div className="mt-4 text-center text-sm">
                이미 계정이 있으신가요?{" "}
                <Link
                  href={ROUTER_PATH.LOGIN}
                  className="underline underline-offset-4"
                >
                  Login
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
