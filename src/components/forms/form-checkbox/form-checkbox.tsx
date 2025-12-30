import type { FieldValues, Path } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";

type FormCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = {
  name: TName;
  label: string;
  description?: string;
  disabled?: boolean;
  className?: string;
};

export function FormCheckbox<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  name,
  label,
  description,
  disabled = false,
  className,
}: FormCheckboxProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(
            "flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm",
            className
          )}
        >
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              disabled={disabled}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
