import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

import { FormSelect, type FormSelectProps } from "./form-select";

export type RHSelectProps<TFieldValues extends FieldValues> = Omit<
  FormSelectProps,
  "value" | "onValueChange" | "error"
> &
  UseControllerProps<TFieldValues>;

export function RHSelect<TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RHSelectProps<TFieldValues>) {
  const {
    field: { value, onChange, ...field },
    fieldState: { invalid, error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <FormSelect
      {...props}
      {...field}
      value={value}
      onValueChange={onChange}
      error={invalid ? error?.message : undefined}
    />
  );
}
