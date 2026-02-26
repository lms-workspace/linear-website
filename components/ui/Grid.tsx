import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  columns?: number | { sm?: number; md?: number; lg?: number };
  gap?: string;
  className?: string;
}

export function Grid({
  children,
  columns = 1,
  gap = "var(--space-lg)",
  className = "",
}: GridProps) {
  const col =
    typeof columns === "object"
      ? columns
      : { sm: columns, md: columns, lg: columns };
  const sm = col.sm ?? 1;
  const md = col.md ?? col.sm ?? 1;
  const lg = col.lg ?? col.md ?? col.sm ?? 1;

  return (
    <div
      className={`layout-grid ${className}`.trim()}
      style={{ gap }}
      data-grid-md={md}
      data-grid-lg={lg}
    >
      {children}
    </div>
  );
}
