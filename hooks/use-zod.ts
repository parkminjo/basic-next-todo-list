import { login, signup } from "@/app/auth/action";
import { ZOD_MESSAGE } from "@/constants/zod-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

export const useZodLogin = () => {
  const formSchema = z.object({
    email: z.string().email({
      error: ZOD_MESSAGE.EMAIL,
    }),
    password: z
      .string()
      .min(6, {
        error: ZOD_MESSAGE.PASSWORD,
      })
      .max(50),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    login(formData);
  }

  return {
    form,
    onSubmit,
  };
};

export const useZodSignUp = () => {
  const formSchema = z.object({
    email: z.string().email({
      error: ZOD_MESSAGE.EMAIL,
    }),
    password: z
      .string()
      .min(6, {
        error: ZOD_MESSAGE.PASSWORD,
      })
      .max(50),
    fullName: z
      .string()
      .min(2, { error: ZOD_MESSAGE.FULLNAME_MIN })
      .max(20, { error: ZOD_MESSAGE.FULLNAME_MAX }),
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

  return { form, onSubmit };
};
