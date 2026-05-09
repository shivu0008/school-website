import type { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

const SectionContainer = ({ children, className = "" }: SectionContainerProps) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 py-12 md:py-24 ${className}`}>
      {children}
    </div>
  );
};

export default SectionContainer;
