import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type FormTextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    description?: string;
    error?: string;
  };

export const FormTextarea = React.forwardRef<
  HTMLTextAreaElement,
  FormTextareaProps
>(({ label, description, error, className, required, ...props }, ref) => {
  return (
    <div className={cn("grid gap-2", className)}>
      {label && (
        <Label className={cn(error && "text-destructive")} htmlFor={props.id}>
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}
      <Textarea
        ref={ref}
        className={cn(
          "resize-none",
          error && "border-destructive focus-visible:ring-destructive"
        )}
        {...props}
      />
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
});
FormTextarea.displayName = "FormTextarea";
