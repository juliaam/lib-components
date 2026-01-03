import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export interface FormSelectOption {
  label: string;
  value: string;
}

export interface FormSelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  options: FormSelectOption[];
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
  id?: string;
}

export function FormSelect({
  value,
  onValueChange,
  options,
  label,
  placeholder,
  description,
  error,
  disabled = false,
  className,
  required = false,
  id,
}: FormSelectProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      {label && (
        <Label className={cn(error && "text-destructive")} htmlFor={id}>
          {label} {required && <span className="text-destructive">*</span>}
        </Label>
      )}

      <Select value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger
          id={id}
          className={cn(error && "border-destructive focus:ring-destructive")}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {error && <p className="text-sm font-medium text-destructive">{error}</p>}
    </div>
  );
}
