import React from "react";
import { type Options, withMask } from "use-mask-input";

import { InputIcon } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  description?: string;
  error?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  mask?: string;
  maskOptions?: Options;
};

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      description,
      error,
      className,
      required,
      icon,
      iconPosition = "left",
      mask,
      maskOptions,
      ...props
    },
    ref
  ) => {
    const maskRef = mask ? withMask(mask, maskOptions) : undefined;

    // If mask is present, we use maskRef. If not, we use the forwarded ref.
    // Note: Replicating original behavior where mask ref overrides field ref.
    //Ideally we should merge refs, but strictly following original generic spread behavior implies override.
    // However, since we have explicit control here:
    const effectiveRef = mask ? maskRef : ref;

    return (
      <div className={cn("grid gap-2", className)}>
        {label && (
          <Label className={cn(error && "text-destructive")} htmlFor={props.id}>
            {label} {required && <span className="text-destructive">*</span>}
          </Label>
        )}
        <div className="relative">
          <InputIcon
            ref={effectiveRef}
            startIcon={iconPosition === "left" ? icon : undefined}
            endIcon={iconPosition === "right" ? icon : undefined}
            {...props}
            className={cn(
              error && "border-destructive focus-visible:ring-destructive"
            )}
          />
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
