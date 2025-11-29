"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import { FormField } from "@/components/molecules/form-field";
import { AuthFormValues, authSchema } from "@/lib/validators/auth";

export function HomeForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: AuthFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    reset();
    console.info(values);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-4 rounded-2xl border border-border bg-card/60 p-6 shadow-sm"
      noValidate
    >
      <FormField<AuthFormValues>
        label="Email"
        type="email"
        placeholder="you@example.com"
        error={errors.email?.message}
        registration={register("email")}
      />
      <FormField<AuthFormValues>
        label="Password"
        type="password"
        placeholder="••••••••"
        error={errors.password?.message}
        registration={register("password")}
      />
      <Button type="submit" isLoading={isSubmitting}>
        Submit
      </Button>
      {status === "success" ? (
        <p role="status" className="text-sm text-green-600">
          Form submitted successfully.
        </p>
      ) : null}
    </form>
  );
}

