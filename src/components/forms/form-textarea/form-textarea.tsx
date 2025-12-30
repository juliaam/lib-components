import { useFormContext, type FieldValues, type Path } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

type FormTextareaProps<
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
};

export function FormTextarea<
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
}: FormTextareaProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>();

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
            <Textarea
              placeholder={placeholder}
              disabled={disabled}
              className="resize-none"
              {...field}
            />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
