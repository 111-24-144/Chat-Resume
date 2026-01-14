import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-surface border border-slate-800 rounded-xl p-6",
          hoverEffect && "transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";
