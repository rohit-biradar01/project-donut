
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
  centered,
}) => {
  return (
    <div className={cn("text-center mb-10 max-w-2xl mx-auto px-4", className)}>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
};

export default SectionHeader;
