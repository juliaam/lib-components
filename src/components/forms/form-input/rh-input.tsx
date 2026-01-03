import {
  useController,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import { type Options } from "use-mask-input";

import { FormInput, type FormInputProps } from "./form-input";

export type RHInputProps<TFieldValues extends FieldValues> = Omit<
  FormInputProps,
  "name" | "defaultValue" | "value" | "onChange" | "onBlur" | "error"
> &
  UseControllerProps<TFieldValues> & {
    mask?: string;
    maskOptions?: Options;
  };

export function RHInput<TFieldValues extends FieldValues>({
  name,
  control,
  defaultValue,
  rules,
  shouldUnregister,
  ...props
}: RHInputProps<TFieldValues>) {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  });

  return (
    <FormInput
      {...props}
      {...field}
      error={invalid ? error?.message : undefined}
    />
  );
}
