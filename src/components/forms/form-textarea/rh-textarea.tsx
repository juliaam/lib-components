import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

import { FormTextarea, type FormTextareaProps } from "./form-textarea";

export type RHTextareaProps<TFieldValues extends FieldValues> = Omit<
  FormTextareaProps,
  "value" | "onChange" | "onBlur" | "error"
> &
  UseControllerProps<TFieldValues>;

export function RHTextarea<TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RHTextareaProps<TFieldValues>) {
  const {
    field: { value, onChange, ...field },
    fieldState: { invalid, error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <FormTextarea
      {...props}
      {...field}
      value={value}
      onChange={onChange}
      error={invalid ? error?.message : undefined}
    />
  );
}
