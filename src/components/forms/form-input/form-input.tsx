import React from "react";
import { useFormContext, type FieldValues, type Path } from "react-hook-form";
import { type Options, withMask } from "use-mask-input";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputIcon } from "@/components/ui/input";

type FormInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = {
  name: TName;
  label?: string;
  placeholder?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  type?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  mask?: string;
  maskOptions?: Options;
};

export function FormInput<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  name,
  label,
  placeholder,
  description,
  required = false,
  disabled = false,
  className,
  type = "text",
  icon,
  iconPosition = "left",
  mask,
  maskOptions,
}: FormInputProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>();

  const maybeMaskProps = mask ? { ref: withMask(mask, maskOptions) } : {};

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel>
              {label} {required && <span className="text-destructive">*</span>}
            </FormLabel>
          )}

          <FormControl>
            <InputIcon
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              startIcon={iconPosition === "left" ? icon : undefined}
              endIcon={iconPosition === "right" ? icon : undefined}
              {...field}
              {...maybeMaskProps}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
