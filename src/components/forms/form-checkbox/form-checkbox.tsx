import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type FormCheckboxProps = {
  label: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  description?: string;
  disabled?: boolean;
  className?: string;
  error?: string;
};

export function FormCheckbox({
  label,
  checked,
  onCheckedChange,
  description,
  disabled = false,
  className,
  error,
}: FormCheckboxProps) {
  return (
    <div
      className={cn(
        "flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm",
        className
      )}
    >
      <div className="flex items-center">
        <Checkbox
          checked={checked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          id="checkbox-field" // We might want a unique ID here if possible, but pure components usually get ID passed or internal
        />
      </div>
      <div className="space-y-1 leading-none">
        <Label
          htmlFor="checkbox-field"
          className={cn(error && "text-destructive")}
        >
          {label}
        </Label>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {error && (
          <p className="text-sm font-medium text-destructive">{error}</p>
        )}
      </div>
    </div>
  );
}
