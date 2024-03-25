"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import NextAuthProviders from "./NextAuthProviders";

interface Props {
  callbackUrl?: string;
}

const FormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string({
    required_error: "Please enter your password",
  }),
});

type InputType = z.infer<typeof FormSchema>;

const SignInForm = (props: Props) => {
  const router = useRouter();
  const [visiblePass, setVisiblePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast.error(result?.error);
      return;
    }
    toast.success("Welcome To CarSeek");
    router.push(props.callbackUrl ? props.callbackUrl : "/");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 overflow-hidden items-center justify-center w-auto"
    >
      <div className="p-2 flex flex-col gap-2">
        <Input
          className="h-12 my-2 "
          label="Email"
          {...register("email")}
          errorMessage={errors.email?.message}
        />
        <Input
          className="h-12 my-2"
          label="Password"
          {...register("password")}
          type={visiblePass ? "text" : "password"}
          errorMessage={errors.password?.message}
          endContent={
            <button
              type="button"
              onClick={() => setVisiblePass((prev) => !prev)}
            >
              {visiblePass ? (
                <EyeSlashIcon className="w-4" />
              ) : (
                <EyeIcon className="w-4" />
              )}
            </button>
          }
        />
        <div
          className="flex 
        flex-col items-center justify-center gap-2"
        >
          <Button
            className="bg-orange-500 hover:bg-orange-600 transition-colors
            w-full"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </div>
        <div className="flex items-center justify-between mb-4">
          {" "}
          <Checkbox className="form-checkbox mr-2">
            <span className="text-sm text-gray-600">Remember Me</span>
          </Checkbox>
          <Link
            href={"/auth/forgotPassword"}
            className=" text-sm hover:text-orange-500 transition-colors"
          >
            Forgot Your Password?
          </Link>
        </div>
        <NextAuthProviders />

        <p className="text-center text-sm ">
          Don't have an account?{" "}
          <a
            href="/auth/signup"
            className=" text-orange-500  hover:text-orange-600 transition-colors "
          >
            Sign up to free
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignInForm;
