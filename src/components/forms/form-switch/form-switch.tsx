import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface FormSwitchProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  id?: string;
}

export function FormSwitch({
  checked,
  onCheckedChange,
  label,
  description,
  required = false,
  disabled = false,
  className,
  error,
  id,
}: FormSwitchProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="flex items-center space-x-2">
        <Switch
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          id={id}
        />
        {label && (
          <Label
            className={cn("mt-0", error && "text-destructive")}
            htmlFor={id}
          >
            {label} {required && <span className="text-destructive">*</span>}
          </Label>
        )}
      </div>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}
