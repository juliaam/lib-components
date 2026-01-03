import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";

import { FormSwitch, type FormSwitchProps } from "./form-switch";

export type RHSwitchProps<TFieldValues extends FieldValues> = Omit<
  FormSwitchProps,
  "checked" | "onCheckedChange" | "error"
> &
  UseControllerProps<TFieldValues>;

export function RHSwitch<TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RHSwitchProps<TFieldValues>) {
  const {
    field: { value, onChange, ...field },
    fieldState: { invalid, error },
  } = useController({ name, control, defaultValue, rules, shouldUnregister });

  return (
    <FormSwitch
      {...props}
      {...field}
      checked={value}
      onCheckedChange={onChange}
      error={invalid ? error?.message : undefined}
    />
  );
}
