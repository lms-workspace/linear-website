import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({
  children,
  className = "",
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={className}
      style={{
        maxWidth: "1200px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingLeft: "var(--space-lg)",
        paddingRight: "var(--space-lg)",
      }}
    >
      {children}
    </Component>
  );
}
