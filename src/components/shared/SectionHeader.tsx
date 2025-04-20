
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
  centered?: boolean; // Added centered prop
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  className,
  centered = true,
}) => {
  return (
    <div className={cn(
      "mb-10 max-w-2xl mx-auto px-4",
      centered ? "text-center" : "text-left",
      className
    )}>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 relative inline-block">
        <span className="relative z-10">{title}</span>
        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary/50 rounded-full"></span>
      </h2>
      {description && (
        <p className="text-muted-foreground transition-opacity duration-500 animate-fade-in">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
