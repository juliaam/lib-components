import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

import { type FormCheckboxProps, FormCheckbox } from "./form-checkbox";

export type RHCheckboxProps<TFieldValues extends FieldValues> = Omit<
  FormCheckboxProps,
  "checked" | "onCheckedChange" | "error" | "name"
> &
  UseControllerProps<TFieldValues> & {
    className?: string;
  };

export function RHCheckbox<TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RHCheckboxProps<TFieldValues>) {
  const {
    field: { value, onChange, ref, ...field },
    fieldState: { invalid, error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <FormCheckbox
      {...props}
      {...field}
      checked={value}
      onCheckedChange={onChange}
      error={invalid ? error?.message : undefined}
    />
  );
}
