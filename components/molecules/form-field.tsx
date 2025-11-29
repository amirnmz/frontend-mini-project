"use client";

import { FieldValues, UseFormRegisterReturn } from "react-hook-form";

import { Input } from "@/components/atoms/input";

type FormFieldProps<TFieldValues extends FieldValues> = {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  registration: UseFormRegisterReturn;
};

export function FormField<TFieldValues extends FieldValues>({
  label,
  type = "text",
  placeholder,
  error,
  registration,
}: FormFieldProps<TFieldValues>) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium leading-none text-foreground">
        {label}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        error={!!error}
        {...registration}
      />
      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

