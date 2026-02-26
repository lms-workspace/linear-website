import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: "section" | "div";
}

export function Section({
  children,
  id,
  className = "",
  as: Component = "section",
}: SectionProps) {
  return (
    <Component id={id} className={`layout-section ${className}`.trim()}>
      {children}
    </Component>
  );
}
