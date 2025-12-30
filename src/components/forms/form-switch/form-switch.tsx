import { useFormContext, type FieldValues, type Path } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

type FormSwitchProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
> = {
  name: TName;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
};

export function FormSwitch<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>
>({
  name,
  label,
  description,
  required = false,
  disabled = false,
  className,
}: FormSwitchProps<TFieldValues, TName>) {
  const { control } = useFormContext<TFieldValues>();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <div className="flex items-center space-x-2">
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
            {label && (
              <FormLabel className="mt-0">
                {label}{" "}
                {required && <span className="text-destructive">*</span>}
              </FormLabel>
            )}
          </div>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
