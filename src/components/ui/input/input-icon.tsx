import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./input";

export interface InputIconProps extends React.ComponentProps<"input"> {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const InputIcon = React.forwardRef<HTMLInputElement, InputIconProps>(
  ({ className, startIcon, endIcon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {startIcon && (
          <div className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
            {startIcon}
          </div>
        )}
        <Input
          className={cn(startIcon && "pl-9", endIcon && "pr-9", className)}
          ref={ref}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground">
            {endIcon}
          </div>
        )}
      </div>
    );
  }
);
InputIcon.displayName = "InputIcon";

export { InputIcon };
