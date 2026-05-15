"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PageTransition } from "./PageTransition";

const BARE_ROUTES = new Set(["/nanofiber-infocomm"]);

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname && BARE_ROUTES.has(pathname)) return <>{children}</>;
  return (
    <div className="page-shell-wrapper">
      <Navbar />
      <main role="main" className="page-shell-main">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  );
}
